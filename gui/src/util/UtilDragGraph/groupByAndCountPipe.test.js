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
      careLevel: 14,
      length: 2,
      severe: 0,
      nonSevere: 2
    }
  ], [
    'b', {
      careLevel: 11,
      length: 1,
      severe: 1,
      nonSevere: 0
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
      careLevel: 9,
      length: 2,
      severe: 0,
      nonSevere: 2
    }
  ], [
    'c', {
      careLevel: 29,
      length: 3,
      severe: 1,
      nonSevere: 2
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
      length: 1,
      severe: 0,
      nonSevere: 1
    }
  ], [
    'd', {
      careLevel: 109,
      length: 3,
      severe: 1,
      nonSevere: 2
    }
  ], [
    'b', {
      careLevel: 9,
      length: 1,
      severe: 0,
      nonSevere: 1
    }
  ], [
    'c', {
      careLevel: 84,
      length: 4,
      severe: 0,
      nonSevere: 4
    }
  ], [
    'f', {
      careLevel: 37,
      length: 1,
      severe: 0,
      nonSevere: 1
    }]
  ])
})
