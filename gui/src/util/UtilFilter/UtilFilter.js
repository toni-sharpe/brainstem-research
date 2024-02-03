import * as ramda from 'ramda'

import { SEVERE_KEYS, NON_SEVERE_KEYS } from 'util/Constant/BaseConstantList'

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


