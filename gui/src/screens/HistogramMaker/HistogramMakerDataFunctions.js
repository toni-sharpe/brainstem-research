import { filter, map, pipe, pluck } from 'ramda'
import { median, medianAbsoluteDeviation } from 'simple-statistics'

import { groupByProvidedGroupList, pathogenesisToGroupMapper } from 'util/UtilDynamicGrouping/UtilHistogramDynamicGrouping'

export function calcHistogramBarGroupList({
  currentBarFn,
  currentGroupBy,
  currentPathogenesisStepList,
  data,
}) {
  const allCurrentGroupBy = pipe(
    pluck(currentGroupBy),
    filter(Boolean)
  )(data)

  const maxGroupBy = Math.max(...allCurrentGroupBy)
  const blockFactor = maxGroupBy > 100 ? 70 : 7
  const groupRange = Math.ceil(maxGroupBy / blockFactor) * blockFactor
  const groupSize = groupRange / 7
  let groupList = []
  let builtGroupList = {}
  for (let x = 0; x < groupRange; x = x + groupSize) {
    const builtGroupKey = `${x}-${x + groupSize}`
    groupList.push([x, x + groupSize, builtGroupKey])
    builtGroupList[builtGroupKey] = {}
  }

  return pipe(
    groupByProvidedGroupList({
      builtGroupList,
      currentGroupBy,
      currentPathogenesisStepList,
      groupList,
      maxGroupBy: groupRange,
    }),
    map(pathogenesisToGroupMapper({ dataFn: dataFnList[currentBarFn] })),
  )(data)
}

export const dataFnList = {
  count: ({ pathogenStepData }) => pathogenStepData.length,
  min: ({ pathogenStepData }) => Math.min(...pathogenStepData),
  max: ({ pathogenStepData }) => Math.max(...pathogenStepData),
  range: ({ pathogenStepData }) => ([Math.min(...pathogenStepData), Math.max(...pathogenStepData)]),
  ave: ({ pathogenStepData }) => {
    return pathogenStepData?.length > 0
      ? median(pathogenStepData)
      : 0
  },
  mda: ({ pathogenStepData }) => {
    const dev = pathogenStepData?.length > 1
      ? medianAbsoluteDeviation(pathogenStepData)
      : 0
    const mdn = median(pathogenStepData)
    return [mdn - dev, mdn, mdn + dev]
  }
}
