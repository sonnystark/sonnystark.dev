export function getAllTags(posts: any[]) {
  return Array.from(new Set(posts.flatMap((post) => post.data.tags ?? []))).filter(
    (tag): tag is string => typeof tag === 'string' && tag.length > 0
  )
}

export function filterPostsByTag(posts: any[], tag?: string) {
  if (!tag) return posts
  return posts.filter((post) => post.data.tags?.some((t: string) => t.trim().toLowerCase() === tag))
}
