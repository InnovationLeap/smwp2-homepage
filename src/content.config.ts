import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  layout: z.string().optional(),
});

const pagesZh = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages/zh' }),
  schema: pageSchema,
});

const pagesEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages/en' }),
  schema: pageSchema,
});

export const collections = {
  'zh': pagesZh,
  'en': pagesEn,
};
