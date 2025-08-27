export function paginatePosts(posts: any[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(posts.length / perPage))
  const paginatedPosts = posts.slice((page - 1) * perPage, page * perPage)
  return { paginatedPosts, totalPages }
}
