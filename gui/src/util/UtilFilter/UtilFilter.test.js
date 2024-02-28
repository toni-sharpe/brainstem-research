import { keys } from 'ramda'

import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'

import {
  calcFilterList,
  isAnyFilterSet,
  showBasedOnSevereFilter,
} from './UtilFilter'

const filterTotal = keys(ORDERED_FILTERS).length - 1 // Sev/NSV are the same

/*
 * calcFilterList()
 */
test('calcFilterList()', () => {
  expect(calcFilterList({ currentFilterList: ORDERED_FILTERS }).length).toEqual(filterTotal)
})


/*
 * isAnyFilterSet()
 */
test('isAnyFilterSet()', () => {
  expect(isAnyFilterSet({ currentFilterList: { ...ORDERED_FILTERS, rmDubious: false } })).toEqual(false)
  expect(isAnyFilterSet({ currentFilterList: ORDERED_FILTERS })).toEqual(false)
  expect(isAnyFilterSet({ currentFilterList: { a: true, b: false } })).toEqual(true)
})
