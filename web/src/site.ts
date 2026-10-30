// 站点级文案与开关，集中一处，改站名只需要改这里。
export const site = {
  name: '算经小课',
  // 顶栏站名后的拉丁小字
  latin: 'SUANJING KE',
  // 站点正式地址：canonical / og:url / sitemap / robots 都读这一处。
  url: 'https://math.chesterlee.cn',
  // 境内站点页脚必备：ICP 备案号（须带工信部链接），文案见 部署上线备案/README.md §2.3
  icp: {
    number: '陇ICP备2026009894号-2',
    href: 'https://beian.miit.gov.cn/',
  },
  tagline: '用公版古算书，讲看得懂的数学',
  description:
    '用公有领域古算书讲看得懂的数学：九章算术、孙子算经、趣味数学三条内容线。原文对照、白话拆解、可拖动作图、3 分钟一题，零广告、不登录也能用。',
  // 统一账户中心：可选登录，不登录也能正常做题
  // productId 需与账户中心 ac_products 登记一致；换域名时改这一处
  account: {
    apiBase: 'https://account.chesterlee.cn',
    loginUrl: 'https://account.chesterlee.cn/login.html',
    accountUrl: 'https://account.chesterlee.cn/account.html',
    productId: 'math-classics',
  },
  // 勘误入口：仓库未公开前先指向首页「关于」段的说明块；公开后换成 Issue 链接。
  errataHref: '/#errata',
  errataLabel: '勘误',
};

// 内容线：同一个站里的三个栏目，每条线都有自己的栏目页，不单独开站。
// live = 已有题目；soon = 栏目页可进，但内容筹备中（不编造题目）。
// name 必须与命题 Markdown 里的 line 字段一致，栏目页按它筛选。
export const lines = [
  {
    slug: 'jiuzhang',
    name: '九章算术',
    latin: 'NINE CHAPTERS',
    summary: '九卷各取一题，从方田量到勾股，先看古人怎么算。',
    intro: '九卷各取一题：方田、粟米、衰分、少广、商功、均输、盈不足、方程、勾股。',
    status: 'live',
  },
  {
    slug: 'sunzi',
    name: '孙子算经',
    latin: 'SUNZI SUANJING',
    summary: '一道鸡兔同笼，看懂「半足术」为什么比列方程还快。',
    intro: '从「雉兔同笼」开始，看古人怎么用半足术解今天的鸡兔同笼。',
    status: 'live',
  },
  {
    slug: 'fun',
    name: '趣味数学',
    latin: 'FUN MATH',
    summary: '一张图讲一个概念，再配一个能拖的小实验和三道练习。',
    intro:
      '按「大类 → 章节 → 主题」排好整套目录：每个主题一页，先动手拖一拖，再看讲解、例子和练习。正文陆续补完，全部原创。',
    topics: ['数与运算', '图形与测量', '比例与百分数', '数据与概率', '趣味谜题'],
    status: 'live',
  },
] as const;

export type Line = (typeof lines)[number];
