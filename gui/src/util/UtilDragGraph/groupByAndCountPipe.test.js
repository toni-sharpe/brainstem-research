import { groupByAndCountPipe } from './UtilDragGraphGrouping'

const groupByAndCountPipeFn = groupByAndCountPipe({ k: 'testKey' })

test('groupByAndCountPipe() drops any empty string groups', () => {
  const result = groupByAndCountPipeFn([
    { testKey: 'a', data: 1 },
    { testKey: 'a', data: 2 },
    { testKey: 'b', data: 3 },
    { testKey: '', data: 4 },
  ])
  expect(result).toEqual([['a', { length: 2, severe: 0, nonSevere: 0 }], ['b', { length: 1, severe: 0, nonSevere: 0 }]])
})

test('groupByAndCountPipe() drops any null groups', () => {
  const result = groupByAndCountPipeFn([
    { testKey: 'a', data: 1 },
    { testKey: null, data: 2 },
    { testKey: null, data: 3 },
    { testKey: 'a', data: 4 },
    { testKey: 'c', data: 5 },
    { testKey: 'c', data: 6 },
    { testKey: 'c', data: 7 },
  ])
  expect(result).toEqual([['a', { length: 2, severe: 0, nonSevere: 0 }], ['c', { length: 3, severe: 0, nonSevere: 0 }]])
})

test('groupByAndCountPipe() counts all groups when keys are present', () => {
  const result = groupByAndCountPipeFn([
    { testKey: 'a', data:  1 },
    { testKey: 'd', data:  2 },
    { testKey: 'd', data:  3 },
    { testKey: 'b', data:  4 },
    { testKey: 'd', data:  5 },
    { testKey: 'c', data:  6 },
    { testKey: 'c', data:  7 },
    { testKey: 'c', data:  8 },
    { testKey: 'c', data:  9 },
    { testKey: 'f', data: 10 },
  ])
  // note they are added as found, so d is second
  expect(result).toEqual([['a', { length: 1, severe: 0, nonSevere: 0 }], ['d', { length: 3, severe: 0, nonSevere: 0 }], ['b', { length: 1, severe: 0, nonSevere: 0 }], ['c', { length: 4, severe: 0, nonSevere: 0 }], ['f', { length: 1, severe: 0, nonSevere: 0 }]])
})