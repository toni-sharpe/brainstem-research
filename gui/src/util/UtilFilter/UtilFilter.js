import * as ramda from 'ramda'

import {
  removeDubiousFilter,
  severeFilter,
  fjpFilter,
  hardEventOnlyFilter,
} from './UtilIndividualFilterList'


export function calcFilterList({ currentFilterList }) {
  return [
    ramda.filter(removeDubiousFilter({ currentFilterList })),
    ramda.filter(severeFilter({ currentFilterList })),
    ramda.filter(fjpFilter({ currentFilterList })),
    ramda.filter(hardEventOnlyFilter({ currentFilterList })),
  ]
}


export function isAnyFilterSet({ currentFilterList }) {
  return ramda.toPairs(currentFilterList).filter(([_, b]) => b).length > 0
}


