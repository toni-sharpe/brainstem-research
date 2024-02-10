import { isFullMax, isWithinMultiplier } from './UtilDragGraphFilter'

test('isFullMax() - v is max then true', () => {
  expect(isFullMax({ max: 10, v: 10 })).toEqual(true)
})
test('isFullMax() - v is less than max then false', () => {
  expect(isFullMax({ max: 10, v: 9 })).toEqual(false)
})
