import { filter, map, pipe, pluck, type } from 'ramda'
import { median, medianAbsoluteDeviation } from 'simple-statistics'

import { throwError } from 'util/UtilError/UtilError'
import { groupByProvidedGroupList, pathogenesisToGroupMapper } from 'util/UtilDynamicGrouping/UtilHistogramDynamicGrouping'

export function calcHistogramBarGroupList({
  currentBarFn,
  currentGroupBy,
  currentPathogenesisStepList,
  data,
}) {
  throwError({
    check: type(currentGroupBy) === 'String',
    i18nKey: 'calcHistogramBarGroupListGroupBy'
  })
  throwError({
    check: type(currentPathogenesisStepList) === 'Array' && currentPathogenesisStepList?.length > 0,
    i18nKey: 'calcHistogramBarGroupListPathogenesisStepList'
  })

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
  count: ({ pathogenesisStepData }) => pathogenesisStepData.length,
  min: ({ pathogenesisStepData }) => Math.min(...pathogenesisStepData),
  max: ({ pathogenesisStepData }) => Math.max(...pathogenesisStepData),
  range: ({ pathogenesisStepData }) => ([Math.min(...pathogenesisStepData), Math.max(...pathogenesisStepData)]),
  ave: ({ pathogenesisStepData }) => {
    return pathogenesisStepData?.length > 0
      ? median(pathogenesisStepData)
      : 0
  },
  mda: ({ pathogenesisStepData }) => {
    const dev = pathogenesisStepData?.length > 1
      ? medianAbsoluteDeviation(pathogenesisStepData)
      : 0
    const mdn = median(pathogenesisStepData)
    return [mdn - dev, mdn, mdn + dev]
  }
}
