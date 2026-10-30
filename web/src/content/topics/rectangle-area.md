---
id: rectangle-area
title: 长方形面积
section: geometry
chapter: perimeter-area
category: 几何
level: 小学
summary: 面积 = 长 × 宽；把长方形铺进方格纸，数格子就是做乘法。
interaction: rect-area
interaction_note: 拖动右上角顶点改变长和宽，下面实时显示面积与周长。
examples:
  - question: 长 15、宽 16 的长方形，面积是多少？
    answer: 240
    note: 15 × 16 = 240（平方单位）。
  - question: 同一个长方形的周长是多少？
    answer: 62
    note: 周长 = 2 × (15 + 16) = 62，单位是长度单位不是平方单位。
  - question: 面积 240、长 20，宽是多少？
    answer: 12
    note: 240 ÷ 20 = 12，面积除以长得到宽。
  - question: 一块地长 8 米、宽 5 米，面积多少平方米？
    answer: 40
    note: 8 × 5 = 40 平方米；一平方米就是边长 1 米的正方形。
exercises:
  - kind: concept
    question: 面积的单位应该是什么？
    options:
      - 平方单位，如平方米、平方厘米
      - 长度单位，如米、厘米
      - 立方单位，如立方米
    answer: 0
    hint: 面积是「铺满需要多少个小正方形」。
    note: 周长用长度单位，面积用平方单位，写错单位是常见扣分点。
  - kind: calc
    question: 长 7 厘米、宽 4 厘米，面积是多少？
    options:
      - 28 平方厘米
      - 22 平方厘米
      - 11 平方厘米
      - 28 厘米
    answer: 0
    hint: 7 × 4 = 28，单位要写成平方厘米。
    note: 22 是周长；面积与周长的算法不同，别混。
  - kind: transfer
    question: 一个长方形面积 36，宽 4，长是多少？
    options:
      - 9
      - 32
      - 144
      - 18
    answer: 0
    hint: 面积 ÷ 宽 = 长。
    note: 36 ÷ 4 = 9。面积、长、宽三个量，知道两个就能求第三个。
checks:
  - label: 15 × 16 的面积
    value: "15*16"
    expect: "240"
  - label: 长 15 宽 16 的周长
    value: "2*(15+16)"
    expect: "62"
  - label: 面积 240 长 20 求宽
    value: "240/20"
    expect: "12"
  - label: 长 7 宽 4 的面积
    value: "7*4"
    expect: "28"
  - label: 面积 36 宽 4 求长
    value: "36/4"
    expect: "9"
updated: "2026-10-28"
order: 31
---

## 它在说什么

长方形的面积 = **长 × 宽**。

这里的「面积」不是边长，而是**里面能铺下多少个边长 1 的小正方形**。

## 为什么是乘法

一条长 4、宽 3 的长方形，可以铺成 4 列、3 行的小正方形：一共 4 × 3 = 12 个。

乘法就是「每行几个 × 有几行」，所以面积天然是平方单位。

## 和周长别混

| | 算法 | 单位 | 直觉 |
|---|---|---|---|
| 周长 | 2 × (长 + 宽) | 米、厘米 | 绕一圈走多远 |
| 面积 | 长 × 宽 | 平方米、平方厘米 | 里面铺满要多少 |

长 4、宽 3：周长 14，面积 12。数值接近，含义完全不同。

## 反过来求

- 已知面积和长：**宽 = 面积 ÷ 长**
- 已知面积和宽：**长 = 面积 ÷ 宽**

这就是后面学「解方程」时最常用的一类关系。
