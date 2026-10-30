---
id: triangle-area
title: 三角形面积
section: geometry
chapter: perimeter-area
category: 几何
level: 小学
summary: 面积 = 底 × 高 ÷ 2；两个完全一样的三角形正好拼成一个长方形，所以是一半。
interaction: triangle-area
interaction_note: 拖动直角顶点改变两条直角边，下面实时显示「底 × 高 ÷ 2」的结果。
examples:
  - question: 底 6、高 4 的三角形，面积是多少？
    answer: 12
    note: 6 × 4 ÷ 2 = 12（平方单位）。
  - question: 底 10、高 7 的三角形，面积是多少？
    answer: 35
    note: 10 × 7 = 70，再除以 2 得 35。
  - question: 面积 24、底 8，高是多少？
    answer: 6
    note: 反过来算：高 = 面积 × 2 ÷ 底 = 48 ÷ 8 = 6。
  - question: 两条直角边 3 和 4 的直角三角形，面积是多少？
    answer: 6
    note: 两条直角边互为底和高：3 × 4 ÷ 2 = 6。
exercises:
  - kind: concept
    question: 三角形面积为什么要除以 2？
    options:
      - 两个完全一样的三角形能拼成一个平行四边形（长方形）
      - 因为三角形的边比长方形少
      - 因为三角形有三个角
    answer: 0
    hint: 拿两个一样的三角形，转一下拼起来看看。
    note: 拼出来的是底 × 高的长方形，所以一个三角形只占一半。
  - kind: calc
    question: 底 9、高 6 的三角形，面积是多少？
    options:
      - 27
      - 54
      - 15
      - 13.5
    answer: 0
    hint: 先 9 × 6 = 54，再除以 2。
    note: 54 是拼成的长方形面积；三角形是它的一半。
  - kind: transfer
    question: 一个三角形面积 20、高 5，底是多少？
    options:
      - 8
      - 4
      - 100
      - 10
    answer: 0
    hint: 底 = 面积 × 2 ÷ 高。
    note: 20 × 2 = 40，40 ÷ 5 = 8。别忘了先乘 2 再除。
checks:
  - label: 底 6 高 4 的面积
    value: "6*4/2"
    expect: "12"
  - label: 底 10 高 7 的面积
    value: "10*7/2"
    expect: "35"
  - label: 面积 24 底 8 求高
    value: "24*2/8"
    expect: "6"
  - label: 直角边 3 和 4 的面积
    value: "3*4/2"
    expect: "6"
  - label: 底 9 高 6 的面积
    value: "9*6/2"
    expect: "27"
updated: "2026-10-28"
order: 32
---

## 它在说什么

三角形的面积 = **底 × 高 ÷ 2**。

底是任意一条边，高是**从这条边到对角顶点的垂直距离**——不是斜边，也不是另一条边。

## 为什么除以 2

拿两个完全一样的三角形，转 180° 拼起来，正好得到一个平行四边形。

这个平行四边形的底和高跟三角形一样，面积是「底 × 高」。原来那个三角形只占一半，所以除以 2。

## 高在哪里

- 直角三角形：两条直角边互相垂直，可以直接当底和高用；
- 普通三角形：高可能落在底边上，也可能落在底边的延长线上；
- 等边三角形：三条边都能当底，对应的高长度相同。

## 和长方形对比

同样是底 6、高 4：

| 图形 | 面积 |
|---|---|
| 长方形 | 24 |
| 三角形 | 12 |

只要底和高一样，三角形的面积永远是同底同高长方形的一半。
