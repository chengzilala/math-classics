# 运行说明（Running.md）

给零基础的自己看的：**从一台空电脑到看见页面**，照着做就行。

---

## 0. 先确认要装什么

| 工具 | 干什么用 | 必须吗 |
|---|---|---|
| Node.js 20+ | 跑 Astro（站点框架） | 必须（当前机器 v24） |
| Python 3.10+ | 跑 sympy 审核闸（复算内容里的数字） | 必须（构建会调用） |
| VS Code / Trae | 改文件 | 必须 |
| Git | 版本管理 | 建议 |

检查一下：

```bash
node -v      # 期望 v20 或更高
python3 -V   # 期望 3.10 或更高
```

`node` 报 `command not found` → 去 https://nodejs.org 下 LTS 版装一遍，装完重开终端。

---

## 1. 第一次跑（装依赖 + 开开发模式）

```bash
cd /Users/Admin/Knowledge/Coding/math-classics/web
npm install      # 只第一次需要，会装 astro 和 jsxgraph
python3 -m venv .venv && .venv/bin/pip install sympy pyyaml   # 只第一次，审核闸用
npm run dev
```

终端会显示 <http://localhost:4321>，用浏览器打开即可。
停止：在终端按 `Ctrl + C`。

> 如果 4321 被占用，Astro 会自动换到 4322，以终端提示为准。

---

## 2. 看构建后的成品

```bash
cd /Users/Admin/Knowledge/Coding/math-classics/web
npm run build      # 台账校验 → sympy 审核闸 → 生成 web/dist/
npm run preview    # 起一个本地静态服务预览产物
```

重新构建后刷新页面即可；`npm run preview` 不用重启。

交互原语实验台：开发模式看 <http://localhost:4321/lab/>，构建产物是 `dist/lab/index.html`。

---

## 3. 常用命令

| 目的 | 命令 | 在哪跑 |
|---|---|---|
| 开发模式（改完自动刷新） | `npm run dev` | `web/` |
| 只校验版权台账 | `npm run check` | `web/` |
| 只跑 sympy 审核闸 | `npm run check:math` | `web/` |
| 构建静态产物 | `npm run build` | `web/` |
| 预览构建结果 | `npm run preview` | `web/` |

构建产物在 `web/dist/`，已写进 `.gitignore`，不要提交。

---

## 4. 改哪个文件，看哪里

| 我想改… | 改这里 | 在哪看效果 |
|---|---|---|
| 站名 / 勘误入口 | `web/src/site.ts` | 全站 |
| 导航、页头页脚 | `web/src/layouts/Base.astro` | 全站 |
| 某个命题的原文、白话、练习 | `web/src/content/propositions/<命题>.md` | 该命题页 |
| 交互作图 | `web/src/components/<组件>.astro` + JSXGraph | 该命题页 |
| 交互原语（6 个） | `web/src/components/lab/<组件>.astro` | `/lab` |
| 实验台页面 | `web/src/pages/lab/index.astro` | `/lab` |
| 数值断言（机器验算） | `web/src/content/propositions/<命题>.md` 的 `checks:` | `npm run check:math` |
| 首页卡片 | `web/src/pages/index.astro` | 首页 |
| 首页五段（含关于） | `web/src/pages/index.astro` | 首页上下滚动 |
| 全局样式（配色 / 字体） | `web/src/styles/global.css` | 全站 |
| 内容字段规则 | `web/src/content.config.ts` | 构建时校验 |
| 版权台账 | `plan/版权台账.csv` | 构建前校验 |

**改内容的顺序**：先改 Markdown 数据 → 再看页面 → 最后才动样式或交互。

---

## 5. 加一个新命题（阶段 2 用）

1. 在 `plan/版权台账.csv` 里加一行（id 必须和文件名一致）。
2. 在 `web/src/content/propositions/` 新建 `<id>.md`，照盈不足的字段填。
3. 给新题写至少 1 条 `checks:`（机器验算断言），格式如下：

```yaml
checks:
  - label: 人数                 # 必须能在正文里找到对应结论
    solve: "8*n - 3 = 7*n + 4"  # 解方程；等号左右各一个
    for: n                      # 未知数
    expect: "7"                 # 允许多解，写成列表
  - label: 物价
    value: "8*7 - 3"            # 直接求值
    expect: "53"
```

4. 如果要新交互，在 `web/src/components/` 写组件，并在 `[slug].astro` 的 `interactionMap` 里登记。
5. 跑 `npm run check:math` 先确认数字对；再跑 `npm run build`（台账没登记、source 为空、checks 算不对都会直接报错）。

---

## 6. 出问题先看这三处

1. **页面打不开**：终端里有没有报错？端口被占用就按终端提示的新端口打开。
2. **规则/技能没生效**：是不是没用自己的 `.code-workspace` 打开？必须是 `math-classics.code-workspace`。
3. **改了没变化**：硬刷新（`Cmd + Shift + R`）；看终端是否已崩。

---

## 7. 发布（改完内容怎么上线）

站点已上线：<https://math.chesterlee.cn>（2026-10-28 起为 10 题版本；腾讯云轻量 + Caddy，目录 `/srv/chesterlee/math`）。

```bash
cd /Users/Admin/Knowledge/Coding/math-classics/web
npm run build        # 台账 + sympy 审核闸 + 构建，任一步失败都不产出
rsync -az --delete -e "ssh -i ~/.ssh/chesterlee_web" \
  dist/ ubuntu@43.136.92.125:/srv/chesterlee/math/
```

不用重启服务，Caddy 直接读静态文件；刷新页面即可看到新内容。
**发布前必须确认**：版权台账齐、出处齐全；域名 / 备案 / 页脚 / 体检口径以
[部署上线备案/README.md](../../部署上线备案/README.md) 为准。
