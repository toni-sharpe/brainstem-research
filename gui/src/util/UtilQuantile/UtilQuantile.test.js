import { QUANTILE_DETAIL_THRESHOLD } from 'util/Constant/BaseConstantList'

import {
  calcQuantileDetail,
  calcQuantileListPosition,
  hasSufficientData,
} from './UtilQuantile'


/*
 * calcQuantileDetail()
 */
test('calcQuantileDetail() count is 6 then long', () => {
  expect(calcQuantileDetail({ count: 6 }).length).toEqual(9)
})
test('calcQuantileDetail() count is 5 then short', () => {
  expect(calcQuantileDetail({ count: 5 }).length).toEqual(3)
})


/*
 * hasSufficientData()
 */
test('hasSufficientData() false so doesnt build without quantile', () => {
  expect(hasSufficientData({ quantile: false })).toEqual(false)
})
test('hasSufficientData() false so doesnt build without quantile length over 0', () => {
  expect(hasSufficientData({ quantile: [] })).toEqual(false)
})
test('hasSufficientData() false so doesnt build without count over 2', () => {
  expect(hasSufficientData({ count: 2, quantile: [1] })).toEqual(false)
})
test('hasSufficientData() true if its good', () => {
  expect(hasSufficientData({ count: 3, quantile: [1] })).toEqual(true)
})


/*
 * calcQuantileListPosition()
 */
test('calcQuantileListPosition() returns null if count is less than 2 even with an array', () => {
  expect(calcQuantileListPosition({ count: 2, quantile: [1, 3] })).toEqual(null)
})
test('calcQuantileListPosition() returns short list at insufficient + 1', () => {
  expect(calcQuantileListPosition(
    {
      count: 3,
      quantile: [1, 3, 5],
    }
  )).toEqual([
    {
      left: 0.277778,
      numberTop: 0,
      val: 1,
    }, {
      left: 0.833333,
      numberTop: 4,
      val: 3,
    }, {
      left: 1.38889,
      numberTop: 8,
      val: 5,
    }
  ])
})
test('calcQuantileListPosition() returns short list at detail threshold', () => {
  expect(calcQuantileListPosition(
    {
      count: QUANTILE_DETAIL_THRESHOLD,
      quantile: [1, 2, 3, 5, 7, 13, 17, 19, 23],
    }
  )).toEqual([
    {
      left: 0.277778,
      numberTop: 0,
      val: 1,
    }, {
      left: 0.555556,
      numberTop: 4,
      val: 2,
    }, {
      left: 0.833333,
      numberTop: 8,
      val: 3,
    }
  ])
})
test('calcQuantileListPosition() returns long list at detail threshold + 1', () => {
  expect(calcQuantileListPosition(
    {
      count: QUANTILE_DETAIL_THRESHOLD + 1,
      quantile: [1, 2, 3, 5, 7, 13, 17, 19, 23],
    }
  )).toEqual([
    {
      left: 0.277778,
      numberTop: 0,
      val: 1,
    }, {
      left: 0.555556,
      numberTop: 4,
      val: 2,
    }, {
      left: 0.833333,
      numberTop: 8,
      val: 3,
    }, {
      left: 1.38889,
      numberTop: 12,
      val: 5,
    }, {
      left: 1.94444,
      numberTop: 16,
      val: 7,
    }, {
      left: 3.61111,
      numberTop: 20,
      val: 13,
    }, {
      left: 4.72222,
      numberTop: 24,
      val: 17,
    }, {
      left: 5.27778,
      numberTop: 28,
      val: 19,
    }, {
      left: 6.38889,
      numberTop: 32,
      val: 23,
    },
  ])
})