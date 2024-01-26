import { calcFineGrainedStepDivision } from './UtilGanttScale'

test('calcFineGrainedStepDivision() - throws error if stepDivision is not numeric', () => {
  const errMsg = 'calcFineGrainedStepDivision in UtilGanttScale must have numbers in all these parameters [stepDivision]'
  expect(() => calcFineGrainedStepDivision({ firstStep: 1, lastStep: 4, stepDivision: '3' })).toThrow(errMsg)
})
test('calcFineGrainedStepDivision() - if >50 and <=100 then return 10', () => {
  expect(calcFineGrainedStepDivision({ firstStep: 1, lastStep: 4, stepDivision: 25 })).toEqual(10)
})
test('calcFineGrainedStepDivision() - if >50 and <=100 then return 10', () => {
  expect(calcFineGrainedStepDivision({ firstStep: 1, lastStep: 2, stepDivision: 51 })).toEqual(10)
})
test('calcFineGrainedStepDivision() - if >20 and <=50 then return 5', () => {
  expect(calcFineGrainedStepDivision({ firstStep: 1, lastStep: 5, stepDivision: 10 })).toEqual(5)
})
test('calcFineGrainedStepDivision() - if >20 and <=50 then return 5', () => {
  expect(calcFineGrainedStepDivision({ firstStep: 1, lastStep: 5, stepDivision: 7 })).toEqual(5)
})
test('calcFineGrainedStepDivision() - if >10 and <=20 then return 5', () => {
  expect(calcFineGrainedStepDivision({ firstStep: 1, lastStep: 3, stepDivision: 10 })).toEqual(2)
})
test('calcFineGrainedStepDivision() - if >10 and <=20 then return 5', () => {
  expect(calcFineGrainedStepDivision({ firstStep: 1, lastStep: 2, stepDivision: 11 })).toEqual(2)
})
test('calcFineGrainedStepDivision() - if <=10 then return 1', () => {
  expect(calcFineGrainedStepDivision({ firstStep: 1, lastStep: 2, stepDivision: 5 })).toEqual(1)
})
