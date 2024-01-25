import { calcScaleToFitUI } from './UtilGanttScale'

test('calcScaleToFitUI() throws error when scale is missing entirely', () => {
  const errArgs = undefined
  const errMsg = 'calcScaleToFitUI in UtilGanttScale must have numbers in all these parameters [stepDivision, totalSteps]'
  expect(() => calcScaleToFitUI(errArgs)).toThrow(errMsg)
})
test('calcScaleToFitUI() throws error when scale is missing stepDivision', () => {
  const errArgs = { scale: { totalSteps: 17 }}
  const errMsg = 'calcScaleToFitUI in UtilGanttScale must have numbers in all these parameters [stepDivision, totalSteps]'
  expect(() => calcScaleToFitUI(errArgs)).toThrow(errMsg)
})
test('calcScaleToFitUI() throws error when scale stepDivision is not numeric', () => {
  const errArgs = { scale: { stepDivision: 'wrong', totalSteps: 19 }}
  const errMsg = 'calcScaleToFitUI in UtilGanttScale must have numbers in all these parameters [stepDivision, totalSteps]'
  expect(() => calcScaleToFitUI(errArgs)).toThrow(errMsg)
})
test('calcScaleToFitUI() throws error when scale is missing totalSteps', () => {
  const errArgs = { scale: { stepDivision: 23 }}
  const errMsg = 'calcScaleToFitUI in UtilGanttScale must have numbers in all these parameters [stepDivision, totalSteps]'
  expect(() => calcScaleToFitUI(errArgs)).toThrow(errMsg)
})
test('calcScaleToFitUI() throws error when scale totalSteps is not numeric', () => {
  const errArgs = { scale: { stepDivision: 29, totalSteps: 'wrong' }}
  const errMsg = 'calcScaleToFitUI in UtilGanttScale must have numbers in all these parameters [stepDivision, totalSteps]'
  expect(() => calcScaleToFitUI(errArgs)).toThrow(errMsg)
})
