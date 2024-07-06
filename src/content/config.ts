import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    draft: z.boolean().optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
