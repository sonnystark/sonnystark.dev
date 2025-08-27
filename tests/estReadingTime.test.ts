import { describe, it, expect } from 'vitest'
import { estReadingTime } from '../src/utils/estReadingTime'

describe('estReadingTime', () => {
  it('returns 1 for short content', () => {
    expect(estReadingTime('Hello world!')).toBe(1)
  })

  it('returns correct reading time for 200 words', () => {
    const content = Array(200).fill('word').join(' ')
    expect(estReadingTime(content)).toBe(1)
  })

  it('returns correct reading time for 400 words', () => {
    const content = Array(400).fill('word').join(' ')
    expect(estReadingTime(content)).toBe(2)
  })

  it('returns 0 for empty content', () => {
    expect(estReadingTime('')).toBe(0)
  })
})
