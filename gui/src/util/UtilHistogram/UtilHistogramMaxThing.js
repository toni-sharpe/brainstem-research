import { toPairs, type } from 'ramda'

import { TOP_SPACER } from 'util/Constant/BaseConstantList'
import { histogramBarGroupListErrorCheck } from './UtilHistogram'

export function reduceToMaxThing(acc, [_, data]) {
  const mmMAXMapper = (([_, val]) => {
    return type(val) === 'Array'
      ? Math.max(...val)
      : val
  })
  const maybeMostMaxOfAllTheThings = Math.max(
    ...toPairs(data).map(mmMAXMapper)
  )
  return acc > maybeMostMaxOfAllTheThings
    ? acc
    : maybeMostMaxOfAllTheThings
}

export function calcMostMaxOfAllTheThings({ histogramBarGroupList }) {
  histogramBarGroupListErrorCheck({
    callingFn: 'calcMostMaxOfAllTheThings',
    histogramBarGroupList,
  })
  return Math.ceil(
    histogramBarGroupList.reduce(reduceToMaxThing, 0)
    *
    TOP_SPACER // this gives some space at the top of the graph, the x scale extends slightly
  )
}
