import i18next from 'util/i18next/i18next'
import { map, pipe, fromPairs, toPairs } from 'ramda'
import {
  min,
  max,
  mean,
  median,
  quantile,
  sampleSkewness,
  standardDeviation,
  medianAbsoluteDeviation,
} from 'simple-statistics'

import { QUANTILE_LIST } from 'util/Constant/BaseConstantList'
import { throwError } from 'util/Util/Util'


export function calcScale({ statDataList = [] } = {}) {
  const maxOfAll = statDataList.reduce((acc, curr) => {
    const currMax = toPairs(curr)[0][1].max
    return acc > currMax ? acc : currMax
  }, 0)

  return {
    maxOfAll,
    scale: {
      totalSteps: 4,
      stepDivision: parseInt((maxOfAll / 3).toFixed(0), 10)
    }
  }
}


export function getStatBase({
  count = 0,
  vals = [],
}) {
  const statFns = [max, min, mean, median]
  return pipe(
    map(stFn => ([
      stFn.name,
      count > 0
        ? stFn(vals)
        : 0
    ])),
    fromPairs
  )(statFns)
}


export function fullStatBase({
  count = 0,
  i18nBase = null,
  k,
  statBase = {},
  tone = 'neutral',
  vals = []
}) {
  throwError({ check: k, i18nKey: 'fullStatBase' })
  return ({
    [k]: {
      ...statBase,
      count,
      label: i18nBase ? i18next.t(`${i18nBase}.${k}`) : k,
      quantile: count > 0 ? quantile(vals, QUANTILE_LIST) : null,
      mda: count > 1 ? medianAbsoluteDeviation(vals) : 0,
      std: count > 1 ? standardDeviation(vals).toFixed(6) : 0,
      skewness: count > 2 ? sampleSkewness(vals).toFixed(6) : 0,
      tone,
    }
  })
}


export function mapToTimeLineBars({ data, i18nBase }) {
  throwError({ check: data?.length >= 1 && i18nBase, i18nKey: 'mapToTimeLineBars' })
  const k = data[0]
  const tone = data[1].tone

  return vals => {
    const count = vals.length
    const statBase = getStatBase({ count, vals })
    return fullStatBase({ count, i18nBase, k, statBase, tone, vals })
  }
}
