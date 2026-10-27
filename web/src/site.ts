// 站点级文案与开关，集中一处，改站名只需要改这里。
export const site = {
  name: '算经',
  // 站点正式地址：canonical / og:url / sitemap / robots 都读这一处。
  url: 'https://math.chesterlee.cn',
  // 境内站点页脚必备：ICP 备案号（须带工信部链接），文案见 部署上线备案/README.md §2.3
  icp: {
    number: '陇ICP备2026009894号-2',
    href: 'https://beian.miit.gov.cn/',
  },
  tagline: '用公版古算书，讲看得懂的数学',
  description:
    '《九章算术》《孙子算经》等公版数学经典的原文、白话拆解、可拖动作图与小练习。零广告、零账号。',
  // 勘误入口：仓库未公开前先指向首页「关于」段的说明块；公开后换成 Issue 链接。
  errataHref: '/#errata',
  errataLabel: '勘误',
};
