import { describe, it, expect } from 'vitest'
import { formattedDate } from '../src/utils/formattedDate'

describe('formattedDate', () => {
  it('formats date as "YYYY-MM-DD"', () => {
    const date = new Date('2023-08-27T00:00:00Z')
    expect(formattedDate({ date })).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  it('returns a string for valid date', () => {
    const date = new Date()
    expect(typeof formattedDate({ date })).toBe('string')
  })
})
