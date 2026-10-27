import { defineConfig } from 'astro/config';

// 纯静态站：零后端、零账号。构建产物在 web/dist/。
export default defineConfig({
  output: 'static',
  devToolbar: { enabled: false },
});
