import * as ramda from 'ramda'

import { FATAL_KEYS, NON_FATAL_KEYS } from 'util/Constant/FilterConstantList'

import {
  confirmedActorFilter,
  removeDubiousFilter,
  fatalFilter,
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
    ramda.filter(fatalFilter({ currentFilterList })),
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


export function showBasedOnFatalFilter({ currentFilterList, k }) {
  if (!currentFilterList.fatal && !currentFilterList.nonFatal) {
    return true
  }
  if (FATAL_KEYS.includes(k) && !currentFilterList.fatal) {
    return false
  }
  if (NON_FATAL_KEYS.includes(k) && !currentFilterList.nonFatal) {
    return false
  }
  return true
}
