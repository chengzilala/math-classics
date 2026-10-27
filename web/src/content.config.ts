import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 内容模型：一个命题一份 Markdown，正文字段全部在 frontmatter 里。
// source / source_license 必填——缺了 Astro 会在构建时报错。
const propositions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/propositions' }),
  schema: z.object({
    id: z
      .string()
      .regex(/^[a-z0-9-]+$/, 'id 只能用英文小写、数字和连字符'),
    title: z.string().min(1),
    line: z.string().min(1),
    chapter: z.string().min(1),
    summary: z.string().min(1),
    significance: z.string().min(1, '数学意义不能为空'),
    related: z
      .array(
        z.object({
          label: z.string().min(1),
          id: z.string().regex(/^[a-z0-9-]+$/, '关联命题 id 只能用英文小写、数字和连字符'),
        }),
      )
      .default([]),
    source: z.string().min(1, '必须写明底本来源'),
    source_license: z.string().min(1, '必须写明底本许可'),
    original: z.string().min(1, '原文不能为空'),
    original_note: z.string().optional(),
    steps: z
      .array(
        z.object({
          text: z.string().min(1),
          analogy: z.string().optional(),
        }),
      )
      .length(3, '白话固定 3 步'),
    interaction: z.string().min(1),
    interaction_note: z.string().optional(),
    exercises: z
      .array(
        z.object({
          kind: z.enum(['concept', 'calc', 'transfer']),
          question: z.string().min(1),
          options: z.array(z.string().min(1)).min(2),
          answer: z.number().int().nonnegative(),
          hint: z.string().min(1),
          note: z.string().min(1),
        }),
      )
      .min(1),
    proofreader: z.string().min(1),
    updated: z.string().min(1),
    order: z.number().int().optional(),
  }),
});

export const collections = { propositions };
