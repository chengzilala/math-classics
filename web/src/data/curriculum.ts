/**
 * 全站课程体系（唯一真源）。
 * 结构参照已跑通的「数学乐式」信息架构：大类 → 章节 → 主题。
 * 这里只放导航与编排；每个主题的正文在 src/content/topics/<slug>.md，
 * 没有 Markdown 的主题照样有路由，页面会显示「编写中」并给出同章导航。
 */

export interface TopicRef {
  slug: string;
  title: string;
}

export interface Chapter {
  slug: string;
  title: string;
  topics: TopicRef[];
}

export interface Section {
  slug: string;
  title: string;
  tagline: string;
  chapters: Chapter[];
}

export const curriculum: Section[] = [
  {
    slug: 'numbers',
    title: '数与运算',
    tagline: '从数数到分数、小数、百分比：先把「数」这件事说清楚。',
    chapters: [
      {
        slug: 'counting',
        title: '数的认识',
        topics: [
          { slug: 'natural-numbers', title: '自然数与计数' },
          { slug: 'integers', title: '整数与数轴' },
          { slug: 'rational-numbers', title: '有理数' },
          { slug: 'prime-composite', title: '质数与合数' },
          { slug: 'factors-multiples', title: '因数与倍数' },
          { slug: 'odd-even', title: '奇数与偶数' },
        ],
      },
      {
        slug: 'fractions',
        title: '分数',
        topics: [
          { slug: 'fractions', title: '分数' },
          { slug: 'equivalent-fractions', title: '等值分数' },
          { slug: 'simplifying-fractions', title: '约分与最简分数' },
          { slug: 'adding-fractions', title: '分数加减' },
          { slug: 'multiplying-fractions', title: '分数乘除' },
          { slug: 'mixed-numbers', title: '带分数' },
          { slug: 'fraction-decimal', title: '分数与小数互化' },
        ],
      },
      {
        slug: 'decimals',
        title: '小数',
        topics: [
          { slug: 'decimals', title: '小数入门' },
          { slug: 'decimal-operations', title: '小数的四则运算' },
          { slug: 'rounding', title: '四舍五入与有效数字' },
          { slug: 'repeating-decimals', title: '循环小数' },
        ],
      },
      {
        slug: 'percent',
        title: '百分比',
        topics: [
          { slug: 'percent', title: '百分比' },
          { slug: 'percent-change', title: '涨跌与折扣' },
          { slug: 'percent-problems', title: '百分比应用题' },
        ],
      },
      {
        slug: 'ratio',
        title: '比与比例',
        topics: [
          { slug: 'ratio', title: '比' },
          { slug: 'proportion', title: '比例' },
          { slug: 'scale', title: '比例尺' },
          { slug: 'direct-inverse', title: '正比与反比' },
        ],
      },
      {
        slug: 'powers',
        title: '乘方与开方',
        topics: [
          { slug: 'exponents', title: '指数与乘方' },
          { slug: 'square-root', title: '平方根' },
          { slug: 'cube-root', title: '立方根' },
          { slug: 'scientific-notation', title: '科学记数法' },
        ],
      },
    ],
  },
  {
    slug: 'algebra',
    title: '代数',
    tagline: '用字母代替数，把「关系」写成式子，再解出来。',
    chapters: [
      {
        slug: 'algebra-basics',
        title: '代数入门',
        topics: [
          { slug: 'algebraic-expressions', title: '用字母表示数' },
          { slug: 'substitution', title: '代入求值' },
          { slug: 'like-terms', title: '合并同类项' },
        ],
      },
      {
        slug: 'equations',
        title: '方程',
        topics: [
          { slug: 'linear-equations', title: '一元一次方程' },
          { slug: 'equation-word-problems', title: '方程应用题' },
          { slug: 'systems-of-equations', title: '二元一次方程组' },
          { slug: 'quadratic-equations', title: '一元二次方程' },
        ],
      },
      {
        slug: 'functions',
        title: '函数',
        topics: [
          { slug: 'functions', title: '函数是什么' },
          { slug: 'linear-functions', title: '一次函数' },
          { slug: 'slope', title: '斜率' },
          { slug: 'quadratic-functions', title: '二次函数' },
          { slug: 'inverse-proportion', title: '反比例函数' },
        ],
      },
      {
        slug: 'inequalities',
        title: '不等式',
        topics: [
          { slug: 'inequalities', title: '一元一次不等式' },
          { slug: 'inequality-systems', title: '不等式组' },
        ],
      },
      {
        slug: 'polynomials',
        title: '整式与因式分解',
        topics: [
          { slug: 'expanding', title: '整式乘法与展开' },
          { slug: 'special-products', title: '乘法公式' },
          { slug: 'factoring', title: '因式分解' },
        ],
      },
    ],
  },
  {
    slug: 'geometry',
    title: '几何',
    tagline: '先看图，再动手画：形状、角度、面积、体积都能拖出来。',
    chapters: [
      {
        slug: 'shapes',
        title: '图形认识',
        topics: [
          { slug: 'triangles', title: '三角形' },
          { slug: 'quadrilaterals', title: '四边形' },
          { slug: 'polygons', title: '多边形' },
          { slug: 'circles', title: '圆' },
          { slug: 'symmetry', title: '对称' },
        ],
      },
      {
        slug: 'angles',
        title: '角',
        topics: [
          { slug: 'angles', title: '角的度量' },
          { slug: 'using-protractor', title: '用量角器量角' },
          { slug: 'complementary-supplementary', title: '余角与补角' },
          { slug: 'parallel-lines', title: '平行线与截线' },
        ],
      },
      {
        slug: 'triangles-advanced',
        title: '三角形进阶',
        topics: [
          { slug: 'angle-sum', title: '三角形内角和' },
          { slug: 'congruence', title: '全等三角形' },
          { slug: 'similarity', title: '相似三角形' },
          { slug: 'pythagoras', title: '勾股定理' },
          { slug: 'trigonometry-intro', title: '三角函数入门' },
        ],
      },
      {
        slug: 'perimeter-area',
        title: '周长与面积',
        topics: [
          { slug: 'perimeter', title: '周长' },
          { slug: 'rectangle-area', title: '长方形面积' },
          { slug: 'triangle-area', title: '三角形面积' },
          { slug: 'parallelogram-area', title: '平行四边形面积' },
          { slug: 'trapezoid-area', title: '梯形面积' },
          { slug: 'circle-circumference', title: '圆的周长' },
          { slug: 'circle-area', title: '圆的面积' },
          { slug: 'composite-area', title: '组合图形面积' },
        ],
      },
      {
        slug: 'solids',
        title: '立体图形',
        topics: [
          { slug: 'cuboid', title: '长方体' },
          { slug: 'prism', title: '棱柱' },
          { slug: 'cylinder', title: '圆柱' },
          { slug: 'cone', title: '圆锥' },
          { slug: 'sphere', title: '球' },
          { slug: 'volume', title: '体积' },
          { slug: 'surface-area', title: '表面积' },
        ],
      },
      {
        slug: 'coordinates',
        title: '坐标与变换',
        topics: [
          { slug: 'coordinate-plane', title: '平面直角坐标系' },
          { slug: 'quadrants', title: '象限' },
          { slug: 'distance-formula', title: '两点间的距离' },
          { slug: 'midpoint', title: '中点坐标' },
          { slug: 'translation', title: '平移' },
          { slug: 'rotation', title: '旋转' },
          { slug: 'reflection', title: '轴对称' },
          { slug: 'dilation', title: '缩放' },
        ],
      },
    ],
  },
  {
    slug: 'measurement',
    title: '测量',
    tagline: '长度、面积、体积、时间、温度：单位是数学和现实之间的翻译器。',
    chapters: [
      {
        slug: 'measurement-basics',
        title: '常见量',
        topics: [
          { slug: 'length', title: '长度' },
          { slug: 'mass', title: '质量' },
          { slug: 'time', title: '时间' },
          { slug: 'temperature', title: '温度' },
        ],
      },
      {
        slug: 'unit-conversion',
        title: '单位换算',
        topics: [
          { slug: 'area-units', title: '面积单位' },
          { slug: 'volume-units', title: '体积与容积单位' },
          { slug: 'conversion-method', title: '单位换算的方法' },
        ],
      },
    ],
  },
  {
    slug: 'data',
    title: '数据与概率',
    tagline: '把一堆数字变成一句结论：统计量、图表和概率。',
    chapters: [
      {
        slug: 'statistics',
        title: '统计量',
        topics: [
          { slug: 'mean', title: '平均数' },
          { slug: 'median', title: '中位数' },
          { slug: 'mode', title: '众数' },
          { slug: 'range', title: '极差' },
        ],
      },
      {
        slug: 'charts',
        title: '统计图',
        topics: [
          { slug: 'bar-chart', title: '条形图' },
          { slug: 'line-graph', title: '折线图' },
          { slug: 'pie-chart', title: '扇形图' },
          { slug: 'scatter-plot', title: '散点图' },
        ],
      },
      {
        slug: 'probability',
        title: '概率',
        topics: [
          { slug: 'probability-intro', title: '概率入门' },
          { slug: 'frequency', title: '频率与试验' },
        ],
      },
    ],
  },
  {
    slug: 'activities',
    title: '数学活动',
    tagline: '动手做出来的数学，比背下来的记得久。',
    chapters: [
      {
        slug: 'hands-on',
        title: '动手玩',
        topics: [
          { slug: 'tangram', title: '七巧板' },
          { slug: 'geoboard', title: '钉子板' },
          { slug: 'paper-folding', title: '折纸与对称' },
          { slug: 'tessellation', title: '镶嵌图案' },
          { slug: 'magic-square', title: '幻方' },
        ],
      },
    ],
  },
];

export interface FlatTopic {
  section: Section;
  chapter: Chapter;
  slug: string;
  title: string;
  href: string;
}

export const allTopics: FlatTopic[] = curriculum.flatMap((section) =>
  section.chapters.flatMap((chapter) =>
    chapter.topics.map((topic) => ({
      section,
      chapter,
      slug: topic.slug,
      title: topic.title,
      href: `/topics/${section.slug}/${topic.slug}/`,
    })),
  ),
);

export const topicBySlug = new Map(allTopics.map((topic) => [topic.slug, topic]));
