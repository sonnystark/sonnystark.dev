import { describe, it, expect } from 'vitest'
import { truncateText } from '../src/utils/truncateText'

describe('truncateText', () => {
  it('returns original text if shorter than max', () => {
    expect(truncateText('Hello world', 20)).toBe('Hello world')
  })

  it('truncates text and adds ellipsis', () => {
    expect(truncateText('Hello world, this is a test', 10)).toBe('Hello w...')
  })

  it('returns empty string for empty input', () => {
    expect(truncateText('', 10)).toBe('')
  })
})
