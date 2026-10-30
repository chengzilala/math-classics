import { defineConfig } from 'astro/config';

// 纯静态站：零后端、零账号。构建产物在 web/dist/。
export default defineConfig({
  output: 'static',
  devToolbar: { enabled: false },
  // 主题总览已并入「趣味数学」栏目，旧地址保留跳转，避免外链和搜索引擎 404。
  redirects: {
    '/topics': '/fun/',
  },
});
