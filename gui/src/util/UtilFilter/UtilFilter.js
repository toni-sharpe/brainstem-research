import * as ramda from 'ramda'

import { SEVERE_KEYS, NON_SEVERE_KEYS } from 'util/Constant/FilterConstantList'

import {
  confirmedActorFilter,
  removeDubiousFilter,
  severeFilter,
  fjpFilter,
  pathologicalEventDurationFilter,
  hardEventOnlyFilter,
  hardPrimeSymptomFilter,
  primeSymptomFilter,
  secondOrMore,
  thirdOrMore,
} from './UtilIndividualFilterList'


export function calcFilterList({ currentFilterList }) {
  return [
    ramda.filter(confirmedActorFilter({ currentFilterList })),
    ramda.filter(removeDubiousFilter({ currentFilterList })),
    ramda.filter(severeFilter({ currentFilterList })),
    ramda.filter(fjpFilter({ currentFilterList })),
    ramda.filter(pathologicalEventDurationFilter({ currentFilterList })),
    ramda.filter(hardEventOnlyFilter({ currentFilterList })),
    ramda.filter(hardPrimeSymptomFilter({ currentFilterList })),
    ramda.filter(primeSymptomFilter({ currentFilterList })),
    ramda.filter(secondOrMore({ currentFilterList })),
    ramda.filter(thirdOrMore({ currentFilterList })),
  ]
}


export function isAnyFilterSet({ currentFilterList }) {
  return ramda.toPairs(currentFilterList).filter(([_, b]) => b).length > 0
}


export function showBasedOnSevereFilter({ currentFilterList, k }) {
  if (!currentFilterList.severe && !currentFilterList.nonSevere) {
    return true
  }
  if (SEVERE_KEYS.includes(k) && !currentFilterList.severe) {
    return false
  }
  if (NON_SEVERE_KEYS.includes(k) && !currentFilterList.nonSevere) {
    return false
  }
  return true
}
