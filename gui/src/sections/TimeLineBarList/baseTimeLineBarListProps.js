import { map, pipe, toPairs } from 'ramda'

import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { TimeLineBarDataToneSet } from 'example-data/TimeLineBar.example-data'

function baseTimeLineBarListProps({ testContext = 'automated' } = {}) {
  const statDataList = pipe(
    toPairs,
    map(([k, { barData }]) => ({ [k]: barData })),
  )(
    testContext === 'automated'
      ? {
        good: TimeLineBarDataToneSet.good,
        notGood: TimeLineBarDataToneSet.notGood,
        neutral: TimeLineBarDataToneSet.neutral,
      }
      : TimeLineBarDataToneSet
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

export default baseTimeLineBarListProps
