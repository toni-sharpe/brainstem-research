import '@testing-library/jest-dom'

import { sortFn } from './Util'

test('sortFn() returns -1 if A is greater than B', () => {
  expect(sortFn(1, 0)).toEqual(-1)
})
test('sortFn() returns 1 if B is less than A', () => {
  expect(sortFn(0, 1)).toEqual(1)
})
test('sortFn() returns 1 if B is equal to A', () => {
  expect(sortFn(0, 0)).toEqual(1)
})