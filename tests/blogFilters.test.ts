import { describe, it, expect } from 'vitest'
import { getAllTags, filterPostsByTag } from '../src/utils/blogFilters'

describe('getAllTags', () => {
  it('returns unique tags from posts', () => {
    const posts = [
      { data: { tags: ['astro', 'web'] } },
      { data: { tags: ['astro', 'js'] } },
      { data: { tags: ['web'] } },
    ]
    expect(getAllTags(posts).sort()).toEqual(['astro', 'js', 'web'])
  })

  it('returns empty array if no tags', () => {
    const posts = [{ data: {} }, { data: {} }]
    expect(getAllTags(posts)).toEqual([])
  })
})

describe('filterPostsByTag', () => {
  it('filters posts by tag', () => {
    const posts = [
      { data: { tags: ['astro', 'web'] } },
      { data: { tags: ['astro', 'js'] } },
      { data: { tags: ['web'] } },
    ]
    expect(filterPostsByTag(posts, 'astro').length).toBe(2)
    expect(filterPostsByTag(posts, 'web').length).toBe(2)
    expect(filterPostsByTag(posts, 'js').length).toBe(1)
  })

  it('returns all posts if tag is undefined', () => {
    const posts = [{ data: { tags: ['astro'] } }, { data: { tags: ['web'] } }]
    expect(filterPostsByTag(posts, undefined)).toEqual(posts)
  })
})
