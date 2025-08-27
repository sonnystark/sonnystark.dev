import { getCollection } from 'astro:content'

export async function getRelatedPosts(
  currentPostSlug: string,
  currentPostTags: string[],
  limit = 4
): Promise<{ slug: string; title: string; date: Date }[]> {
  const allPosts = await getCollection('posts')
  return allPosts
    .filter(
      (post) =>
        post.data.tags?.length &&
        post.data.tags.some((tag) => tag && currentPostTags.includes(tag)) &&
        post.slug !== currentPostSlug &&
        post.data.title &&
        post.data.pubDate instanceof Date &&
        !isNaN(post.data.pubDate.getTime())
    )
    .map((post) => ({
      slug: post.slug,
      title: post.data.title,
      date: post.data.pubDate,
    }))
    .slice(0, limit)
}
