import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
    app: z.enum(['storeself', 'freshself', 'buildself', 'general']).default('general'),
    youtubeId: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
