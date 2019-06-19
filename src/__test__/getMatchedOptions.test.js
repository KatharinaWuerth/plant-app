import { getMatchedOptions } from '../utils'

const tagList = [
  'room',
  'dark',
  'moist',
  'easy',
  'not-big',
  'not-wide',
  'toxic',
  'not-winter',
  'allergenic',
]

describe('get matched Options', () => {
  test('works with empty selection list', () => {
    expect(getMatchedOptions(tagList, [])).toEqual([])
  })
  test('works with content', () => {
    expect(getMatchedOptions(tagList, ['toxic'])).toEqual(['toxic'])
  })
})
