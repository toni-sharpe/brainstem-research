import i18next from 'util/i18next/i18next'
import { toPairs } from 'ramda'
import {
  mean,
  median,
  quantile,
  sampleSkewness,
  standardDeviation,
  medianAbsoluteDeviation,
} from 'simple-statistics'

import { PRECISION, QUANTILE_LIST } from 'util/Constant/BaseConstantList'
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
  return {
    max: count > 0 ? Math.max(...vals) : 0,
    min: count > 0 ? Math.min(...vals) : 0,
    mean: count > 0 ? Number(mean(vals).toPrecision(PRECISION)) : 0,
    median: count > 0 ? Number(median(vals).toPrecision(PRECISION)) : 0,
  }
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
      std: count > 1 ? Number(standardDeviation(vals).toPrecision(PRECISION)) : 0,
      skewness: count > 2 ? Number(sampleSkewness(vals).toPrecision(PRECISION)) : 0,
      tone,
    }
  })
}


export function mapToGanttBars({ data, i18nBase }) {
  throwError({ check: data?.length >= 1 && i18nBase, i18nKey: 'mapToGanttBars' })
  const k = data[0]
  const tone = data[1].tone

  return vals => {
    const count = vals.length
    const statBase = getStatBase({ count, vals })
    return fullStatBase({ count, i18nBase, k, statBase, tone, vals })
  }
}
