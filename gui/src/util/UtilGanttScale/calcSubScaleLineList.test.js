import { calcFineGrainedStepDivision, calcSubScaleLineList } from './UtilGanttScale'

test('calcSubScaleLineList() - fits regular marks into irregular steps', () => {
  const divisionMarkGranularity = calcFineGrainedStepDivision({ firstStep: 1, lastStep: 3, stepDivision: 23 })
  expect(calcSubScaleLineList({ firstStep: 1, lastStep: 3, stepDivision: 23 })).toEqual([
    {
      count: 25,
      perc: 4.34783,
    },
    {
      count: 30,
      perc: 15.2174,
    },
    {
      count: 35,
      perc: 26.087,
    },
    {
      count: 40,
      perc: 36.9565,
    },
    {
      count: 45,
      perc: 47.8261,
    },
    {
      count: 50,
      perc: 58.6957,
    },
    {
      count: 55,
      perc: 69.5652,
    },
    {
      count: 60,
      perc: 80.4348,
    },
    {
      count: 65,
      perc: 91.3043,
    },
  ])
})

test('calcSubScaleLineList() - fits regular marks into regular steps', () => {
  const divisionMarkGranularity = calcFineGrainedStepDivision({ firstStep: 1, lastStep: 8, stepDivision: 5 })
  expect(calcSubScaleLineList({ firstStep: 1, lastStep: 8, stepDivision: 5 })).toEqual([
    {
       count: 10,
       perc: 14.2857,
    },
    {
       count: 15,
       perc: 28.5714,
    },
    {
       count: 20,
       perc: 42.8571,
    },
    {
       count: 25,
       perc: 57.1429,
    },
    {
       count: 30,
       perc: 71.4286,
    },
    {
       count: 35,
       perc: 85.7143,
    },
  ])
})