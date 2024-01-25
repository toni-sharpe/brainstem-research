import i18next from 'util/i18next/i18next'
import { filter, map, pipe, toPairs, type } from 'ramda'

import { throwError } from 'util/UtilError/UtilError'
import { getStatBase, fullStatBase } from 'util/UtilGanttBarList/UtilGanttBarList'
import { groupByResponse, calcValsForGrouping } from 'util/UtilDynamicGrouping/UtilGanttDynamicGrouping'


export function calcInteractiveGantt({ currentGroupBy, currentResponse, data }) {
  throwError({
    check:
      type(data) === 'Array'
      &&
      type(currentGroupBy) === 'String'
      &&
      type(currentResponse) === 'String',
    i18nKey: 'calcInteractiveTimeBarArgs',
  })

  return pipe(
    groupByResponse({ currentGroupBy, currentResponse }),
    map(userChoiceGroupedStatMapper({ currentResponse, currentGroupBy })),
    filter(statSet => toPairs(statSet)[0][1].count > 0)
  )(data)
}


export function userChoiceGroupedStatMapper({ currentResponse, currentGroupBy }) {
  throwError({
    check: type(currentResponse) === 'String',
    i18nKey: 'userChoiceStatMapper',
  })

  const clinicalPrefix = i18next.t(`CommonClinicalResponses.${currentGroupBy}`)

  return ([k, data]) => {
    const vals = calcValsForGrouping({ currentResponse, data })
    const count = vals.length
    const statBase = getStatBase({ count, vals })

    const mappedStatList = fullStatBase({
      count,
      vals,
      statBase,
      k,
      tone: null,
    })

    mappedStatList[k].label = `${clinicalPrefix} [@${k}]`

    return mappedStatList
  }
}
