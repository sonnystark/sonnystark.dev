import { defineCollection, z } from 'astro:content'

export const collections = {
  posts: defineCollection({
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        tags: z.array(z.string().optional()).optional(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: image().optional(),
        relatedPosts: z.array(z.string()).optional(),
      }),
  }),
  projects: defineCollection({
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        githubUrl: z.string().url(),
        liveUrl: z.string().url().optional(),
        heroImage: image().optional(),
        featured: z.boolean().default(false),
        pubDate: z.coerce.date(),
      }),
  }),
  blogroll: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      link: z.string(),
      motivation: z.string().optional(),
    }),
  }),
}
