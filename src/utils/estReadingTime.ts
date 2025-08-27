export function estReadingTime(content: string): number {
  if (typeof content !== 'string' || content.trim() === '') {
    return 0
  }

  const words = content.split(' ').length
  const wordsPerMinute = 200
  return Math.ceil(words / wordsPerMinute)
}
