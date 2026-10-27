# math-classics — 公版数学经典趣味交互站

把**已进入公有领域**的中国古代数学经典（《九章算术》《孙子算经》《几何原本》徐光启译本等），做成
「**原文 → 白话拆解 → 可交互作图 → 小练习**」的中文学习站。

- 参考的是「数学乐」那种**看得见、摸得着**的讲法，但**不翻译、不搬运**它的任何内容。
- 内容全部基于公有领域底本自行改写、自绘 SVG，可安全发布。
- 纯静态站，零后端、零账号、零 Cookie 追踪。

> 当前状态：**本地已完成，尚未部署（2026-10-27）** —— 九个命题全部跑通：盈不足、方田、粟米、勾股、衰分、少广、商功、均输、方程，各含原文、白话 3 步、交互、3 题练习、出处；首页有本机进度与卡片状态；SEO（canonical / OG / sitemap / robots）已接；页脚已按 §2.3 挂 ICP 备案号与 Chester 链接。
> 未完成：域名 `math.chesterlee.cn` 尚未解析上线、外部审校（见 RPD 阶段 2–3）。线上仍是四题版本，待确认后再部署。
> **部署口径**：腾讯云轻量 `43.136.92.125` + Caddy，站点目录 `/srv/chesterlee/math`，域名 `math.chesterlee.cn`；域名 / 备案 / 页脚 / 体检一律以 [部署上线备案/README.md](../部署上线备案/README.md) 为唯一真源。

## 目录结构

```
math-classics/
├── README.md                  ← 你在这里
├── math-classics.code-workspace ← 独立工作区文件（推荐用它打开）
├── .trae/                     ← 规则与技能（不入库）
├── plan/
│   ├── RPD_需求文档.md
│   └── 版权台账.csv            ← 每个命题的底本登记，构建前强制校验
├── usage/Running.md           ← 零基础运行说明
├── dev/session_log.md         ← 进展记录
├── web/                       ← Astro 站点
│   ├── src/
│   │   ├── content/propositions/  ← 一个命题一份 Markdown
│   │   ├── components/            ← 交互、练习组件
│   │   ├── layouts/ pages/ styles/
│   │   ├── content.config.ts      ← 内容模型（缺 source 直接构建失败）
│   │   └── site.ts                ← 站名、勘误入口等站点级配置
│   ├── scripts/check-ledger.mjs   ← 版权台账校验（build 前自动跑）
│   ├── public/
│   └── dist/                      ← 构建产物（不入库）
├── test/  screenshots/  inbox/
└── .gitignore
```

## 怎么打开

用 Trae 打开 **`math-classics.code-workspace`**（不是直接打开 `Coding` 根目录）。
只有把本项目当作工作区根，`.trae/` 里的规则和技能才会生效（Trae 不继承父目录规则）。

## 怎么跑

```bash
cd /Users/Admin/Knowledge/Coding/math-classics/web
npm install        # 第一次
npm run dev        # 开发模式，改文件自动刷新
# 浏览器打开 http://localhost:4321
```

看构建后的成品：

```bash
npm run build      # 先校验版权台账，再生成 web/dist/
npm run preview    # 预览构建结果
```

## MVP 做什么（一句话）

**九章算术趣味线，九卷各取一题，共 9 个命题**：方田（面积）、粟米（比例）、衰分（配分）、少广（开方）、商功（体积）、均输（追及）、盈不足（双假设）、方程（线性方程组）、勾股。
每个命题一页，3 分钟能做完，手机也能用。

## 下一步

1. 找懂数学的人把九个命题过一遍，改 `proofreader` 与台账核验状态。
2. 补齐少广、方程两题的术文原文并二次核验。
3. 阶段 3：接无 Cookie 统计、找 20 人试用。

## 相关文档

- 方向依据：[可行性分析_公版数学经典交互站.md](../Idea/可行性分析_公版数学经典交互站.md)
- 需求文档：[plan/RPD_需求文档.md](./plan/RPD_需求文档.md)
- 运行说明：[usage/Running.md](./usage/Running.md)
- 进展记录：[dev/session_log.md](./dev/session_log.md)
- 版权台账：[plan/版权台账.csv](./plan/版权台账.csv)

## 红线（摘自项目规则）

- 只用公有领域底本；禁止现代点校本、现代译本、现代出版物插图、他人网站的代码与美术。
- 每个命题必须登记来源，页面必须有「出处」与「勘误入口」；未登记台账不能构建。
- 不复制、翻译、镜像 mathsisfun.com / shuxuele.com。
- 未经确认不 `git commit`、不部署、不注册账户。
