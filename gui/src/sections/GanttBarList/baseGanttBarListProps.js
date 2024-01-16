import { map, pipe, toPairs } from 'ramda'

import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { GanttBarDataToneSet } from 'example-data/GanttBar.example-data'

function baseGanttBarListProps({ testContext = 'automated' } = {}) {
  const statDataList = pipe(
    toPairs,
    map(([k, { barData }]) => ({ [k]: barData })),
  )(
    testContext === 'automated'
      ? {
        good: GanttBarDataToneSet.good,
        notGood: GanttBarDataToneSet.notGood,
        neutral: GanttBarDataToneSet.neutral,
      }
      : GanttBarDataToneSet
  )

  return {
    currentFilterList: CURRENT_FILTER_LIST,
    maxOfAll: 180,
    scale: {
      stepDivision: 60,
      totalSteps: 4,
    },
    statDataList,
  }
}

export default baseGanttBarListProps
