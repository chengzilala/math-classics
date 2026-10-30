---
id: jiuzhang-gougu
title: 勾股
line: 九章算术
chapter: 卷九 · 勾股 · 第一问
summary: 勾三尺、股四尺，弦正好五尺。两千年前的中国算书，已经把直角三角形三边的关系算得清清楚楚。
significance: 把两条直角边各自平方、相加，再开方，就得到斜边——长度问题被化成面积与开方。3、4、5 是最著名的整数勾股数组，后世的测高、测远都从这里出发。
related:
  - label: 方田 · 同用面积
    id: jiuzhang-fangtian
source: 维基文库《九章算术》卷九（公有领域影印/点校底本）
source_license: 公有领域
original: |
  今有句三尺，股四尺，问为弦几何？
  答曰：五尺。
original_note: 此处只录题干与答语。「句」即「勾」，是短的直角边；「股」是长的直角边；「弦」是斜边。
steps:
  - text: 一个直角三角形，两条直角边一条 3 尺、一条 4 尺，问斜边多长。
    analogy: 就像靠在墙上的梯子：离墙 3 尺、高 4 尺，梯子本身要多长。
  - text: 古人把短的直角边叫「勾」、长的叫「股」、斜边叫「弦」。勾三股四，弦就是五。
    analogy: 三个名字对应三条边，和今天说的「两条直角边 + 斜边」是一回事。
  - text: 验算：3² + 4² = 9 + 16 = 25，25 开方得 5，所以弦五尺。
    analogy: 把两条直角边各自乘自己再加起来，正好等于斜边乘自己——这就是勾股定理。
interaction: gougu-triangle
interaction_note: 拖动两个滑块改变勾和股，图上会实时画出直角三角形并算出弦；拖到 3 和 4，看看弦是不是正好 5。
exercises:
  - kind: concept
    question: 「勾、股、弦」分别指三角形里的哪条边？
    options:
      - 三条边随便叫，没有固定含义
      - 短直角边、长直角边、斜边
      - 长直角边、短直角边、斜边
      - 斜边、短直角边、长直角边
    answer: 1
    hint: 勾短股长，弦是斜着的那条。
    note: 古人以「勾」称短直角边、「股」称长直角边、「弦」称斜边，勾三股四弦五就是这么来的。
  - kind: calc
    question: 勾 3 尺、股 4 尺，弦长多少？
    options:
      - 4 尺
      - 5 尺
      - 6 尺
      - 7 尺
    answer: 1
    hint: 3² + 4² = 9 + 16，再开方。
    note: 9 + 16 = 25，√25 = 5，《九章》答曰「五尺」。
  - kind: transfer
    question: 勾 6 尺、股 8 尺，弦长多少？
    options:
      - 9 尺
      - 10 尺
      - 12 尺
      - 14 尺
    answer: 1
    hint: 6 和 8 都是 3 和 4 的两倍，弦也是 5 的两倍。
    note: 6² + 8² = 36 + 64 = 100，√100 = 10 尺。边长同比例放大，形状不变。
checks:
  - label: 勾三股四的弦
    value: "sqrt(3**2 + 4**2)"
    expect: "5"
  - label: 勾六股八的弦
    value: "sqrt(6**2 + 8**2)"
    expect: "10"
proofreader: 待定（发布前须外部审校）
updated: "2026-10-26"
order: 4
---
