import { groupByAndCountPipe } from './Util'

const groupByAndCountPipeFn = groupByAndCountPipe({ k: 'testKey' })

test('groupByAndCountPipe() drops any empty string groups', () => {
  const result = groupByAndCountPipeFn([
    { testKey: 'a', data: 1 },
    { testKey: 'a', data: 2 },
    { testKey: 'b', data: 3 },
    { testKey: '', data: 4 },
  ])
  expect(result).toEqual([['a', 2], ['b', 1]])
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
  expect(result).toEqual([['a', 2], ['c', 3]])
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
  expect(result).toEqual([['a', 1], ['d', 3], ['b', 1], ['c', 4], ['f', 1]])
})