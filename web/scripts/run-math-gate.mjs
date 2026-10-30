// 审核闸入口：优先用 web/.venv 里的 Python（已装 sympy），退回系统 python3。
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

const candidates = [
  join(root, '.venv', 'bin', 'python'),
  join(root, '.venv', 'Scripts', 'python.exe'),
  'python3',
];

const python = candidates.find((candidate) => !candidate.includes('/') || existsSync(candidate));

if (!python) {
  console.error('找不到 Python；请先执行：python3 -m venv .venv && .venv/bin/pip install sympy pyyaml');
  process.exit(2);
}

const result = spawnSync(python, [join(here, 'math_gate.py')], { stdio: 'inherit' });

if (result.error) {
  console.error(`审核闸启动失败：${result.error.message}`);
  process.exit(2);
}

process.exit(result.status ?? 1);
