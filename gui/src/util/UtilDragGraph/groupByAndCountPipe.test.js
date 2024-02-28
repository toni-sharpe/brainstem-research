import { groupByAndCountPipe } from './UtilDragGraphGrouping'

const groupByAndCountPipeFn = groupByAndCountPipe({ k: 'testKey' })

test('groupByAndCountPipe() drops any empty string groups', () => {
  const result = groupByAndCountPipeFn([
    { testKey: 'a', data: 1, overall_patient_rating:  9, outcome: 'NSV' },
    { testKey: 'a', data: 2, overall_patient_rating:  5, outcome: 'NSV' },
    { testKey: 'b', data: 3, overall_patient_rating: 11, outcome: 'SEV' },
    { testKey: '',  data: 4, overall_patient_rating: 13, outcome: 'SEV' },
  ])
  expect(result).toEqual([[
    'a', {
      careLevel: 7,
      dcb: 0,
      dcbPerc: 0,
      length: 2,
      nonSevere: 2,
      nonSeverePerc: 100,
      severe: 0,
      severePerc: 0,
    }
  ], [
    'b', {
      careLevel: 11,
      dcb: 0,
      dcbPerc: 0,
      length: 1,
      nonSevere: 0,
      nonSeverePerc: 0,
      severe: 1,
      severePerc: 100,
    }
  ]])
})

test('groupByAndCountPipe() drops any null groups', () => {
  const result = groupByAndCountPipeFn([
    { testKey:  'a', data: 1, overall_patient_rating:     9, outcome: 'NSV' },
    { testKey: null, data: 2, overall_patient_rating:     5, outcome: 'NSV' },
    { testKey: null, data: 3, overall_patient_rating:    11, outcome: 'NSV' },
    { testKey:  'a', data: 4, overall_patient_rating:  null, outcome: 'NSV' },
    { testKey:  'c', data: 5, overall_patient_rating:     5, outcome: 'NSV' },
    { testKey:  'c', data: 6, overall_patient_rating:    11, outcome: 'NSV' },
    { testKey:  'c', data: 7, overall_patient_rating:    13, outcome: 'SEV' },
  ])
  expect(result).toEqual([[
    'a', {
      careLevel: 4.5,
      dcb: 0,
      dcbPerc: 0,
      length: 2,
      nonSevere: 2,
      nonSeverePerc: 100,
      severe: 0,
      severePerc: 0,
    }
  ], [
    'c', {
      careLevel: 9.66667,
      dcb: 0,
      dcbPerc: 0,
      length: 3,
      nonSevere: 2,
      nonSeverePerc: 66.6667,
      severe: 1,
      severePerc: 33.3333,
    }
  ]])
})

test('groupByAndCountPipe() counts all groups when keys are present', () => {
  const result = groupByAndCountPipeFn([
    { testKey: 'a', data:  1, overall_patient_rating:   100, outcome: 'NSV'  },
    { testKey: 'd', data:  2, overall_patient_rating:    51, outcome: 'NSV'  },
    { testKey: 'd', data:  3, overall_patient_rating:    53, outcome: 'NSV'  },
    { testKey: 'b', data:  4, overall_patient_rating:     9, outcome: 'NSV'  },
    { testKey: 'd', data:  5, overall_patient_rating:     5, outcome: 'SEV'  },
    { testKey: 'c', data:  6, overall_patient_rating:    11, outcome: 'NSV'  },
    { testKey: 'c', data:  7, overall_patient_rating:    19, outcome: 'NSV'  },
    { testKey: 'c', data:  8, overall_patient_rating:    23, outcome: 'NSV'  },
    { testKey: 'c', data:  9, overall_patient_rating:    31, outcome: 'NSV'  },
    { testKey: 'f', data: 10, overall_patient_rating:    37, outcome: 'NSV'   },
  ])
  // note they are added as found, so d is second
  expect(result).toEqual([[
    'a', {
      careLevel: 100,
      dcb: 0,
      dcbPerc: 0,
      length: 1,
      nonSevere: 1,
      nonSeverePerc: 100,
      severe: 0,
      severePerc: 0,
    }
  ], [
    'd', {
      careLevel: 36.3333,
      dcb: 0,
      dcbPerc: 0,
      length: 3,
      nonSevere: 2,
      nonSeverePerc: 66.6667,
      severe: 1,
      severePerc: 33.3333,
    }
  ], [
    'b', {
      careLevel: 9,
      dcb: 0,
      dcbPerc: 0,
      length: 1,
      nonSevere: 1,
      nonSeverePerc: 100,
      severe: 0,
      severePerc: 0,
    }
  ], [
    'c', {
      careLevel: 21,
      dcb: 0,
      dcbPerc: 0,
      length: 4,
      nonSevere: 4,
      nonSeverePerc: 100,
      severe: 0,
      severePerc: 0,
    }
  ], [
    'f', {
      careLevel: 37,
      dcb: 0,
      dcbPerc: 0,
      length: 1,
      nonSevere: 1,
      nonSeverePerc: 100,
      severe: 0,
      severePerc: 0,
    }]
  ])
})
