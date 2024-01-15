import { CURRENT_FILTER_LIST, FILTER_TOTAL } from 'util/Constant/FilterConstantList'

import {
  calcFilterList,
  isAnyFilterSet,
  showBasedOnFatalFilter,
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
 * showBasedOnFatalFilter()
 */
test('showBasedOnFatalFilter() - both false', () => {
  const currentFilterList = { fatal: false, nonFatal: false }
  expect(showBasedOnFatalFilter({ currentFilterList, k: '_' })).toBeTruthy()
})

test('showBasedOnFatalFilter() - neither set', () => {
  const currentFilterList = {  }
  expect(showBasedOnFatalFilter({ currentFilterList, k: '_' })).toBeTruthy()
})

test('showBasedOnFatalFilter() - fatal key and fatal set', () => {
  const currentFilterList = { fatal: true }
  expect(showBasedOnFatalFilter({ currentFilterList, k: 'death_response_1' })).toBeTruthy()
})

test('showBasedOnFatalFilter() - fatal key and fatal not set', () => {
  const currentFilterList = { fatal: false, nonFatal: true }
  expect(showBasedOnFatalFilter({ currentFilterList, k: 'death_response_1' })).toBeFalsy()
})

test('showBasedOnFatalFilter() - non-fatal key and non-fatal set', () => {
  const currentFilterList = { nonFatal: true }
  expect(showBasedOnFatalFilter({ currentFilterList, k: 'good' })).toBeTruthy()

})

test('showBasedOnFatalFilter() - non-fatal key and non-fatal not set', () => {
  const currentFilterList = { nonFatal: false, fatal: true }
  expect(showBasedOnFatalFilter({ currentFilterList, k: 'good' })).toBeFalsy()
})
