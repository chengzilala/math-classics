# 会话记录 — math-classics

<!-- 格式：每次会话起一条；每完成一个阶段按固定 6 段追加。只写要点，不贴长代码。 -->

## 2026-10-25 会话条目：立项与骨架搭建（阶段 0 完成）

- **目标**：为「公版数学经典趣味交互站」立项，确定内容线，搭好项目骨架与工作区文件，供另开窗口继续。
- **已做**：
  - 完成方向可行性分析（`Idea/可行性分析_公版数学经典交互站.md`）：公版清单 / 禁碰清单 / 题材对比 / 路径对比 / 成本与用户量评估。
  - 确认内容线：**九章算术趣味线**（盈不足、方田、粟米、勾股），几何原本作为进阶线。
  - 用 `new-project-scaffold` 建骨架：目录、6 个技能副本、`.gitignore`。
  - 改两份规则：`general_rules.md` 换项目版头部（正文与母本一致）；`project_rules.md` 完全重写（含内容版权红线）。
  - 写起步文档：`README.md`、`usage/Running.md`、`plan/RPD_需求文档.md`、本文件。
  - 建 `math-classics.code-workspace`；登记进 `_分发清单.md` 与规划库 README §10；跑 `sync.sh` 体检。
- **关键结论/决定**：
  - 不做 mathsisfun / shuxuele 的复刻或翻译（侵权），改走公有领域中文经典原创路线。
  - 只做 Web 静态站，零后端、零账号、零 Cookie 追踪。
  - 每命题固定 5 段：原文 → 白话 3 步 → 交互任务 → 小练习 → 出处/勘误。
  - 未登记 `plan/版权台账.csv` 的命题不得发布（后续做成构建期校验）。
  - 本轮**不写任何产品代码**，只交付文档与工作区文件。
- **产出物（文件/链接）**：
  - `math-classics/README.md`
  - `math-classics/plan/RPD_需求文档.md`
  - `math-classics/usage/Running.md`
  - `math-classics/math-classics.code-workspace`
  - `math-classics/.trae/rules/{general_rules.md,project_rules.md}`
- **待办**：
  - 用户确认 RPD（尤其「不做」清单与 4 个命题顺序）。
  - 建 `plan/版权台账.csv`，登记首批 4 个命题的底本。
  - 阶段 1：Astro 工程 + 盈不足单页跑通。
  - 定中文站名、勘误入口方式、是否公开仓库。
- **风险/注意事项**：
  - 底本必须用公有领域版本（维基文库 / 影印件）；**现代点校本、现代译本一律不能用**。
  - 白话与结论要双源核验 + 外部审校，宁可少做也不要出错。
  - 未经用户确认：不 `git commit`、不部署、不注册账户。
  - `AI协作规划库/2-技能_Skills/` 下缺 `new-project-scaffold` 母本（只有全局 `~/.trae/skills/` 有），本次未处理。

## 2026-10-25 会话条目：阶段 1 开工（Astro 工程 + 盈不足单页）

- **目标**：把 `web/` 从占位页升级为 Astro 工程，跑通第一个命题（盈不足）的完整 5 段页，并让「未登记来源就不能构建」真正生效。
- **已做**：
  - `web/` 建 Astro 7 工程：`package.json`、`astro.config.mjs`、`tsconfig.json`，删除占位 `index.html`。
  - 内容模型 `src/content.config.ts`（Astro Content Collections + glob loader + zod）：`source` / `source_license` 必填，白话必须 3 步，练习结构固定。
  - 页面：首页（命题卡片）、关于页、`propositions/[slug]` 按 5 段渲染（原文折叠 / 白话 3 步 / 交互 / 练习 / 出处），桌面右侧目录 + 手机折叠目录。
  - 盈不足交互 `YingbuzuLine.astro`：JSXGraph 画「人出 8」「人出 7」两条假设线，滑块拖人数，实时显示两种物价与差额，两线交点即答案。
  - 练习组件 `Exercises.astro`：3 题单选，答错给提示、答对给「古人怎么说」。
  - 建 `plan/版权台账.csv` 与 `web/scripts/check-ledger.mjs`，`npm run build` 前自动校验台账。
  - 全局样式 `global.css`：米白 + 墨黑 + 朱红，手机断点 640px，控件 ≥44px；JSXGraph 基础样式单独成文件并注明 MIT/LGPL 来源。
  - 更新 `README.md`、`usage/Running.md`、`plan/RPD_需求文档.md`（v0.2，阶段 1 勾选）。
- **关键结论/决定**：
  - 站名暂用「算经」，集中在 `web/src/site.ts`，改一处即可。
  - 勘误入口暂指向 `/about/#errata` 说明块，不填假邮箱；仓库公开后再换 Issue。
  - JSXGraph 走 npm 本地打包，不依赖 CDN（符合断网可看）。
  - 原文只录题干与答语、不录「术曰」：当前网络访问不了维基文库，无法二次核验，宁缺不错。
  - YAML 里 `updated: 2026-10-25` 会被解析成日期对象，必须写成带引号的字符串。
- **产出物（文件/链接）**：
  - `web/src/pages/index.astro`、`web/src/pages/about.astro`、`web/src/pages/propositions/[slug].astro`
  - `web/src/components/{YingbuzuLine,Exercises}.astro`
  - `web/src/content/propositions/jiuzhang-yingbuzu.md`
  - `web/src/content.config.ts`、`web/src/site.ts`、`web/src/styles/{global,jsxgraph}.css`
  - `plan/版权台账.csv`、`web/scripts/check-ledger.mjs`
- **待办**：
  - Chrome 实测：拖动滑块、3 题判定、375px 宽度无横向滚动、控制台无报错。
  - 能访问维基文库后补「术曰」原文并二次核验，更新台账「核验状态」。
  - 阶段 2：方田 / 粟米 / 勾股 + 首页进度（F6）。
  - JSXGraph 打包后 chunk >500KB，后续改成进入视口再动态加载。
- **风险/注意事项**：
  - 原文来源目前只核到题干与答语；**发布前必须补二次核验**，否则不算完成。
  - 校对人仍为「待定」，上线前须至少 1 位懂数学的人过一遍。
  - 本轮未 `git commit`、未部署、未注册账户。

## 2026-10-26 会话条目：阶段 1 收尾（盈不足页自测通过）

- **目标**：把阶段 1 的最后两处视觉问题修掉，并完成真实 Chrome 自测。
- **已做**：
  - 修画板尺寸：`.mc-board` 宽高加 `!important`，配 `ResizeObserver` + `resizeContainer`，解决 JSXGraph 行内像素宽高把桌面画板压成 309px 的问题。
  - 修「物价（文）」轴标题被上边缘裁切：`board.create('text', [-1, 108, …])`。
  - 新增红色「差距线」（连接两种假设的物价点），拖到交点时长度归零。
  - `npm run build` 通过（台账校验 + 3 页静态输出）。
  - Chrome（9222 端口 CDP）实测：桌面画板 702×320；滑块拖到 7 时读数「两种出法算出的物价都是 53 文，对上了：7 人，物价 53 文。」；复位正常；3 题答对/答错/提示/解析均正常；375px 下 `scrollWidth=375`、滑块高 44px；控制台 0 报错。
- **关键结论/决定**：
  - 阶段 1 收尾完成，RPD 里「自测」一项已勾选。
  - 手机端为 375px 模拟验证，真机仍待确认（RPD 保留该提醒）。
- **产出物（文件/链接）**：
  - `web/src/components/YingbuzuLine.astro`、`web/src/styles/global.css`
  - `plan/RPD_需求文档.md`（自测项勾选）
- **待办**：
  - 能访问维基文库后补「术曰」原文并二次核验，更新台账「核验状态」。
  - 阶段 2：方田 / 粟米 / 勾股 + 首页进度（F6）+ SEO（F8）。
  - JSXGraph chunk >500KB，后续改成进入视口再动态加载。
- **风险/注意事项**：
  - 校对人仍为「待定」，上线前须至少 1 位懂数学的人过一遍。
  - 未 `git commit`、未部署、未注册账户。

## 2026-10-26 会话条目：视觉改版（参考 jihe.1mi.ai，改「墨蓝 + 金线」）

- **目标**：按用户指定参考 `https://jihe.1mi.ai/#top` 的视觉方向，把全站从「米白 + 朱红」改成深墨蓝 + 米金的高级暗色风格，只借方向、不搬代码素材。
- **已做**：
  - `web/src/styles/global.css` 全量重写：墨蓝底 `#070b16` / 面板 `#0d1426`、正文 `#ece6d6`、金色 `#d9b25f`、辅助蓝 `#6aa8ff`；固定顶栏（模糊背景）、右侧滚动标尺、巨幅渐变标题、编号卡片、角标、`IntersectionObserver` 进场、`prefers-reduced-motion` 降级、四档断点。
  - `Base.astro` 重写：SVG 三角 logo + 拉丁副标、导航下划线、滚动标尺进度、大字号页脚；导航按当前路径高亮。
  - `index.astro` 重写：巨幅 hero（手绘勾股 SVG 线描）、4 条数字、4 条读法、命题卡片、F6 进度条与「已做完」角标（对接既有 `scripts/progress.ts`）。
  - 命题页五段标题加英文 eyebrow；关于页加 eyebrow；`YingbuzuLine.astro` 画板改暗色（轴 `#8d95a9`、线金/蓝、交点金）；favicon 重绘为暗底金框。
  - 版本号 `web/package.json` 0.1.0 → 0.2.0；`plan/RPD_需求文档.md` 升 v0.3，§5 UI/UX 改写为墨蓝 + 金线并注明「只参考方向」。
  - 自测修正：`backdrop-filter` 前缀顺序（压缩后保留标准属性）；手机端顶栏与页脚链接撑到 44px 可点高度。
- **关键结论/决定**：
  - 参考站的「左右分栏 + sticky 滚动舞台」需大量滚动驱动脚本，与「三分钟一题」定位不符，改为「巨幅 hero + 分段 + 卡片」，保留质感不增负担。
  - 配色、版式、SVG、文案全部自绘，未复制参考站任何代码 / 素材 / 文案（符合项目版权红线）。
  - 暗色下 JSXGraph 必须显式给轴与线配色，否则默认黑线白底不可读。
- **产出物（文件/链接）**：
  - `web/src/styles/global.css`、`web/src/layouts/Base.astro`、`web/src/pages/index.astro`
  - `web/src/pages/propositions/[slug].astro`、`web/src/pages/about.astro`、`web/src/components/YingbuzuLine.astro`
  - `web/public/favicon.svg`、`web/package.json`、`plan/RPD_需求文档.md`
- **待办**：
  - 用户确认视觉方向（截图上传通道当时不可用，本轮以 DOM/样式指标 + 本机 Chrome 实测代替）。
  - 能访问维基文库后补「术曰」原文并二次核验。
  - 阶段 2：方田 / 粟米 / 勾股 + SEO（F8）。
- **风险/注意事项**：
  - 巨幅标题与标尺在低性能手机上可能掉帧，真机需再看一眼。
  - 未 `git commit`、未部署、未注册账户。

## 2026-10-26 会话条目：阶段 2 补齐（方田 / 粟米 / 勾股 + 首页进度 + SEO）

- **目标**：把 MVP 剩下的三个命题做完，并收掉 JSXGraph 首屏体积、本机进度、SEO 三笔技术债。
- **已做**：
  - 三个命题内容：`jiuzhang-fangtian`（15×16=240 平方步=1 亩）、`jiuzhang-sumi`（10 升粟→6 升糲米）、`jiuzhang-gougu`（勾三股四弦五），各含原文 / 白话 3 步 / 3 题 / 出处字段。
  - 三个交互组件：`FangtianArea.astro`（双滑块改长宽，面积与亩数实时算）、`SumiRatio.astro`（5:3 斜线与虚线对齐）、`GouguTriangle.astro`（勾股滑块，√(勾²+股²) 实时算）；全部沿用 `IntersectionObserver + await import('jsxgraph')` 懒加载。
  - 内容模型新增可选 `interaction_note`，命题页「动手」说明改为内容驱动。
  - 首页清理并发写入留下的重复进度面板；进度脚本接 `data-proposition-id` / `data-progress-count` / `data-progress-bar`，卡片显示「已做完」（`.is-done`）；移除三张 `upcoming` 占位卡与对应 CSS。
  - 版权台账登记 4 条（构建前校验通过）。
  - `README.md` 状态与「下一步」、`plan/RPD_需求文档.md` 阶段 2 勾选更新。
- **关键结论/决定**：
  - 几何类画板（方田 / 勾股）必须保比例：`keepaspectratio: true` + `.mc-board--square`（420×360），否则 15×16 的长方形会被画扁。
  - JSXGraph 没有 `polyline` 元素，直角标记改用两段 `segment`。
  - 旧 dev server 对同名 chunk 有缓存，改了 gougu 后仍发旧代码；重启 `astro dev` 后正常（排查时以源码是否含旧字符串为准）。
- **产出物（文件/链接）**：
  - `web/src/content/propositions/jiuzhang-fangtian.md`、`jiuzhang-sumi.md`、`jiuzhang-gougu.md`
  - `web/src/components/FangtianArea.astro`、`SumiRatio.astro`、`GouguTriangle.astro`
  - `web/src/pages/index.astro`、`web/src/pages/propositions/[slug].astro`、`web/src/styles/global.css`、`web/src/content.config.ts`
  - `plan/版权台账.csv`、`README.md`、`plan/RPD_需求文档.md`
- **待办**：
  - 外部审校 1 轮，四页 `proofreader` 仍为「待定」；术文待维基文库可达后二次核验。
  - `site.url` 仍为 `https://example.com`，上线前必须改。
  - 部署与真实域名（阶段 3）。
- **风险/注意事项**：
  - JSXGraph chunk 仍 >500KB、`jessiecode.js` 用直接 `eval`；懒加载只缓解首屏，未消除告警。
  - 手机端为 375px 模拟（无横向滚动、滑块 44px、画板 297×260），真机仍待确认。
  - 未 `git commit`、未部署、未注册账户。

## 2026-10-26 会话条目：全站自测（墨蓝主题下的 6 页）

- **目标**：阶段 2 完成后，确认 4 个命题页 + 首页 + 关于页在墨蓝主题下都正常。
- **已做**：
  - `npm run build` 通过（台账校验 + 6 页静态输出，仅剩 `site.url` 占位域名提示）。
  - `astro preview` 起在 4322（4321 被旧进程占用），用本机 Chrome CDP 逐页检查桌面 1440 与手机 390。
  - 结果：6 页均无横向滚动、控制台 0 报错；4 个画板全部渲染（盈不足 / 粟米 666×320，方田 / 勾股 420×360；手机 312×260）；滑块与「复位」均 44px；拖滑块读数实时变化；每页 3 题、每题 4 个选项；首页 4 张卡片均上线、进度面板 total=4、导航高亮正确。
  - 画板配色核对：轴 `#8d95a9`、刻度沙色、主图金 `#d9b25f`、辅助蓝 `#6aa8ff`，暗色下无默认黑线/白底。
- **关键结论/决定**：
  - 墨蓝主题在全部 6 页一致，无需再改样式。
  - 桌面顶栏与页脚小链接高度 31/14px 属鼠标场景，手机断点已统一 44px，维持现状。
- **产出物（文件/链接）**：
  - 无代码改动；验证覆盖 `web/src/pages/*`、`web/src/components/*`、`web/src/styles/global.css`
- **待办**：
  - 外部审校 1 轮（四页 `proofreader` 仍「待定」）。
  - 上线准备：`site.url` 换真实域名、确认备案口径、部署 Cloudflare Pages。
- **风险/注意事项**：
  - 本轮为 390px 模拟，真机仍待确认。
  - 未 `git commit`、未部署、未注册账户。

## 2026-10-27 会话条目：首页改成「左舞台 + 右整段吸附」

- **目标**：对齐 jihe.1mi.ai 的首屏结构 —— 交互更明显、页面占满宽度、每次下滑整屏落到下一段。
- **已做**：
  - `Base.astro` 加 `full` 属性（首页去掉 1120px 居中容器）、`html.mc-html--home`、`main.mc-main--full`；顶栏导航扩成 4 项（起点 / 命题 / 读法 / 关于），首页按分区高亮、内页按路由高亮。
  - `index.astro` 全量重写：46% / 54% 双栏；左栏 `sticky 100vh` 舞台（流光宋体大标题 + 勾股线描 + 圆点分区轨 + 「序号 — 分区 / 向下滚动」+ 滚动静差 + 鼠标光斑）；右栏四段（起点 / 命题 / 读法 / 开始），段内入场动画。
  - 吸附：`html.mc-html--home { scroll-snap-type: y mandatory }` + 每段 `scroll-snap-align: start`；`≤959px` 退化为单列、隐藏装饰线描。
  - 修掉线描压字：装饰 SVG 下移到舞台底部区并加纵向遮罩；窄屏直接隐藏。
  - 矮屏（高 ≤ 820px）压缩段内间距与卡片高度，避免段内容超一屏导致吸附卡住。
  - 最后一屏提示从「向下滚动」改为「已到底」，并停掉提示线动画。
  - `global.css` 清掉 `.mc-hero*` / `.mc-art-*` / `.mc-scroll-hint` / `.mc-stats` / `.mc-quote` 等首页旧样式残留。
  - `web/package.json` 0.3.0 → 0.4.0；RPD §5 补「首页版式 / 整段吸附 / 矮屏 / 导航」四条约定。
- **关键结论/决定**：
  - 吸附用原生 `scroll-snap`（零 JS），定位/入场/导航联动才用 IntersectionObserver。
  - 吸附只在「宽 ≥ 960 且高 ≥ 700」时开启；段内容必须一屏放完，否则降级不吸附。
- **产出物（文件/链接）**：
  - `web/src/pages/index.astro`
  - `web/src/layouts/Base.astro`
  - `web/src/styles/global.css`
  - `plan/RPD_需求文档.md` §5
- **验证**：
  - 1440×900 / 1280×720：`scroll-snap-type: y mandatory`，四段高度均 = 1 屏；连续下滑落点 900→1800→2700（720→1440→2160），舞台 `top` 保持 0，圆点 / 序号 / 顶栏高亮同步；控制台 0 报错。
  - 390×844 / 360×780 / 768×1024：无横向滚动，导航 4 项不挤（360px 下 brand 右 99 / nav 左 182）；命题页画板正常。
- **待办**：
  - 真机滚动惯性下的吸附手感复核（尤其触控板）。
  - 外部审校 1 轮；上线前换 `site.url` 真实域名。
- **风险/注意事项**：
  - `scroll-snap: mandatory` 对「段内容超一屏」很敏感，后续给四段加内容时必须复测高度。
  - 未 `git commit`、未部署。

## 2026-10-27 会话条目：首页左栏四场景随滚动切换

- **目标**：把左舞台从「一张静态勾股图」升级为「四个分区各一张图」，右栏滚到哪段，左栏就实时换图并重播描线。
- **已做**：
  - `index.astro` 删除原 `mc-stage__tri / __right / __dot / __label` 单图，新增 `.mc-stage__scenes` 内 4 个 `figure[data-scene]`：`start`（勾三股四弦五三角形）、`propositions`（方田 5×3 网格 + 「240 平方步 / 即一亩」）、`reading`（01–05 五条渐短横线）、`progress`（坐标轴 + 两条假设线 + 蓝色交点）。
  - 场景 CSS：绝对叠放、`opacity/visibility` 过渡；`is-on` 才可见；`mc-draw` 描线（1.4s）、网格线延迟 0.5s、圆点延迟 0.9s 出现；场景区在舞台底部预留 `clamp(210px, 30vh, 300px)`，与标题区不重叠。
  - `setActive()` 按当前 pane 的 `id` 切 `[data-scene].is-on`，切过去即重播动画。
  - `≤959px` 隐藏 `.mc-stage__scenes`；`prefers-reduced-motion` 删掉失效的 `mc-stage__tri/__right`，改为 `.mc-draw / .mc-draw-lines line { animation: none; stroke-dashoffset: 0 }` + 圆点直接显示。
  - RPD §5 补「左栏随滚动换图」一条；`web/package.json` 0.4.0 → 0.5.0。
- **关键结论/决定**：
  - 场景 key 直接复用 pane 的 `id`（start / propositions / reading / progress），避免再维护一份映射表。
  - 切换动画靠 class 重加触发，不写 JS 计时器。
- **产出物（文件/链接）**：
  - `web/src/pages/index.astro`
  - `plan/RPD_需求文档.md` §5
- **验证**：
  - `npm run build` 通过（台账校验 + 6 页输出）。
  - 1440×900 CDP 实测：加载即 `start`；滚到 900 / 1800 / 2700 时 `onScenes` 分别为 `propositions / reading / progress`，其余 opacity 0 + visibility hidden；序号 01→04、顶栏高亮同步；标题区底边与场景区顶边留 111px 间距，无重叠；控制台 0 报错。
  - 390×844：`.mc-stage__scenes` 为 `display: none`，无横向滚动，舞台高 523px。
  - 四张截图逐张核对：三角、方田网格、五段横线、两线交点均正常显示。
- **待办**：
  - 真机 / 触控板下滑时的换图节奏复核；外部审校 1 轮；上线换 `site.url`。
- **风险/注意事项**：
  - 场景 SVG 宽高比 520×200，舞台极窄或极矮时可能被压扁，后续加内容需复测。
  - 未 `git commit`、未部署。

## 2026-10-27 会话条目：命题页改成全宽版式

- **目标**：命题页此前被 1120px 居中容器 + 44rem 正文列限制，宽屏下只占一半；按参考站改成铺满视口。
- **已做**：
  - `propositions/[slug].astro` 给 `Base` 传 `full`、`article` 加 `mc-article--full`，页头拆成 `.mc-proposition__meta`（卷次 + 标题）与 `.mc-lead`（摘要）两个块。
  - `global.css` 新增 `.mc-main--full { max-width: none }`；≥1024px 下页头两栏（标题左 / 摘要在右并底对齐）、标题上限 112px；`.mc-layout` 改为「正文 1fr + 目录 `clamp(10rem,12vw,16rem)`」，目录贴最右。
  - 正文块（`.mc-section > :not(.mc-section__head)`）限制 70rem 保证可读行长，分区标题与分隔线横跨整屏。
  - RPD §5 补「命题页全宽」一条；`web/package.json` 0.6.0 → 0.7.0。
- **关键结论/决定**：
  - 全宽不等于无限拉长文字：只让版心与分隔线铺满，正文块仍留 70rem 上限。
  - 移动端不受影响，仍单列、无横向滚动。
- **产出物（文件/链接）**：
  - `web/src/pages/propositions/[slug].astro`
  - `web/src/styles/global.css`
  - `plan/RPD_需求文档.md` §5
- **验证**：
  - 1440×900：main 1440、页头 1328、正文列 1105、目录贴右（左缘 1211）、标题 106px、画板 1067×320、无横向滚动。
  - 1920×1080：正文列 1514、目录左缘 1634、标题 112px、画板 1082×320，分隔线横跨整屏。
  - 1024×768：正文列 746、目录 160，与改版前基本持平；390×844：单列、画板 312×260、无横向滚动。
  - 四个尺寸控制台均 0 报错；首页四场景逻辑未受影响。
- **待办**：
  - 真机复核 1920 / 2560 宽屏观感；外部审校 1 轮；上线换 `site.url`。
- **风险/注意事项**：
  - 超宽屏下正文块右侧仍会留白（有意为之，避免一行过长）；若后续要求「绝对铺满」，需改成双栏正文。
  - 未 `git commit`、未部署。

## 2026-10-27 会话条目：练习选项改自适应网格

- **目标**：全宽命题页下，练习的选项按钮被拉成整行超长条，宽屏观感差且浪费空间。
- **已做**：
  - `global.css` 的 `.mc-exercise__options` 改为 `repeat(auto-fit, minmax(min(100%, 15rem), 1fr))`：窄屏 1 列、平板 2 列、桌面 3–4 列。
  - `.mc-choice` 加 `display: flex; align-items: center`，多行文字垂直居中，按钮最小高度仍 44px。
  - RPD §5 补「练习选项自适应」一条；`web/package.json` 0.7.0 → 0.7.1。
- **关键结论/决定**：
  - 用 `auto-fit` 而不是写死断点，选项数量 3 或 4 时都能自动铺满且不留空轨。
  - `min(100%, 15rem)` 保证 390px 手机不会被迫挤出两列。
- **产出物（文件/链接）**：
  - `web/src/styles/global.css`
  - `plan/RPD_需求文档.md` §5
- **验证**：
  - 1920×1080：题卡 1120 宽，选项 3 个 → 3 列（354px），4 个 → 4 列（264px），单行不折行。
  - 1440×900：3 个 → 3 列（349px），4 个 → 4 列（260px）。
  - 1024×768：2 列（348px），第 3 个选项自然落到第二行。
  - 390×844：1 列（308px），无横向滚动；四档控制台 0 报错。
- **待办**：
  - 真机点选复核（选中/答错/提示态）；外部审校 1 轮；上线换 `site.url`。
- **风险/注意事项**：
  - 选项文案以后若变长，15rem 最小列宽可能让文字换行变高，属正常自适应，不建议再写死列数。
  - 未 `git commit`、未部署。

## 2026-10-27 会话条目：「关于」并入首页滚动段

- **目标**：关于不再是单独页面跳转，改成和其他分区一样，靠首页上下滚动切换。
- **已做**：
  - 首页新增第 5 段 `#about`（`data-pane="05"`），内容为公版底本 / 原文不改字 / 逐题登记 / 零账号零广告 + 勘误说明块（`id="errata"`）。
  - 左栏新增「公版底本 · 逐题登记」场景图，随滚动淡入重画；分区圆点导航补「05 关于」。
  - 首页脚本导航联动改为按分区 id 映射（start / propositions / reading / about），不再用写死数组。
  - 导航「关于」改指 `/#about`；`site.errataHref` 改 `/#errata`；删除独立页 `web/src/pages/about.astro`，sitemap 去掉 `/about/`。
  - 同步 `usage/Running.md` 与 RPD 的目录说明。
- **关键结论/决定**：
  - 关于段放在「开始」之后作为末段（落款位置），并作为滚动到底的终点。
  - 全站只保留一份关于文案，避免两处维护漂移。
- **产出物（文件/链接）**：
  - `web/src/pages/index.astro`、`web/src/layouts/Base.astro`、`web/src/site.ts`、`web/src/pages/sitemap.xml.ts`
- **验证**：
  - 构建产物首页含 5 个 `data-pane` 段与 about 场景，`/about/` 已不再生成。
  - 完整 `npm run build` 当前被另一条内容任务挡住：5 个新命题（方程/均输/商功/少广/衰分）缺 `significance` 且未登记台账；本次在临时副本中构建通过。
- **待办**：
  - 待那 5 个命题补全并登记台账后，回跑完整 `npm run build`。
- **风险/注意事项**：
  - 旧链接 `/about/` 会 404（站内已无引用）；若需外部深链，改用 `/#about`。
  - 未 `git commit`、未部署。

## 2026-10-27 会话条目：补齐九章算术九卷（4 → 9 题）

- **目标**：把首页之外剩下的五个命题补齐，让《九章算术》九卷各有一道 3 分钟能讲完的题。
- **已做**：
  - 新增 5 份命题内容：衰分（卷三·第一问）、少广（卷四·第十二问）、商功（卷五·第八问）、均输（卷六·第十二问）、方程（卷八·第一问）；每题含原文、白话 3 步、交互说明、3 题练习、出处与勘误。
  - 新增 5 个 JSXGraph 交互：`ShuaifenShare`（5:4:3:2:1 份数带）、`ShaoguangSquare`（拖正方形边长逼近 √55225）、`ShanggongBox`（长宽高算土方）、`JunshuPursuit`（追及交点）、`FangchengTrial`（猜上禾、反推中禾/下禾）。
  - `[slug].astro` 注册 5 个 `interaction` 映射；`plan/版权台账.csv` 追加 5 行（合计 9 条）。
  - 首页：统计 4 → 9 条内容线，文案改「九道古题 / THE NINE / 九题，九张图」，命题卡改三列三行并压紧高度，保证 100vh 吸附内放得下。
  - README、RPD（v0.3 → v0.4）同步为 9 题；`web/package.json` 0.7.1 → 0.8.0。
- **关键结论/决定**：
  - 每卷只取一题、优先能画成一张图的题；均输避开开头四县分摊大题，取同卷追及问。
  - 原文照录维基文库，不改字；衰分第一问「簪裹」按原文保留，差异写进台账备注。
  - 九卡改三列三行：两列会有 5 行，超出 100vh 会破坏首页整页吸附。
  - 新内容必须补 `significance`，否则 Astro schema 直接构建失败；含「 : 」的 YAML 值要加引号。
- **产出物（文件/链接）**：
  - `web/src/content/propositions/jiuzhang-{shuaifen,shaoguang,shanggong,junshu,fangcheng}.md`
  - `web/src/components/{ShuaifenShare,ShaoguangSquare,ShanggongBox,JunshuPursuit,FangchengTrial}.astro`
  - `web/src/pages/index.astro`、`web/src/pages/propositions/[slug].astro`、`plan/版权台账.csv`
- **验证**：
  - `npm run build`：版权台账 9 条通过，10 个页面全部生成（首页 + 9 命题 + sitemap/robots），0 报错。
  - 旧四题页面无改动，交互映射保持原样。
- **待办**：
  - 本地 `npm run preview` 抽查 5 个新交互的拖动与命中态；手机宽度复核三列卡片。
  - 九页 `proofreader` 仍为「待定」，需外部审校；少广、方程的术文待补录。
  - 线上仍是四题版本，部署需用户确认。
- **风险/注意事项**：
  - 960–1100px 宽屏下三列卡片偏窄，章节行会换行，属预期；悬停预览可看全文。
  - 未 `git commit`、未部署。

## 2026-10-27 会话条目：9 题版本上线 math.chesterlee.cn

- **目标**：把本地 9 题版本推到线上，完成阶段 3 的「域名与部署」，再做上线验证。
- **已做**：
  - 核实线上现状：`math.chesterlee.cn` 已解析到 `43.136.92.125`，Caddy 站点指向 `/srv/chesterlee/math`，此前跑的是 4 题版本。
  - `rsync -az --delete` 推送 `web/dist/` 到服务器，未改 Caddy、未重启服务。
  - 部署台账回填：§二 域名总表加 `math` 行、§2.1 加项目部署位置、§2.2 改「已上线」、§六 追加操作记录。
  - README / Running / RPD 阶段 3 同步为「已上线，9 题版本」。
- **关键结论/决定**：
  - 部署台账原写「未解析」是过期状态，实测域名与站点早已存在，只是内容停在 4 题。
  - 本次只换静态产物，Caddy 无需 reload。
- **产出物（文件/链接）**：
  - 线上：<https://math.chesterlee.cn>
  - `部署上线备案/README.md`、`README.md`、`usage/Running.md`、`plan/RPD_需求文档.md`
- **验证**：
  - 首页 HTTP 200，`data-proposition-id` 共 9 个；5 个新命题页均 200；sitemap 含 9 条命题。
  - `health.sh math.chesterlee.cn` 全绿：HTTP 200 / 备案号 ✅ / 版权 ✅ / 证书剩 89 天。
- **待办**：
  - 找 20 个真人试读并记录反馈；外部审校 1 轮；接无 Cookie 统计。
- **风险/注意事项**：
  - 线上内容已变，但内容正确性仍未经外部审校；发现问题按勘误入口记录后重跑构建 + rsync。
  - 未 `git commit`。

## 2026-10-28 会话条目：左栏改成连续循环的勾股作图

- **目标**：参考 jihe.1mi.ai 首屏「圆规 + 直尺一步一步作图」的动作，把首页左栏从「按分区换四张图、每张只播一次」改成**一块连续、有节奏、可拖动**的作图动画。
- **已做**：
  - 新增 `web/src/components/StageLoop.astro`：SVG 勾三股四弦五（股四 = 竖 288、勾三 = 横 216、弦五 = 360），按六拍循环——① 画股 → ② 画勾 → ③ 连弦 → ④ 以弦为直径作圆（圆心即弦中点，圆过直角顶点，Thales）→ ⑤ 直角标记与「勾三 / 股四 / 弦五」标注 → ⑥「九 + 十六 = 二十五」。
  - 时间轴 `requestAnimationFrame` 驱动：每拍先描线（ease-out）、再停顿，整轮 16.2s，结尾 0.94→1 淡出后重新落笔；线长用 `getTotalLength()` 量一次，圆用周长，保证描线速度一致。
  - 节奏提示：图下「01 / 06 + 细进度线 + 当前拍标题」，再一行六格拍点，当前拍亮起。
  - 交互：按住图面左右拖动可直接停在任意一拍（`setPointerCapture` + `touch-action: pan-y`，触屏竖滑不受影响），松手后从该处继续自动走。
  - 只在舞台 `is-anim`（离开首屏）时跑；回到首屏或切后台自动停并归零；`prefers-reduced-motion` 下只画完整图形、不自动播。
  - 删除 `index.astro` 原 4 个 `figure[data-scene]` 与配套 CSS（`.mc-stage__scene` / `.mc-draw*` / `.mc-scene__dots`），去掉脚本里的 `[data-scene]` 切换；保留 `.mc-stage__scenes` 容器负责定位与显隐。
  - `plan/RPD_需求文档.md` §5 用「左栏连续作图」替换旧「左栏随滚动换图」；`web/package.json` 0.8.1 → 0.8.2。
- **关键结论/决定**：
  - 滚动吸附是 `scroll-snap: mandatory`，按滚动像素驱动会让作图一顿一顿，所以改「自动循环 + 拖动擦洗」，既连续又不破坏吸附。
  - 用本项目的勾股（3-4-5）当主角，而非照搬参考站的等边三角形：动作形式借鉴，图形与文案自绘，符合版权红线。
  - 动画只在左栏舞台内出现，首屏仍保留「算经」主体，和原版式约定一致。
- **产出物（文件/链接）**：
  - `web/src/components/StageLoop.astro`（新增）
  - `web/src/pages/index.astro`、`plan/RPD_需求文档.md`、`web/package.json`
- **验证**：
  - `npm run build` 通过：台账 10 条、数值审核闸 32 条断言全过，11 页输出。
  - 产物 `dist/index.html` 含 `data-loop` / `data-part` 标记与拖动脚本；本机 `astro dev`（4321）已用 Chrome 打开供目视复核。
- **待办**：
  - 目视复核：六拍节奏是否顺、标注是否压线、拖动擦洗手感；真机触屏再试一次。
  - 外部审校 1 轮；线上未部署本次改动。
- **风险/注意事项**：
  - 已滚到中段刷新页面时，IntersectionObserver 会重新判定分区，循环从头开始属预期。
  - 未 `git commit`、未部署。

## 2026-10-28 会话条目：接入统一账户中心（可选登录，本机闭环）

- **目标**：把「统一账户中心」真正接进 math——顶栏加一个可选登录入口，跑通「跳登录 → 账户中心登录 → 带票回跳 → 页面拿到 uid」，同时不改变「不登录也能做题」。
- **已做**：
  - `public/ps-auth.js`：从 `account-center/sdk/ps-auth.js` 复制（SDK 本轮新增 `loginUrl`，解决本地「页面 4321 / 登录页 18830 / 接口 8942」三端口不同域时登录页拼错的问题）。
  - `src/site.ts` 新增 `account` 配置：`apiBase` / `loginUrl` / `productId: 'math-classics'`；`Base.astro` 用 `import.meta.env.DEV` 切本机与线上两套地址。
  - `Base.astro` 顶栏加 `.mc-topbar__end` + `button[data-account]`，inline 脚本初始化 SDK：已登录显示「已登录」（点击确认后退出），未登录显示「登录」（跳账户中心）；账户服务不可用则隐藏入口，做题不受影响。
  - `global.css` 补 `.mc-topbar__end` / `.mc-account` 样式（沿用 nav 下划线动效，移动端纳入 44px 可点高度）。
  - 口径统一改为「可选登录、不自建账号」：`site.ts` 描述、首页数字块与关于项、页脚文案、`README.md`、`plan/RPD_需求文档.md`。
  - 账户中心侧登记作品：`node tools/register-product.js math-classics 算经 http://localhost:4321`，并重启 dev-server 生效。
- **关键结论/决定**：
  - 登录一律走账户中心，本站不建账号、不存密码；未登录时按钮隐藏/展示失败都不阻断做题（SDK 请求失败只 `hidden`）。
  - 线上配置写死 `https://account.chesterlee.cn`，本机靠 `import.meta.env.DEV` 切到 `localhost:8942 / 18830`，同一份代码不改。
  - 作品地址必须先在 `ac_products` 登记，票据才允许回到该 origin（`localhost` 与 `127.0.0.1` 算不同域）。
- **产出物（文件/链接）**：
  - `web/public/ps-auth.js`、`web/src/site.ts`、`web/src/layouts/Base.astro`、`web/src/pages/index.astro`、`web/src/styles/global.css`
  - `README.md`、`plan/RPD_需求文档.md`
- **验证**：
  - `npm run build` 通过：台账 10 条、数值断言全过，12 页输出；`dist/ps-auth.js` 存在（6485B），`dist/index.html` 含 SDK 引用与登录按钮标记。
  - API 级闭环实测：`accountCode.login` 取 Token → `auth.ticket.issue` 回 `http://localhost:4321/?ps_ticket=<32位>` → `auth.ticket.redeem` 换到**同一 uid** → `me` 正常；同一票据复用返回 `CODE_EXPIRED`；未登记域名拒签。
- **待办**：
  - 用户在 Chrome 里亲手走一遍真实登录（点登录 → 账户中心登录 → 回本站 → 按钮变「已登录」）。
  - 上线前：在线上数据里登记 `https://math.chesterlee.cn`，并部署账户服务后复验。
  - 线上 `ALLOWED_ORIGINS` 必须写具体域名，不能用 `*`。
- **风险/注意事项**：
  - 本地三个端口互为不同域，`loginUrl` 必须显式配置，否则跳到不存在的 `/login.html`。
  - 账户中心数据在内存，登记作品后须重启服务；重启后旧会话/验证码失效。
  - 未 `git commit`、未部署。

## 2026-10-28 会话条目：新增《孙子算经》鸡兔同笼（第 10 题）

- **目标**：用户问「鸡兔同笼来自哪里」，确认出处为《孙子算经》卷下第 31 题后，按站内五段结构做成第 10 个命题页。
- **已做**：
  - 新增 `sunzi-jitu.md`：原文（繁体，题干 + 答语 + 术文前半段）、白话 3 步、4 条 sympy 断言、3 题练习、出处；`proofreader` 仍为待定。
  - 新增 `JituCage.astro`：35 个头色块 + 脚数条（蓝 = 鸡 2 脚、金 = 兔 4 脚，虚线标 94），拖滑块把鸡换成兔，命中 94 时高亮；纯 DOM + CSS，不引 JSXGraph。
  - `[slug].astro` 注册 `jitu-cage`；`plan/版权台账.csv` 追加 1 行（合计 10 条）。
  - 首页：统计改「10 道古题」，文案改「十道古题 / TEN PROBLEMS / 十题，十张图」，第 10 张卡（孙子算经）满行独占。
  - README / Running / RPD（v0.4 → v0.5）同步为 10 题；`web/package.json` 0.8.2 → 0.9.0。
- **关键结论/决定**：
  - 底本按汉典古籍李淳风注本逐字核对（维基文库本次打不开）；术文后半段「再命之，上三除下三……」诸本文义有歧，只录到「以少减多」，台账备注待二次核验。
  - 交互不引 JSXGraph：35 个 DOM 色块 + 脚数条更直观，也不增加首屏体积。
  - 10 张卡在三列网格里会落单，第 10 张改为满行，顺便把「另一本书」与九章九题分开。
- **产出物（文件/链接）**：
  - `web/src/content/propositions/sunzi-jitu.md`、`web/src/components/JituCage.astro`
  - `web/src/pages/propositions/[slug].astro`、`web/src/pages/index.astro`、`plan/版权台账.csv`、`plan/RPD_需求文档.md`、`README.md`、`usage/Running.md`、`web/package.json`
- **验证**：
  - `npm run build`：台账 10 条通过；sympy 32 条断言全过（鸡兔同笼 4/4）；生成 12 个页面，`/propositions/sunzi-jitu/` 与 sitemap 均含新页；0 报错。
  - 首页产物含 10 个 `data-proposition-id`。
- **待办**：
  - 浏览器抽查滑块拖动与「12 只兔」命中态；手机宽度看 35 个头色块换行。
  - 换维基文库/影印本复核底本；外部审校。
  - 部署需用户确认（线上仍是 9 题）。
- **风险/注意事项**：
  - 未 `git commit`、未部署。
  - 台账「核验状态」仍为待二次核验；术文后半段未录。

## 2026-10-27 会话条目：sympy 审核闸 + /lab 组件库 MVP（v0.10.0）

- **目标**：按「数学乐中英文版对比分析」的结论，落地两件最能复用的事——**内容数字机器复算**与**交互原语组件库**，用最小验证做出可跑的 MVP。
- **已做**：
  - 新建 `plan/规划_审核闸与组件库MVP.md`（v0.1）：固化五条上游结论、A/B 两条线、5 条验收标准、明确不做项、L1–L4 路线。
  - 审核闸：`web/scripts/math_gate.py`（sympy 解析 + 解方程/求值 + 结构校验）、`web/scripts/run-math-gate.mjs`（自动选 `.venv` 解释器，fail-closed）；`package.json` 的 `build` 改为 台账 → 审核闸 → `astro build`，另加 `check:math`。
  - 内容模型：`content.config.ts` 增加 `checks` 数组（至少 1 条，`expect` 支持字符串/数字/列表）；10 个命题全部补齐（32 条断言）。
  - `/lab`：`web/src/components/lab/` 六个原语（CoordPlane / SliderControl / DragPoint / NumberLine / FractionBar / Protractor）+ `pages/lab/index.astro` + `styles/lab.css`；统一 `mc:*` 事件与 `mcGet*` / `mcSetValue` 接口。
  - 三个组合演示（盈不足、衰分、方田）只用原语 + 少量胶水代码拼装。
  - 文档回灌：README、RPD（v0.5 → v0.6，新增阶段 4）、Running（Python/venv、`check:math`、`/lab`、checks 写法）；`.gitignore` 补 `.venv/`；版本 0.9.0 → 0.10.0。
- **关键结论/决定**：
  - 审核闸只当质检员：验数字对错，不判断讲得好不好懂；`label` 必须能在正文找到对应结论。
  - 组件用纯 SVG/DOM + Pointer Events，不引新运行时依赖；键盘（方向键 / Shift / Home / End）与触屏同权。
  - 初始位置在服务端算好，避免 JS 未加载时控件错位。
  - 组合页只允许「原语 + 胶水」，新页面先问「能不能用 6 个原语拼」。
- **产出物（文件/链接）**：
  - `plan/规划_审核闸与组件库MVP.md`
  - `web/scripts/math_gate.py`、`web/scripts/run-math-gate.mjs`
  - `web/src/components/lab/*.astro`（6 个）、`web/src/pages/lab/index.astro`、`web/src/styles/lab.css`
  - `web/src/content.config.ts`、10 个命题 Markdown、`web/package.json`
- **验证**：
  - `npm run check:math`：10 个命题 · 32 条断言 · 全部通过。
  - 故意把盈不足「物价（原题）」`expect` 改 54 → 输出 `✗ 物价（原题） 期望 54，实算 53`、退出码 1；已改回。
  - `npm run build`：台账通过 + 审核闸通过 + 生成 12 页（含 `/lab/index.html`）。
  - 本地静态服务 `http://localhost:8941/lab/` 返回 200，已用 Chrome 打开。
  - 未做：真机拖动 / 375px 横向滚动的浏览器内实测。
- **待办**：
  - 浏览器实测：6 个组件的拖动与键盘、3 个组合演示数值、375px 无横向滚动。
  - L2：补原语到 20 个；把现有 10 页里可复用的 JSXGraph 交互逐步迁到原语。
  - 外部审校仍为「待定」，发布前必须补齐。
- **风险/注意事项**：
  - `checks` 可能与正文脱节（正文改数、断言没改）；靠 label 对应 + 审校兜底。
  - 另一会话在并发改同一仓库（README / Base.astro / package.json 版本），改文档前先重读。
  - 未 `git commit`、未部署；线上仍是 10 题版本，`/lab` 未发布。

## 2026-10-28 会话条目：三条内容线分栏目（v0.11.0）

- **目标**：用户确认「数学乐」按 A 处理——不照搬、不单独开站，而是在现有站内新增一条原创「趣味数学」线；先判断三条线是合并还是拆分，再把现有内容按书分栏目。
- **已做**：
  - `web/src/site.ts` 新增 `lines` 配置：`jiuzhang` / `sunzi`（live）与 `fun`（soon）；`name` 与命题 Markdown 的 `line` 字段对齐，新增内容线只改这一处。
  - 新增 `web/src/pages/[line]/index.astro`：只为 live 线生成 `/jiuzhang/`、`/sunzi/` 栏目页，列出本书题目、章节与摘要，带线间导航。
  - 首页命题区按书分组：九章 9 题、孙子 1 题，每组带题数与「进入本书」；孙子单题满行；第三条线只露一条「筹备中」虚线预告，不生成空页。
  - 顶栏「命题」在栏目页高亮；`sitemap.xml` 补两条栏目页。
  - 文档回灌：README、RPD（v0.6 → v0.7，新增阶段 5）；`web/package.json` 0.10.1 → 0.11.0。
- **关键结论/决定**：
  - 三条线是**一个站内的栏目**，不拆域名/不拆站：共用品牌、备案、服务器、组件、进度与登录；拆站会分 SEO 权重、运维 ×3。
  - 「数学乐」只作风格参考，不复刻内容、不拿它当栏目名；第三条线定名「趣味数学」，内容必须原创或有公版来源。
  - 筹备中的内容线不生成空页面，只做首页预告，避免空壳页损害 SEO 与可信度。
  - 命题页 URL 保持 `/propositions/<id>/` 不变，栏目页只做入口，旧链接不失效。
- **产出物（文件/链接）**：
  - `web/src/site.ts`、`web/src/pages/[line]/index.astro`、`web/src/pages/index.astro`、`web/src/layouts/Base.astro`、`web/src/pages/sitemap.xml.ts`
  - `README.md`、`plan/RPD_需求文档.md`、`web/package.json`
- **验证**：
  - `npm run build`：台账 10 条、sympy 32 条断言全过；生成 14 页，含 `/jiuzhang/`、`/sunzi/`；sitemap 13 条 URL。
  - 产物检查：首页 10 个 `data-proposition-id`、两条栏目入口、1 条「筹备中」预告；`/jiuzhang/` 9 个题目链接、`/sunzi/` 1 个；两页 canonical/title 正确。
  - 本机 `astro preview` 已在 `http://localhost:4321/` 用 Chrome 打开，待目视复核。
- **待办**：
  - 目视复核：首页分组后是否仍一屏放完、矮屏不溢出；栏目页卡片排布与移动端。
  - 「趣味数学」首批原创选题（选题、来源、审核方式）另立规划。
  - 部署需用户确认（线上仍是 10 题、无栏目页）。
- **风险/注意事项**：
  - `line` 字段是中文书名，与 `site.ts` 的 `name` 必须逐字一致，否则该题不会出现在任何分组。
  - 本机已有 preview 进程占用 4321，重复启动会提示换端口；直接复用旧进程即可读新 `dist`。
  - 未 `git commit`、未部署。

## 2026-10-28 会话条目：首页改为三栏目门户（v0.12.0）

- **目标**：按用户要求改回「一个主页 → 三个模块栏目」：首页只放入口，九章算术 / 孙子算经 / 趣味数学各自点进栏目页；趣味数学按「数学乐」的思路做原创图解 + 小交互。
- **已做**：
  - 重写 `web/src/pages/index.astro`：英雄区（站名、介绍、10 题 / 3 线 / 3 分钟、两个按钮、勾股循环作图）+ 三张栏目卡 + 本机进度 + 读法四步 + 关于/勘误；首页不再列具体题目。
  - `web/src/site.ts`：三条线加 `summary`；`fun` 增 `topics`（数与运算、图形与测量、比例与百分数、数据与概率、趣味谜题）；更新站点 description。
  - `web/src/pages/[line]/index.astro`：三条线都生成栏目页；无题目的 `fun` 显示「筹备中」面板 + 首批方向，不编造题目；题目卡固定 3 列（窄屏 2/1 列），单题栏目限宽 420px。
  - `web/src/layouts/Base.astro`：导航改为「内容 / 读法 / 关于」，内容在首页与栏目页高亮。
  - `sitemap.xml` 收三条栏目页；README、RPD（v0.8，阶段 5 改写）同步；版本 0.11.0 → 0.12.0。
- **关键结论/决定**：
  - 首页只做门户，题目卡下沉到栏目页；用户要的是「先选模块，再看题」，不是首页堆十张卡。
  - 趣味数学栏目页可以进，但没有题目时明确标「筹备中」，只列方向，不用占位题充数。
  - 继续一个站、一个域名、三条栏目线，不拆站。
- **产出物（文件/链接）**：
  - `web/src/pages/index.astro`、`web/src/pages/[line]/index.astro`、`web/src/site.ts`、`web/src/layouts/Base.astro`、`web/src/pages/sitemap.xml.ts`
  - `README.md`、`plan/RPD_需求文档.md`、`web/package.json`
- **验证**：
  - `npm run build`：台账 10 条、sympy 32 条断言全过；16 页（含 `/jiuzhang/`、`/sunzi/`、`/fun/`）；sitemap 14 条。
  - 产物检查：首页 3 张栏目卡、0 张题目卡（仅 1 个「先做一题」按钮直达首题）；`/jiuzhang/` 9 个题目链接、`/sunzi/` 1 个、`/fun/` 5 个首批方向；导航 3 项。
  - `astro preview` 重启后 `/`、`/fun/`、`/jiuzhang/` 均 200，Chrome 已打开 `http://localhost:4321/?v=portal2`。
- **待办**：
  - 目视复核：首页英雄区与三卡在桌面/手机的比例，栏目页 3 列与单题限宽。
  - 「趣味数学」首批选题与内容来源（原创 / 公版）另立规划。
  - 部署需用户确认；未 `git commit`。
- **风险/注意事项**：
  - 首页不再显示逐题「已做完」状态，只保留总进度；若要恢复逐题状态，应在栏目页加，不回首页堆卡。
  - 趣味数学栏目页含「筹备中」状态，避免被搜索引擎当成完整内容页；上线后可先 noindex 或补齐首批内容。
  - `site.ts` 的 `line.name` 与命题 `line` 仍须逐字一致。

## 2026-10-28 会话条目：首页读法排版修复 + 趣味数学接主题（v0.13.1）

- **目标**：修掉首页「读法」四步正文竖排崩坏；把「趣味数学」模块从空壳筹备页接到已有 `/topics/` 真实主题。
- **已做**：
  - `web/src/pages/index.astro`：读法区类名由 `mc-steps` 改为 `mc-howsteps`，重写为卡片式（编号圆章 + 标题 + 说明），不再命中 `global.css` 里命题页专用的 `.mc-steps li{grid-template-columns:2.2rem 1fr}`。
  - 首页栏目卡按内容类型计数：九章 / 孙子数命题，趣味数学数 `topics` 集合（显示「3 个主题」）。
  - `web/src/site.ts`：`fun` 由 `soon` 改 `live`，intro 写明已上线三个主题与原创口径。
  - `web/src/pages/[line]/index.astro`：`fun` 栏目页直接列 `/topics/` 的 3 个主题卡（分类·难度 / 标题 / 摘要），下方小字写还在筹备的方向；无内容时才回退「筹备中」面板；恢复单题限宽逻辑。
- **关键结论/决定**：
  - 全局 `.mc-steps` 保持不动（命题页与 `/lab` 依赖），首页用独立类名，符合「旧代码不改，新功能写新模块」。
  - 「趣味数学」不再另起一套内容，与 `/topics/` 共用同一批主题页，避免两份空壳。
- **产出物（文件/链接）**：
  - `web/src/pages/index.astro`、`web/src/pages/[line]/index.astro`、`web/src/site.ts`
  - `README.md`、`plan/RPD_需求文档.md`（v0.9）、`web/package.json`（0.13.0 → 0.13.1）
- **验证**：
  - `npm run build`：台账 10 条、sympy 32 条断言全过；20 页构建成功。
  - 产物检查：`dist/index.html` 含 4 个 `mc-howsteps__no` 与「3 个主题」；`dist/fun/index.html` 含 3 张主题卡。
  - `astro preview` 下 `/`、`/fun/` 均 200；Chrome 打开 `http://localhost:4321/?v=fix1`。
- **待办**：
  - 目视复核桌面 / 手机宽度下读法四卡与 `/fun/` 三卡。
  - 继续补主题线方向：数与运算、图形与测量、数据与概率、趣味谜题。
  - 部署与 `git commit` 仍需用户确认（线上仍是 10 题版本，无栏目页与「主题」入口）。
- **风险/注意事项**：
  - 首页与 `/topics/` 两处都列主题，新增主题时以 topics 集合为唯一数据源，无需改页面。
  - `/fun/` 与 `/topics/` 内容重复度高，后续如需精简要考虑用 301 收敛到一处。

## 2026-10-28 会话条目：首页英雄区作图空白修复 + 趣味数学对齐课程体系（v0.14.1）

- **目标**：修首页英雄区右侧勾股作图整块空白（只剩两条虚线辅助线）；让「趣味数学」栏目与已有 6 大类 / 104 主题的课程体系一致。
- **已做**：
  - `web/src/components/StageLoop.astro`：删掉已失效的 `document.addEventListener('mc:loop')` 滚动驱动（首页改门户后没人再广播），改为自动演示：7.6 秒画完 → 停 1.8 秒 → 重播；拖动时暂停、松手从当前位置续播；`prefers-reduced-motion` 只出终图；提示文案「滚动作图」→「自动作图」。
  - `web/src/pages/index.astro`：趣味数学卡计数改为课程体系主题总数（104），单位「个主题」。
  - `web/src/pages/[line]/index.astro`：`/fun/` 改为列 `curriculum` 的 6 个大类卡（章节数 · 主题数 → `/topics/<section>/`），底部注明已写完数量与 `/topics/` 搜索入口。
  - `web/src/site.ts`：`fun.intro` 改为「大类 → 章节 → 主题」的体系口径。
- **关键结论/决定**：
  - 英雄区作图不再依赖滚动：门户首页没有长滚动段落，滚动驱动会永远停在 0 → 全透明。
  - 趣味数学的唯一计数真源是 `src/data/curriculum.ts`；已写完数量才看 `topics` 集合。
- **产出物（文件/链接）**：
  - `web/src/components/StageLoop.astro`、`web/src/pages/index.astro`、`web/src/pages/[line]/index.astro`、`web/src/site.ts`
  - `README.md`、`plan/RPD_需求文档.md`、`web/package.json`（0.14.0 → 0.14.1）
- **验证**：
  - `npm run build`：127 页；`dist/index.html` 内联脚本含 `7600` 且已无 `mc:loop`；首页显示「104 个主题」，`/fun/` 显示「共 104 个主题 · 已写完 3 个」与 6 张分类卡。
  - Chrome 打开 `http://localhost:4321/?v=fix2` 与 `/fun/`。
- **待办**：
  - 目视复核：英雄区作图在桌面 / 手机宽度下的比例，`/fun/` 六卡换行。
  - 部署与 `git commit` 仍需用户确认。
- **风险/注意事项**：
  - 本仓库当时有另一个会话在并行改 `/topics` 体系（curriculum.ts、topics 页面、README v0.14.0），本次只动了首页 / 栏目页 / StageLoop，未碰 topics 体系文件。
  - 自动播放会持续占用 rAF；已用 `document.hidden` 在后台标签页暂停。

## 2026-10-28 会话条目：math.chesterlee.cn 上线（门户版 + 补两篇主题）

- **目标**：把门户版推到线上 `https://math.chesterlee.cn`，并带上并行会话新增的两篇主题正文。
- **已做**：
  - 按台账 §2.1 执行 `cd web && npm run build`（台账 10 条 + sympy 32 条断言通过，127 页）→ `rsync -az --delete -e "ssh -i ~/.ssh/chesterlee_web" dist/ ubuntu@43.136.92.125:/srv/chesterlee/math/`。
  - 第一次发布（13:41）为门户版；14:53 重新构建后再推一次，纳入 `equivalent-fractions`、`simplifying-fractions` 两篇主题与配套组件。
  - 回填台账：`部署上线备案/README.md` §二 `math` 行改「门户版：10 题 + 104 个主题目录」；§六 追加两条变更日志。
  - 项目 `README.md` 顶部状态改为门户版（已写完 5 个）。
- **关键结论/决定**：
  - 发布命令固定用台账 §2.1 的 rsync（`--delete` 与源保持一致），静态站无需 reload Caddy。
  - 内容有更新就重跑 build 再 sync，不做增量手传。
- **产出物（文件/链接）**：
  - 线上：`https://math.chesterlee.cn`（`/jiuzhang/`、`/sunzi/`、`/fun/`、`/topics/`）
  - 台账：`/Users/Admin/Knowledge/Coding/部署上线备案/README.md` §二 + §六
- **验证**：
  - 9 条关键 URL 全 200（含 `/topics/numbers/equivalent-fractions/`、`/topics/numbers/simplifying-fractions/`、`/sitemap.xml`）。
  - 线上 `/fun/` 显示「共 104 个主题 · 已写完 5 个」，首页显示「104 个主题」。
  - `health.sh math.chesterlee.cn` 全绿：HTTP 200 / 备案号 ✅ / 版权 ✅ / 证书 2027-01-25（剩 89 天）。
- **待办**：
  - `git commit` 与打 tag 尚未执行（需用户确认）。
  - 继续补主题正文（目录 104 个，已写完 5 个）。
- **风险/注意事项**：
  - 仓库仍有并行会话在改 `/topics` 体系；发布前要先 `find web/src -newer web/dist/index.html` 确认是否漏发。
  - `rsync --delete` 会删服务器多出来的文件，属预期行为，勿在服务器上手工放文件。

## 2026-10-28 会话条目：首页改通栏（v0.14.2）

- **目标**：首页在宽屏上左右留白太多（内容被 1120px 限宽），改成占满全屏。
- **已做**：
  - `web/src/pages/index.astro`：`<Base title={site.name} full>`，`mc-main` 不再限宽；首页页脚用 `:global(.mc-html--home) :global(.mc-footer){max-width:none}` 一起放开（其他页仍是 1120px）。
  - 英雄区高度 `min-height: min(70vh,660px)` → `clamp(560px, calc(100svh - 180px), 860px)`，首屏基本铺满。
  - `.mc-about__body p` 加 `max-width: 44rem`，超宽屏下行宽不过长。
- **关键结论/决定**：
  - 用 Base 既有的 `full` 开关（`/topics/` 也在用），不再给首页单独造一套布局容器。
  - 首屏高度用 `svh` 而非 `vh`，避免移动端地址栏收放导致跳动。
- **产出物（文件/链接）**：
  - `web/src/pages/index.astro`、`web/package.json`（0.14.1 → 0.14.2）、`README.md`
- **验证**：
  - `npm run build` 127 页通过；产物 `dist/index.html` 含 `mc-main mc-main--full`，栏目页则无；`dist/_astro/index.*.css` 里有 `.mc-html--home .mc-footer{max-width:none}`。
  - 已 `rsync` 部署，线上首页 HTML 确认 `mc-main--full`；`health.sh math.chesterlee.cn` 全绿（200 / 备案号 ✅ / 版权 ✅ / 证书剩 89 天）。
- **待办**：
  - 目视确认 27 寸 / 小屏两档：三张栏目卡不要拉得过宽，必要时给 `mc-modgrid` 加每列上限。
  - `git commit` 仍未执行（需用户确认）。
- **风险/注意事项**：
  - 首页页脚通栏是**只在首页**生效的覆盖；其他页面保持 1120px，避免影响命题页阅读。
  - 画布（英雄区）在超宽屏会变很宽，若嫌空可再限制舞台列宽。

## 2026-10-28 会话条目：英雄区作图放大 + 放慢（v0.14.3）

- **目标**：首页勾股作图在卡片里太小、切换太快（每段线「唰」地跳出来）。
- **已做**：
  - `StageLoop.astro`：`viewBox "20 70 480 500"` → `"40 88 440 456"`，去掉四周多余留白，图形按高度吃满舞台。
  - `index.astro`：`.mc-hero__stage` 高 `clamp(320px,42vh,440px)` → `clamp(380px,54vh,640px)`，内边距 16/18 → 12/14；移动端 300 → 340、240 → 300。
  - `StageLoop.astro` 脚本：一轮 `DURATION` 7600 → 13200 ms，停留 `HOLD` 1800 → 2800 ms；缓动 `easeOut`（开头最快）→ `easeInOut`（起笔收笔都减速）。
- **关键结论/决定**：
  - 「跳」的主因不是时长，而是 easeOut 让每段线一开始就冲到 80%，观感像瞬移；换 easeInOut 后同样时长也顺很多。
  - 放大用「收 viewBox」而不是放大 stroke/字体，避免线宽和字号失真。
- **产出物（文件/链接）**：
  - `web/src/components/StageLoop.astro`、`web/src/pages/index.astro`、`web/package.json`（0.14.3）、`README.md`
- **验证**：
  - `npm run build` 127 页通过；线上 HTML 已确认 `viewBox="40 88 440 456"` 与 `13200`。
  - 已 `rsync` 部署；`health.sh math.chesterlee.cn` 全绿（200 / 备案号 ✅ / 版权 ✅ / 证书剩 89 天）。
- **待办**：
  - 若还想更慢/更大，只调 `DURATION`、`HOLD` 与 `.mc-hero__stage` 高度两处即可。
  - `git commit` 仍未执行（需用户确认）。
- **风险/注意事项**：
  - viewBox 已收到边，再收会切掉「九 + 十六 = 二十五」这行小字；改图形坐标时记得同步 viewBox。
  - 拖动回看逻辑不受时长影响（按 `startProgress` 换算）。

## 2026-10-28 会话条目：收窄英雄区中缝（v0.14.4）

- **目标**：1920 宽屏下标题与作图之间的空隙约 360px，看着很散。
- **已做**：
  - `.mc-hero` 加 `max-width: 1560px; margin-inline: auto`；两栏 `minmax(0,0.88fr)/1.12fr` → `0.94fr/1.06fr`；`gap` 由 `clamp(32px,5vw,72px)` 收到 `clamp(24px,3vw,56px)`。
  - `h1` 字号 `clamp(58px,9vw,120px)` → `clamp(58px,8vw,150px)`，让标题占满左栏（原来左栏 830 只用了 700）。
  - 原 `border-bottom` 移到 `.mc-hero::after`（`left: calc(50% - 50vw); width: 100vw`），内容限宽后分隔线仍通栏。
- **关键结论/决定**：
  - 空隙不是栏间距造成的（只有 72px），而是左栏内容（标题 4 字）撑不满栏宽；所以「标题放大 + 限总宽」比单纯缩 gap 有效。
  - 通栏与可读性冲突时：**章节/分隔线通栏、具体内容限宽**，页面看着满、行宽又不失控。
- **产出物（文件/链接）**：
  - `web/src/pages/index.astro`、`web/package.json`（0.14.4）、`README.md`
- **验证**：
  - `npm run build` 127 页通过；已 `rsync` 部署；`health.sh math.chesterlee.cn` 全绿（200 / 备案号 ✅ / 版权 ✅ / 证书剩 89 天）。
  - 估算各档位：1920 → 中缝 ≈118px；1440 → ≈102px；1200 → ≈79px（原 1920 约 360px）。
- **待办**：
  - 若嫌 1560 两侧仍空，可改 1680（中缝会回升到 ~170px）。
  - `git commit` 仍未执行（需用户确认）。
- **风险/注意事项**：
  - `::after` 用 `100vw` 画通栏线，依赖 body 的 `overflow-x: hidden`；若以后去掉该属性会出现横向滚动条。
  - 标题上限 150px 时左栏需 ≥645px，窄于 900 会切到单栏布局，不会溢出。

## 2026-10-28 会话条目：压掉英雄区顶部空档（v0.14.5）

- **目标**：顶栏与首页首屏文字之间有大段空白（约 190px）。
- **已做**：
  - `.mc-home` 顶部内边距 `clamp(96px, 14vh, 150px)` → `clamp(92px, 10vh, 120px)`。
  - `.mc-hero` 的 `min-height: clamp(560px, 100svh-180px, 860px)` → `min-height: 0`，`padding-bottom` 96 → ≤72：英雄区改为随内容高度，不再把内容垂直居中顶到页面中部。
- **关键结论/决定**：
  - 空档是「撑满首屏」的设计副作用：`min-height` 很高 + `align-items: center`，内容只有 400 多px，于是上下一块均分空白。
  - 结论：首页不做「整屏英雄」，改为紧凑首屏，第二屏直接从栏目卡开始。
- **产出物（文件/链接）**：
  - `web/src/pages/index.astro`、`web/package.json`（0.14.5）、`README.md`
- **验证**：
  - `npm run build` 127 页通过；已 `rsync` 部署；`health.sh math.chesterlee.cn` 全绿（200 / 备案号 ✅ / 版权 ✅ / 证书剩 89 天）。
  - 顶部空档由 ~190px 降到 ~30px（顶栏 66px + 内边距 92px 起排）。
- **待办**：
  - 若希望首屏再往下带一点栏目卡，可把舞台高 `54vh` 调到 `48vh`。
  - `git commit` 仍未执行（需用户确认）。
- **风险/注意事项**：
  - 现在首页不再「一屏一张图」，滚动后会立刻看到栏目卡；如果之后想回到整屏版，恢复 `min-height` 即可。
  - 移动端（≤900px）原本就 `min-height: 0`，不受影响。

## 2026-10-28 会话条目：首页减字（v0.14.6）

- **目标**：首页描述性文字太多，要「简单简洁，只介绍核心内容」。
- **已做**：
  - 英雄区导语 41 字 → 12 字：「古算书原题，白话拆解，动手作图。」
  - 内容线区删掉说明段落（保留 eyebrow + 标题 + 三张卡）。
  - 读法区：删说明段落与四条解释，四步由卡片改为一行「编号 + 名称」标签，字号 22 → 19、圆章 34 → 28。
  - 关于：4 段 → 2 段（底本 / 隐私与勘误），实验台链接保留。
- **关键结论/决定**：
  - 首页只留「是什么 + 三条线 + 怎么用 + 出处」，具体解释交给栏目页与命题页。
  - 信息密度不够时靠留白和字号层级，不靠补文案。
- **产出物（文件/链接）**：
  - `web/src/pages/index.astro`、`web/package.json`（0.14.6）、`README.md`
- **验证**：
  - `npm run build` 127 页通过；已 `rsync` 部署；`health.sh math.chesterlee.cn` 全绿（200 / 备案号 ✅ / 版权 ✅ / 证书剩 89 天）。
- **待办**：
  - 卡片里的 summary 仍是一句话，若还嫌多可只留书名 + 数量。
  - `git commit` 仍未执行（需用户确认）。
- **风险/注意事项**：
  - `#reading` 锚点仍在（导航「读法」可用）；删掉的是说明文字不是锚点。
  - `.mc-howsteps` 规则已改为 flex，若以后加回描述需恢复 grid。

## 2026-10-28 会话条目：合并「主题」入口（v0.14.7）

- **目标**：顶栏「主题」与「趣味数学」是同一套 104 个主题的两个入口、两个名字、两种版式，用户觉得割裂；合并成一个入口。
- **已做**：
  - 抽出 `web/src/components/TopicsHub.astro`：把原 `/topics/` 页的搜索 + 6 大类卡 + 章节列表 + 进度 + sympy 说明整体搬进去，用 `.mc-topics--embed` 抹掉页面级留白。
  - `web/src/pages/[line]/index.astro`：`sections.length > 0` 分支直接渲染 `<TopicsHub />`（`/fun/` 即总览）。
  - `web/src/layouts/Base.astro`：删除「主题」导航项，`isModule` 把 `/topics` 并入「内容」高亮。
  - `web/astro.config.mjs`：`redirects: { '/topics': '/fun/' }`。
  - 删除 `web/src/pages/topics/index.astro`；`[section].astro` 与 `[section]/[slug].astro` 的面包屑、文末链接改指 `/fun/`。
- **关键结论/决定**：
  - 一条内容只留一扇门：总览是 `/fun/`，具体主题页仍是 `/topics/<大类>/<主题>/`，路径不变、外链不断。
  - 旧地址靠 `astro.config` 的 `redirects` 生成 meta refresh 跳转页（带 `noindex` 与 canonical），不另写页面。
- **产出物（文件/链接）**：
  - `web/src/components/TopicsHub.astro`（新）、`web/src/pages/[line]/index.astro`、`web/src/layouts/Base.astro`、`web/astro.config.mjs`、`web/src/pages/topics/[section].astro`、`web/src/pages/topics/[section]/[slug].astro`、`web/package.json`（0.14.7）、`README.md`
- **验证**：
  - `npm run build` 126 页通过（原 127，少的是被删的 `/topics/index` 实体页）；`dist/fun/index.html` 有 6 个 `mc-section-card` 与 1 份 `topic-index` JSON，`dist/jiuzhang/index.html` 仍是 9 张古题卡，`dist/topics/index.html` 是 `Redirecting to: /fun/`。
  - 已 `rsync` 部署；线上 `/fun/`、`/topics/`、`/topics/numbers/`、`/topics/numbers/fractions/` 全 200；`health.sh math.chesterlee.cn` 全绿。
- **待办**：
  - `/fun/` 页头文案仍是「一页讲清一个概念」，可按「趣味数学」口径再核一遍。
  - 1920 宽屏下三张栏目卡宽度待目视确认。
  - `git commit` 仍未执行（需用户确认）。
- **风险/注意事项**：
  - `topics` 的 104 个主题页一直不在 sitemap 里（既有行为），本次未动。
  - 若以后想恢复独立总览页，把 `TopicsHub` 重新包一层页面、删掉 redirects 即可，组件本身无需改。











