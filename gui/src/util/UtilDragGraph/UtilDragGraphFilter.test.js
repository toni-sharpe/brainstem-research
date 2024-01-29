import { DRAG_GRAPH_MIN_TO_MAX_MULTIPLIER as m } from 'util/Constant/BaseConstantList'

import { isFullMax, isWithinMultiplier } from './UtilDragGraphFilter'

test('isFullMax() - v is max then true', () => {
  expect(isFullMax({ max: 10, v: 10 })).toEqual(true)
})
test('isFullMax() - v is less than max then false', () => {
  expect(isFullMax({ max: 10, v: 9 })).toEqual(false)
})

test('isWithinMultiplier() - v greater than the min X multiplier, returns false', () => {
  expect(isWithinMultiplier({ min: 3, v: m * 3 + 1 })).toEqual(false)
})
test('isWithinMultiplier() - v equal to the min X multiplier, returns true', () => {
  expect(isWithinMultiplier({ min: 3, v: m * 3 })).toEqual(true)
})
test('isWithinMultiplier() - v less than the min X multiplier, returns true', () => {
  expect(isWithinMultiplier({ min: 3, v: m * 3 - 1 })).toEqual(true)
})