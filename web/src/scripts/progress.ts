// 本机进度：只存在浏览器 localStorage，不上传、不识别用户。
// 键与结构见 plan/RPD_需求文档.md 的 F6：{ "<命题id>": { done: true, at: "ISO 日期" } }
export const PROGRESS_KEY = 'mc:progress:v1';

export interface ProgressEntry {
  done: true;
  at: string;
}

export type ProgressMap = Record<string, ProgressEntry>;

export function readProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return {};
    return parsed as ProgressMap;
  } catch {
    return {};
  }
}

export function markDone(id: string): ProgressMap {
  const progress = readProgress();
  if (progress[id]?.done) return progress;
  progress[id] = { done: true, at: new Date().toISOString() };
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // 隐私模式或空间满时静默失败，不打断阅读。
  }
  return progress;
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(PROGRESS_KEY);
  } catch {
    // 同上。
  }
}
