import { calcFineGrainedStepDivision, calcSubScaleLineList } from './UtilGanttScale'

test('calcSubScaleLineList() - fits regular marks into irregular steps', () => {
  const divisionMarkGranularity = calcFineGrainedStepDivision({ firstStep: 1, lastStep: 3, stepDivision: 23 })
  expect(calcSubScaleLineList({ firstStep: 1, lastStep: 3, stepDivision: 23 })).toEqual([
    {
      count: 25,
      perc: 4.3478,
    },
    {
      count: 30,
      perc: 15.217,
    },
    {
      count: 35,
      perc: 26.087,
    },
    {
      count: 40,
      perc: 36.957,
    },
    {
      count: 45,
      perc: 47.826,
    },
    {
      count: 50,
      perc: 58.696,
    },
    {
      count: 55,
      perc: 69.565,
    },
    {
      count: 60,
      perc: 80.435,
    },
    {
      count: 65,
      perc: 91.304,
    },
  ])
})

test('calcSubScaleLineList() - fits regular marks into regular steps', () => {
  const divisionMarkGranularity = calcFineGrainedStepDivision({ firstStep: 1, lastStep: 8, stepDivision: 5 })
  expect(calcSubScaleLineList({ firstStep: 1, lastStep: 8, stepDivision: 5 })).toEqual([
    {
       count: 10,
       perc: 14.286,
    },
    {
       count: 15,
       perc: 28.571,
    },
    {
       count: 20,
       perc: 42.857,
    },
    {
       count: 25,
       perc: 57.143,
    },
    {
       count: 30,
       perc: 71.429,
    },
    {
       count: 35,
       perc: 85.714,
    },
  ])
})