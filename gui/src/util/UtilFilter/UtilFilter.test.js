import { CURRENT_FILTER_LIST, FILTER_TOTAL } from 'util/Constant/FilterConstantList'

import {
  calcFilterList,
  isAnyFilterSet,
  showBasedOnSevereFilter,
} from './UtilFilter'


/*
 * calcFilterList()
 */
test('calcFilterList()', () => {
  expect(calcFilterList({ currentFilterList: {} }).length).toEqual(FILTER_TOTAL)
})


/*
 * isAnyFilterSet()
 */
test('isAnyFilterSet()', () => {
  expect(isAnyFilterSet({ currentFilterList: { ...CURRENT_FILTER_LIST, rmDubious: false } })).toBeFalsy()
  expect(isAnyFilterSet({ currentFilterList: CURRENT_FILTER_LIST })).toBeTruthy()
  expect(isAnyFilterSet({ currentFilterList: { a: true, b: false } })).toBeTruthy()
})


/*
 * showBasedOnSevereFilter()
 */
test('showBasedOnSevereFilter() - both false', () => {
  const currentFilterList = { severe: false, nonSevere: false }
  expect(showBasedOnSevereFilter({ currentFilterList, k: '_' })).toBeTruthy()
})

test('showBasedOnSevereFilter() - neither set', () => {
  const currentFilterList = {  }
  expect(showBasedOnSevereFilter({ currentFilterList, k: '_' })).toBeTruthy()
})

test('showBasedOnSevereFilter() - severe key and severe set', () => {
  const currentFilterList = { severe: true }
  expect(showBasedOnSevereFilter({ currentFilterList, k: 'death_response_1' })).toBeTruthy()
})

test('showBasedOnSevereFilter() - severe key and severe not set', () => {
  const currentFilterList = { severe: false, nonSevere: true }
  expect(showBasedOnSevereFilter({ currentFilterList, k: 'death_response_1' })).toBeFalsy()
})

test('showBasedOnSevereFilter() - non-severe key and non-severe set', () => {
  const currentFilterList = { nonSevere: true }
  expect(showBasedOnSevereFilter({ currentFilterList, k: 'good' })).toBeTruthy()

})

test('showBasedOnSevereFilter() - non-severe key and non-severe not set', () => {
  const currentFilterList = { nonSevere: false, severe: true }
  expect(showBasedOnSevereFilter({ currentFilterList, k: 'good' })).toBeFalsy()
})
