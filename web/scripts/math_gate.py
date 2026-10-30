#!/usr/bin/env python3
"""命题数值审核闸 —— 用 sympy 把内容里的每个结论重新算一遍。

用法：
    npm run check:math          # 在 web/ 下
    .venv/bin/python scripts/math_gate.py

每个命题 Markdown 的 frontmatter 里可以写 `checks:`，支持两种断言：

    checks:
      - label: 人数                 # 必填，给人看的名字
        solve: "8*n - 3 = 7*n + 4"  # 解方程；等号两边都是 sympy 表达式
        for: n                      # 必填，未知数
        expect: "7"                 # 期望解（可写 37/4）
      - label: 物价
        value: "8*7 - 3"            # 直接求值
        expect: "53"

设计边界：只验「数字对不对」，不验「话讲得好不好懂」。
内容文件来自本仓库，属于可信输入；本脚本不联网、不执行系统命令。
"""

from __future__ import annotations

import sys
from pathlib import Path

try:
    import yaml
    import sympy as sp
    from sympy.parsing.sympy_parser import (
        implicit_multiplication_application,
        parse_expr,
        standard_transformations,
    )
except ModuleNotFoundError as exc:  # pragma: no cover - 环境问题
    print(f"缺少依赖：{exc.name}")
    print("请先在 web/ 下执行：python3 -m venv .venv && .venv/bin/pip install sympy pyyaml")
    raise SystemExit(2)

ROOT = Path(__file__).resolve().parent.parent
CONTENT_DIR = ROOT / "src" / "content" / "propositions"
TOPIC_DIR = ROOT / "src" / "content" / "topics"

TRANSFORMS = standard_transformations + (implicit_multiplication_application,)

REQUIRED_FIELDS = ("id", "title", "source", "source_license", "original", "proofreader")
TOPIC_REQUIRED_FIELDS = ("id", "title", "category", "level", "summary")
EXERCISE_KEYS = ("kind", "question", "options", "answer", "hint", "note")


def parse(expr: str):
    """把字符串解析成 sympy 表达式（允许 sqrt、分数、隐式乘法）。"""
    return parse_expr(str(expr), transformations=TRANSFORMS, evaluate=True)


def frontmatter(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        raise ValueError("文件不是以 --- 开头的 frontmatter")
    parts = text.split("---", 2)
    if len(parts) < 3:
        raise ValueError("frontmatter 未闭合")
    data = yaml.safe_load(parts[1])
    if not isinstance(data, dict):
        raise ValueError("frontmatter 解析结果不是对象")
    return data


def same(a, b) -> bool:
    """相等判断：先精确化简，退回带容差的数值比较（浮点写法如 0.1*0.9 会有尾差）。"""
    try:
        if sp.simplify(a - b) == 0:
            return True
    except Exception:
        pass
    try:
        diff = sp.N(a - b, 15)
        if diff.is_number:
            return abs(complex(diff)) < 1e-9
    except Exception:
        pass
    return False


def check_one(item: dict) -> tuple[bool, str, str]:
    """返回 (是否通过, 说明, 实际值)。"""
    label = str(item.get("label", "")).strip()
    if not label:
        return False, "check 缺少 label", ""

    has_solve = "solve" in item
    has_value = "value" in item
    if has_solve == has_value:
        return False, "check 必须且只能有 solve / value 之一", ""

    if "expect" not in item:
        return False, "check 缺少 expect", ""
    expected = parse(item["expect"])

    try:
        if has_value:
            actual = sp.simplify(parse(item["value"]))
            actual_values = [actual]
        else:
            expression = str(item["solve"]).replace("==", "=")
            if expression.count("=") != 1:
                return False, "solve 必须是一个等号（如 8*n - 3 = 7*n + 4）", ""
            lhs, rhs = expression.split("=", 1)
            unknown = item.get("for")
            if not unknown:
                return False, "solve 缺少 for（未知数）", ""
            symbol = sp.Symbol(str(unknown))
            solutions = sp.solve(sp.Eq(parse(lhs), parse(rhs)), symbol)
            actual_values = sorted(solutions, key=lambda value: float(value))
    except Exception as exc:  # sympy 解析失败
        return False, f"表达式无法计算：{exc}", ""

    if not actual_values:
        return False, "方程无解", "无解"

    if isinstance(item["expect"], list):
        expected_values = [parse(value) for value in item["expect"]]
        if len(expected_values) != len(actual_values):
            return False, "解的数量与 expect 不一致", str(actual_values)
        matched = all(
            any(same(actual, want) for want in expected_values) for actual in actual_values
        )
    else:
        if len(actual_values) != 1:
            return False, f"方程有 {len(actual_values)} 个解，expect 只写了一个", str(actual_values)
        matched = same(actual_values[0], expected)

    actual_text = ", ".join(str(value) for value in actual_values)
    if matched:
        return True, f"= {sp.sstr(expected)}", actual_text
    return False, f"期望 {sp.sstr(expected)}，实算 {actual_text}", actual_text


def check_structure(
    data: dict,
    name: str,
    errors: list[str],
    required_fields: tuple[str, ...] = REQUIRED_FIELDS,
    require_steps: bool = True,
) -> list[str]:
    """结构与练习题的静态校验，返回提示信息。"""
    notes: list[str] = []

    for field in required_fields:
        if not data.get(field):
            errors.append(f"{name}: 缺少必填字段 {field}")

    if require_steps:
        steps = data.get("steps") or []
        if len(steps) != 3:
            errors.append(f"{name}: 白话必须 3 步，当前 {len(steps)} 步")

    exercises = data.get("exercises") or []
    if not exercises:
        errors.append(f"{name}: 没有练习题")
    for index, exercise in enumerate(exercises, start=1):
        missing = [key for key in EXERCISE_KEYS if key not in exercise]
        if missing:
            errors.append(f"{name}: 第 {index} 题缺字段 {', '.join(missing)}")
            continue
        options = exercise["options"]
        answer = exercise["answer"]
        if not isinstance(answer, int) or not 0 <= answer < len(options):
            errors.append(f"{name}: 第 {index} 题 answer={answer} 越界（共 {len(options)} 项）")

    checks = data.get("checks") or []
    if not checks:
        errors.append(f"{name}: 没有 checks，至少写一条可验算断言")

    labels = [str(item.get("label", "")) for item in checks]
    if len(labels) != len(set(labels)):
        errors.append(f"{name}: checks 的 label 有重复")

    notes.append(f"{len(checks)} 条断言")
    return notes


def main() -> int:
    collections = [
        ("命题", CONTENT_DIR, REQUIRED_FIELDS, True),
        ("主题", TOPIC_DIR, TOPIC_REQUIRED_FIELDS, False),
    ]

    files: list[tuple[str, Path, tuple[str, ...], bool]] = []
    for label, directory, required_fields, require_steps in collections:
        if not directory.exists():
            continue
        files.extend((label, path, required_fields, require_steps) for path in sorted(directory.glob("*.md")))

    if not files:
        print(f"没有找到内容文件：{CONTENT_DIR} / {TOPIC_DIR}")
        return 2

    print(f"内容数值审核闸 · sympy {sp.__version__}")
    print("─" * 52)

    total_checks = 0
    errors: list[str] = []
    failed_checks = 0

    for label, path, required_fields, require_steps in files:
        name = path.stem
        try:
            data = frontmatter(path)
        except Exception as exc:
            errors.append(f"{name}: frontmatter 解析失败（{exc}）")
            continue

        title = str(data.get("title") or name)
        check_structure(data, name, errors, required_fields, require_steps)

        checks = data.get("checks") or []
        passed = 0
        details: list[str] = []
        for item in checks:
            if not isinstance(item, dict):
                errors.append(f"{name}: checks 里有非对象条目")
                continue
            total_checks += 1
            ok, message, actual = check_one(item)
            label_text = str(item.get("label", "未命名"))
            if ok:
                passed += 1
                details.append(f"    ✓ {label_text} {message}")
            else:
                failed_checks += 1
                errors.append(f"{name} · {label_text}: {message}")
                details.append(f"    ✗ {label_text} {message}（实算 {actual or '—'}）")

        mark = "✓" if passed == len(checks) and checks else "✗"
        print(f"{mark} [{label}] {title}（{passed}/{len(checks)}）")
        for line in details:
            print(line)

    print("─" * 52)
    if errors:
        print(f"未通过：{len(errors)} 个问题")
        for error in errors:
            print(f"  · {error}")
        return 1

    print(f"{len(files)} 个内容文件 · {total_checks} 条断言 · 全部通过")
    return 0


if __name__ == "__main__":
    sys.exit(main())
