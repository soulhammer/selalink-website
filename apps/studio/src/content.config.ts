import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().or(z.string().transform((val) => new Date(val))),
    updatedDate: z.date().or(z.string().transform((val) => new Date(val))).optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('General'),
    app: z.enum(['freshsnap', 'freshself', 'buildself', 'logself', 'general', 'petself', 'buildsnap', 'studio']).default('general'),
    youtubeId: z.string().optional(),
    authority: z.string().optional(),
    steps: z.array(z.object({
      name: z.string(),
      text: z.string(),
    })).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
