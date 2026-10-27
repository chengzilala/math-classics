// 构建前校验：每个命题都必须在 plan/版权台账.csv 里登记，且 source / source_license 不为空。
// 用法：node scripts/check-ledger.mjs（npm run build 会自动先跑这一步）
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(here, '..', '..');
const contentDir = join(projectRoot, 'web', 'src', 'content', 'propositions');
const ledgerPath = join(projectRoot, 'plan', '版权台账.csv');

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ',') {
      row.push(field);
      field = '';
    } else if (ch === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (ch !== '\r') {
      field += ch;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((r) => r.some((cell) => cell.trim() !== ''));
}

function readFrontmatter(file) {
  const text = readFileSync(file, 'utf8');
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const fields = {};
  for (const line of match[1].split('\n')) {
    const fieldMatch = line.match(/^([a-z_]+):\s*(.*)$/);
    if (!fieldMatch) continue;
    const [, key, rawValue] = fieldMatch;
    fields[key] = rawValue.trim().replace(/^["']|["']$/g, '');
  }
  return fields;
}

const ledgerRows = parseCsv(readFileSync(ledgerPath, 'utf8'));
const header = ledgerRows.shift() ?? [];
const idIndex = header.findIndex((cell) => cell.trim() === 'id');

if (idIndex === -1) {
  console.error('[版权台账] 找不到 id 列，请检查 plan/版权台账.csv 的表头。');
  process.exit(1);
}

const registered = new Map(ledgerRows.map((row) => [row[idIndex]?.trim(), row]));
const problems = [];

for (const fileName of readdirSync(contentDir).filter((f) => f.endsWith('.md'))) {
  const fields = readFrontmatter(join(contentDir, fileName));
  const id = fields.id;

  if (!id) {
    problems.push(`${fileName}：frontmatter 缺 id`);
    continue;
  }

  if (!fields.source) problems.push(`${id}：缺 source（底本来源）`);
  if (!fields.source_license) problems.push(`${id}：缺 source_license（底本许可）`);

  const row = registered.get(id);
  if (!row) {
    problems.push(`${id}：未在 plan/版权台账.csv 登记`);
    continue;
  }

  if (!row[5]?.trim()) problems.push(`${id}：台账里的「许可」为空`);
  if (!row[6]?.trim()) problems.push(`${id}：台账里的「核验状态」为空`);
}

if (problems.length > 0) {
  console.error('[版权台账] 校验未通过：');
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(`[版权台账] 通过：${registered.size} 条登记，内容来源字段齐全。`);
