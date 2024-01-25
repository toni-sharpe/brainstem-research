import {
  calcStepDiff,
  calcScalePerc,
} from './UtilGanttScale'

/*
 *  calcStepDiff()
 */
test('calcStepDiff() - throws error if numbers not provided', () => {
  const errMsg = 'calcStepDiff in UtilGanttScale must have numbers in all these parameters [lastStep, firstStep]'
  expect(() => calcStepDiff({ firstStep: '1', lastStep: 0 })).toThrow(errMsg)
})
test('calcStepDiff() - throws error if lastStep is less than firstStep', () => {
  const errMsg = 'lastStep must be equal to or greater than firstStep in calcStepDiff, GanttScale'
  expect(() => calcStepDiff({ firstStep: 2, lastStep: 1 })).toThrow(errMsg)
})
test('calcStepDiff() - does not throw error if lastStep is equal to firstStep', () => {
  expect(() => calcStepDiff({ firstStep: 2, lastStep: 2 })).not.toThrow()
})
test('calcStepDiff() - provides diff as expected when values are good', () => {
  expect(calcStepDiff({ firstStep: 2, lastStep: 3 })).toEqual(2)
})


/*
 * calcScalePerc()
 */
test('calcScalePerc() - throws error if numbers not provided', () => {
  const errMsg = 'calcScalePerc in UtilGanttScale must have numbers in all these parameters [step, stepDiff]'
  expect(() => calcScalePerc({ step: '1', stepDiff: 100 })).toThrow(errMsg)
})
test('calcScalePerc() - scaled perc when the numbers are good', () => {
  expect(calcScalePerc({ step: 2, stepDiff: 4 })).toEqual(50)
})
