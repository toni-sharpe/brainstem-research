import {
  calcLeft,
  calcLineFattener,
  calcPercentage,
  calcWidth,
} from './UtilGanttBar'

const scaleFull = { firstStep: 0, lastStep: 10, totalSteps: 10, stepDivision: 100 }
const scalePartial = { firstStep: 2, lastStep: 8, totalSteps: 10, stepDivision: 100 }
const scaleFullZoom = { firstStep: 5, lastStep: 6, totalSteps: 10, stepDivision: 100 }


/*
 * calcPercentage()
 */
test('calcPercentage()', () => {
  expect(calcPercentage({ val: 180 })).toEqual(50)
  expect(calcPercentage({ scale: scaleFull, val: 200 })).toEqual(20)
  expect(calcPercentage({ scale: scaleFull, val: 0 })).toEqual(0)
  expect(calcPercentage({ scale: scaleFull, val: 1000 })).toEqual(100)
  expect(() => calcPercentage({ scale: scaleFull })).toThrow('calcPercentage function requires a val')
})


/*
 * calcLeft()
 */
test('calcLeft()', () => {
  expect(calcLeft({ scale: scaleFull, val: 0 })).toEqual(null)
  expect(calcLeft({ scale: scaleFull, val: 50 })).toEqual(5)
  expect(calcLeft({ scale: scaleFull, val: 1000 })).toEqual(100)
  expect(calcLeft({ val: 180 })).toEqual(50)
  expect(() => calcLeft({ scale: scaleFull })).toThrow('calcLeft function requires a val')
})
test('calcLeft() with scale factor', () => {
  expect(calcLeft({ scale: scalePartial, val: 0 })).toEqual(null)
  expect(calcLeft({ scale: scalePartial, val: 50 })).toEqual(-25)
  expect(calcLeft({ scale: scalePartial, val: 1000 })).toEqual(133.333)
  expect(calcLeft({ scale: scalePartial, val: 180 })).toEqual(-3.33333)
  expect(() => calcLeft({ scale: scaleFull })).toThrow('calcLeft function requires a val')
})
test('calcLeft() with zoom right in scale factor', () => {
  expect(calcLeft({ scale: scaleFullZoom, val: 0 })).toEqual(null)
  expect(calcLeft({ scale: scaleFullZoom, val: 50 })).toEqual(-450)
  expect(calcLeft({ scale: scaleFullZoom, val: 1000 })).toEqual(500)
  expect(calcLeft({ scale: scaleFullZoom, val: 180 })).toEqual(-320)
})


/*
 * calcWidth()
 */
test('calcWidth()', () => {
  expect(calcWidth({ scale: scaleFull, min: 100, max: 200 })).toEqual({ left: '10%', width: '10%' })
  expect(calcWidth({ scale: scaleFull, min: 200, max: 1000 })).toEqual({ left: '20%', width: '80%' })
  expect(calcWidth({ scale: scaleFull, min: 1, max: 2 })).toEqual({ left: '0.1%', width: '0.1%' })
  expect(calcWidth({ min: 4, max: 8 })).toEqual({ left: '1.11111%', width: '1.11111%' })
  expect(() => calcWidth({ scale: scaleFull })).toThrow('calcWidth function requires a min and max value provided')
})
test('calcWidth() with scale factor', () => {
  expect(calcWidth({ scale: scalePartial, min: 100, max: 200 })).toEqual({ left: '-16.6667%', width: '16.6667%' })
  expect(calcWidth({ scale: scalePartial, min: 200, max: 1000 })).toEqual({ left: '0%', width: '133.333%' })
  expect(calcWidth({ scale: scalePartial, min: 200, max: 800 })).toEqual({ left: '0%', width: '100%' })
  expect(calcWidth({ scale: scalePartial, min: 400, max: 1000 })).toEqual({ left: '33.3333%', width: '100%' })
  expect(calcWidth({ scale: scalePartial, min: 1, max: 2 })).toEqual({ left: '-33.1667%', width: '0.166667%' })
  expect(calcWidth({ scale: scalePartial, min: 3, max: 6 })).toEqual({ left: '-32.8333%', width: '0.5%' })
})
test('calcWidth() with scale factor', () => {
  expect(calcWidth({ scale: scaleFullZoom, min: 300, max: 500 })).toEqual({ left: '-200%', width: '200%' })
  expect(calcWidth({ scale: scaleFullZoom, min: 500, max: 1000 })).toEqual({ left: '0%', width: '500%' })
  expect(calcWidth({ scale: scaleFullZoom, min: 500, max: 600 })).toEqual({ left: '0%', width: '100%' })
  expect(calcWidth({ scale: scaleFullZoom, min: 600, max: 1000 })).toEqual({ left: '100%', width: '400%' })
  expect(calcWidth({ scale: scaleFullZoom, min: 1, max: 2 })).toEqual({ left: '-499%', width: '1%' })
  expect(calcWidth({ scale: scaleFullZoom, min: 3, max: 6 })).toEqual({ left: '-497%', width: '3%' })
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