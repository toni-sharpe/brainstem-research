import { filter, map, pipe, toPairs, type } from 'ramda'

import { throwError } from 'util/Util/Util'
import { getStatBase, fullStatBase } from 'util/UtilTimeLineBarList/UtilTimeLineBarList'
import { groupByResponse, calcValsForGrouping } from 'util/UtilDynamicGrouping/UtilTimeLineBarDynamicGrouping'


export function calcInteractiveTimeLineBarStatList({ currentGroupBy, currentResponse, data }) {
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
    map(userChoiceGroupedStatMapper({ currentResponse })),
    filter(statSet => toPairs(statSet)[0][1].count > 0)
  )(data)
}


export function userChoiceGroupedStatMapper({ currentResponse }) {
  throwError({
    check: type(currentResponse) === 'String',
    i18nKey: 'userChoiceStatMapper',
  })

  return ([k, data]) => {
    const vals = calcValsForGrouping({ currentResponse, data })
    const count = vals.length
    const statBase = getStatBase({ count, vals })

    return {
      ...fullStatBase({
        count,
        vals,
        statBase,
        k,
        tone: null,
      }),
      label: `${k} ${count}`,
    }
  }
}
