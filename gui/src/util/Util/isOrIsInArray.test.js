import '@testing-library/jest-dom'

import { isOrIsInArray } from './Util'

test('true if arr is key', () => {
  expect(isOrIsInArray({ arr: 'test', k: 'test'})).toEqual(true)
})

test('true if key is in arr', () => {
  expect(isOrIsInArray({ arr: ['test'], k: 'test'})).toEqual(true)
})

test('false if key is not in arr', () => {
  expect(isOrIsInArray({ arr: ['not-test'], k: 'test'})).toEqual(false)
})

test('throws an error if arr is missing', () => {
  expect(() => isOrIsInArray({ arr: 'test' })).toThrow('isOrIsInArray value error. Missing: k')
})
