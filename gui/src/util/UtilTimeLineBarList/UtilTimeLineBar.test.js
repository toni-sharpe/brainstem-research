import {
  calcLeft,
  calcLineFattener,
  calcPercentage,
  calcWidth,
} from './UtilTimeLineBar'

const scale = { totalSteps: 10, stepDivision: 100 }


/*
 * calcPercentage()
 */
test('calcPercentage()', () => {
  expect(calcPercentage({ val: 180 })).toEqual(60)
  expect(calcPercentage({ scale, val: 200 })).toEqual(20)
  expect(calcPercentage({ scale, val: 0 })).toEqual(0)
  expect(calcPercentage({ scale, val: 1000 })).toEqual(100)
  expect(() => calcPercentage({ scale })).toThrow('calcPercentage function requires a val')
})


/*
 * calcLeft()
 */
test('calcLeft()', () => {
  expect(calcLeft({ scale, val: 0 })).toEqual(null)
  expect(calcLeft({ scale, val: 50 })).toEqual(5)
  expect(calcLeft({ scale, val: 1000 })).toEqual(100)
  expect(calcLeft({ val: 180 })).toEqual(60)
  expect(() => calcLeft({ scale })).toThrow('calcLeft function requires a val')
})


/*
 * calcWidth()
 */
test('calcWidth()', () => {
  expect(calcWidth({ scale, min: 100, max: 200 })).toEqual({ left: '10%', width: '10%' })
  expect(calcWidth({ scale, min: 200, max: 1000 })).toEqual({ left: '20%', width: '80%' })
  expect(calcWidth({ scale, min: 1, max: 2 })).toEqual({ left: '0.1%', width: '0.1%' })
  expect(calcWidth({ min: 3, max: 6 })).toEqual({ left: '1%', width: '1%' })
  expect(() => calcWidth({ scale })).toThrow('calcWidth function requires a min and max value provided')
})


/*
 * calcLineFattener()
 */
test('calcLineFattener() is null if false', () => {
  expect(calcLineFattener({ fatLines: false })).toEqual(null)
})

test('calcLineFattener() returns box shadow if true', () => {
  expect(calcLineFattener({ fatLines: true })).toEqual({ boxShadow: '0 0 0 1px #555' })
})