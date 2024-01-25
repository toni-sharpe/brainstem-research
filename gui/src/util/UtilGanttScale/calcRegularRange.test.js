import { calcFineGrainedStepDivision, calcRegularRange } from './UtilGanttScale'

test('calcRegularRange() - fits regular marks into irregular steps', () => {
  const divisionMarkGranularity = calcFineGrainedStepDivision({ firstStep: 1, lastStep: 3, stepDivision: 23 })
  expect(calcRegularRange({ firstStep: 1, lastStep: 3, stepDivision: 23 })).toEqual([30, 40, 50, 60])
})

test('calcRegularRange() - fits regular marks into regular steps', () => {
  const divisionMarkGranularity = calcFineGrainedStepDivision({ firstStep: 1, lastStep: 8, stepDivision: 5 })
  expect(calcRegularRange({ firstStep: 1, lastStep: 8, stepDivision: 5 })).toEqual([10, 15, 20, 25, 30, 35])
})