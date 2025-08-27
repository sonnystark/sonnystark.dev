import { describe, it, expect } from 'vitest'
import { formattedDate } from '../src/utils/formattedDate'

describe('formattedDate', () => {
  it('formats date as "Mon DD, YYYY"', () => {
    const date = new Date('2023-08-27T00:00:00Z')
    expect(formattedDate({ date })).toMatch(/\w{3,} \d{1,2}, \d{4}/)
  })

  it('returns a string for valid date', () => {
    const date = new Date()
    expect(typeof formattedDate({ date })).toBe('string')
  })
})
