---
id: jiuzhang-fangtian
title: 方田
line: 九章算术
chapter: 卷一 · 方田 · 第一问
summary: 一块田广十五步、从十六步，古人一乘就知道是一亩。方田这一卷讲的，就是最朴素的面积算法。
significance: 「广从相乘」把丈量土地变成了一个乘法，并规定 240 平方步为 1 亩。面积从此成为田亩与赋税计算的基础，也是后面各卷几何问题的起点。
related:
  - label: 勾股 · 同用面积
    id: jiuzhang-gougu
source: 维基文库《九章算术》卷一（公有领域影印/点校底本）
source_license: 公有领域
original: |
  今有田广十五步，从十六步。问为田几何？
  答曰：一亩。
original_note: 此处只录题干与答语。「广」是横着量出来的宽度，「从（纵）」是竖着量出来的长度；当时 240 平方步为 1 亩。
steps:
  - text: 这块田是长方形：横着 15 步，竖着 16 步。古人把横叫「广」，竖叫「从」。
    analogy: 就像量一张桌子：先量宽，再量长，两个数一乘就是桌面大小。
  - text: 长方形面积 = 广 × 从，所以 15 × 16 = 240（平方步）。
    analogy: 把田划成 15 列、16 行的小方格，一格一步见方，数一数正好 240 格。
  - text: 当时 240 平方步正好算 1 亩，所以答曰「一亩」。
    analogy: 就像今天的 100 平方米算一套小房子，「240 平方步」是古人给亩定的标准。
interaction: fangtian-area
interaction_note: 横轴是广，纵轴是从。拖动两个滑块改变边长，看面积怎么变，什么时候正好凑满 240 平方步——那就是 1 亩。
exercises:
  - kind: concept
    question: 「广十五步，从十六步」里的「从」指什么？
    options:
      - 横着量出来的宽度
      - 竖着量出来的长度
      - 这块田的周长
      - 这块田的对角线
    answer: 1
    hint: 「广」是横着量，「从」是竖着量，两个字一个横一个竖。
    note: 古书里「从」通「纵」，指竖着量的那一条边。
  - kind: calc
    question: 广 15 步、从 16 步，面积是多少平方步？
    options:
      - 31 平方步
      - 180 平方步
      - 240 平方步
      - 300 平方步
    answer: 2
    hint: 长方形面积是两条边相乘，不是相加。
    note: 15 × 16 = 240 平方步，正好 1 亩，所以《九章》答曰「一亩」。
  - kind: transfer
    question: 一块田广 12 步、从 20 步，合多少亩？
    options:
      - 半亩
      - 1 亩
      - 2 亩
      - 240 亩
    answer: 1
    hint: 先算 12 × 20 = 240 平方步，再拿 240 平方步去换亩。
    note: 12 × 20 = 240 平方步，240 ÷ 240 = 1 亩。边长换了，只要乘积不变，亩数就不变。
checks:
  - label: 原题田面积
    value: "15*16"
    expect: "240"
  - label: 240 平方步折合亩数
    value: "240/240"
    expect: "1"
  - label: 变式田面积
    value: "12*20"
    expect: "240"
proofreader: 待定（发布前须外部审校）
updated: "2026-10-26"
order: 2
---
