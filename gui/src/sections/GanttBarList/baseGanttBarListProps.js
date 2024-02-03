import { map, pipe, toPairs } from 'ramda'

import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'
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
    currentFilterList: ORDERED_FILTERS,
    maxOfAll: 180,
    scale: {
      stepDivision: 60,
      totalSteps: 4,
    },
    statDataList,
  }
}

export default baseGanttBarListProps
