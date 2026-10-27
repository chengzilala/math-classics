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


