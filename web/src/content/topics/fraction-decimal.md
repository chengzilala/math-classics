---
id: fraction-decimal
title: 分数与小数互化
section: numbers
chapter: fractions
category: 数
level: 小学
summary: 分数化小数就是分子除以分母；小数化分数，先写成十进分数，再约分。
interaction: fractions-decimal
interaction_note: 拖动色块改分子，下面同时给出分数、小数和百分数三种写法。
examples:
  - question: 3/8 化成小数是多少？
    answer: 0.375
    note: 3 ÷ 8 = 0.375，除尽为止。
  - question: 0.6 化成分数是多少？
    answer: 3/5
    note: 0.6 = 6/10，分子分母同时除以 2 得 3/5。
  - question: 7/8 化成小数是多少？
    answer: 0.875
    note: 7 ÷ 8 = 0.875。
  - question: 1/3 化成小数能除尽吗？
    answer: 不能，是 0.333…（循环）
    note: 1 ÷ 3 永远余 1，商一直重复 3，写作 0.3̇。
exercises:
  - kind: concept
    question: 分数 a/b 化成小数，应该怎么算？
    options:
      - a 除以 b
      - b 除以 a
      - a 乘 b
    answer: 0
    hint: 分数线本身就是「除以」的意思。
    note: 3/4 = 3 ÷ 4 = 0.75。反过来 0.75 × 4 = 3，可以验算。
  - kind: calc
    question: 5/8 化成小数是多少？
    options:
      - 0.625
      - 0.58
      - 1.6
      - 0.8
    answer: 0
    hint: 5 ÷ 8，除到小数点后三位。
    note: 0.625。常见搭档：1/8 = 0.125，3/8 = 0.375，7/8 = 0.875。
  - kind: transfer
    question: 0.25 化成最简分数是多少？
    options:
      - 1/4
      - 25/100
      - 2/5
      - 1/2
    answer: 0
    hint: 先写 25/100，再同时除以 25。
    note: 25/100 也对，但没约到最简；答案默认写最简分数。
checks:
  - label: 3/8 化成小数
    value: "3/8"
    expect: "0.375"
  - label: 7/8 化成小数
    value: "7/8"
    expect: "0.875"
  - label: 0.6 化成 3/5
    value: "6/10 - 3/5"
    expect: "0"
  - label: 0.25 化成 1/4
    value: "25/100 - 1/4"
    expect: "0"
  - label: 1/3 的三倍
    value: "3*(1/3)"
    expect: "1"
updated: "2026-10-28"
order: 13
---

## 它在说什么

分数和小数是同一个数的两种记法：

| 分数 | 小数 |
|---|---|
| 1/2 | 0.5 |
| 1/4 | 0.25 |
| 3/8 | 0.375 |
| 7/8 | 0.875 |

**分数线就是除号**，所以分数化小数，直接做除法。

## 分数 → 小数

分子除以分母，除尽就停：

3/8 = 3 ÷ 8 = 0.375

除不尽就写循环小数：1/3 = 0.333…，通常记作 0.3̇，或按要求保留几位小数。

## 小数 → 分数

看小数点后有几位，就把 1 后面写几个 0 当分母，再去掉小数点当分子，最后约分：

0.6 = 6/10 = 3/5
0.25 = 25/100 = 1/4
0.125 = 125/1000 = 1/8

## 什么时候用哪种

- **算精确值、比大小**：分数更准，1/3 不会因为四舍五入丢精度；
- **量长度、看价格、填表格**：小数更直观；
- **比较不同分母的分数**：先化成小数最省事。
