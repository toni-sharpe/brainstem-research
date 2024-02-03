import { filter, pluck, pipe, type } from 'ramda'

import { throwError } from 'util/UtilError/UtilError'
import { GENERAL_RESPONSE_MAP } from 'util/Constant/FullDataPointList'
import { mapToGanttBars } from 'util/UtilGanttBarList/UtilGanttBarList'

export const SEVERE_KEYS = [
  'fatal_symptom_1',
  'fatal_symptom_2',
  'time_of_death',
  'death_response_1',
  'slight_death_response_1',
  'death_response_2',
  'slight_death_response_2',
  'web_test_key__SB1',
  'veryBad',
]

export const NON_SEVERE_KEYS = [
  'pathogenesis_duration',
  'recovery_duration',
  'web_test_key__SB2',
  'good',
]

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


export function calcPathogenesisGantt({ currentFilterList = [], data }) {
  throwError({
    check: type(data) === 'Array',
    i18nKey: 'generalResponseTimeBarDataIsArray',
  })

  return GENERAL_RESPONSE_MAP.map(([k, barData]) => {
    return pipe(
      pluck(k),
      filter(Boolean),
      filter(statSet => showBasedOnSevereFilter({ currentFilterList, k })),
      mapToGanttBars({ data: [k, barData], i18nBase: 'CommonClinicalResponses' }),
    )(data)
  })
}
