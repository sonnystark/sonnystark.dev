// src/utils/truncateText.ts
export function truncateText(text: string, max: number): string {
  if (!text) return ''
  if (text.length <= max) return text
  if (max <= 3) return '.'.repeat(max) // edge case: max too small for ellipsis
  return text.slice(0, max - 3) + '...'
}
