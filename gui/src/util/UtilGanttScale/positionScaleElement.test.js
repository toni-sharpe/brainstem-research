import {
  calcLeftScalePerc,
  calcScaleLinePosition,
  calcScaleStepPosition,
} from './UtilGanttScale'

/*
 * calcLeftScalePerc()
 */
test('calcLeftScalePerc() - throws error is firstStep is not a number', () => {
  expect(() => calcLeftScalePerc({ firstStep: '1' })).toThrow('firstStep in calcLeftScalePerc must be a number')
})
test('calcLeftScalePerc() - works well with the correct numbers', () => {
  expect(calcLeftScalePerc({ firstStep: 3, step: 6, stepDiff: 7 })).toEqual(42.857)
})

/*
 * calcScaleLinePosition()
 */
test('calcScaleLinePosition() - when not last step', () => {
  expect(calcScaleLinePosition({ ganttHeight: 51, isLastStep: false, stepLeftPerc: 47 })).toEqual({ height: '51px', left: 'calc(47%)' })
})
test('calcScaleLinePosition() - when last step', () => {
  expect(calcScaleLinePosition({ ganttHeight: 51, isLastStep: true, stepLeftPerc: 47 })).toEqual({ height: '51px', right: 0 })
})

/*
 * calcScaleStepPosition()
 */
test('calcScaleStepPosition() - when not last step', () => {
  expect(calcScaleStepPosition({ isLastStep: false, stepLeftPerc: 33 })).toEqual({ left: 'calc(33%)' })
})
test('calcScaleStepPosition() - when last step', () => {
  expect(calcScaleStepPosition({ isLastStep: true, stepLeftPerc: 33 })).toEqual({ right: 0 })
})
