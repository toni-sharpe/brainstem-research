import {
  QUANTILE_DETAIL_THRESHOLD,
  QUANTILE_LIST_LONG,
  QUANTILE_LIST_SHORT,
  SCALE_DEFAULT,
} from 'util/Constant/BaseConstantList'

import { calcLeft } from './UtilTimeLineBar'


export function hasSufficientData({
  quantile,
  count,
}) {
  if (!quantile || quantile?.length === 0) {
    return false
  }
  if (count <= 2) {
    return false
  }
  return true
}


export function calcQuantileDetail({ count }) {
  return count > QUANTILE_DETAIL_THRESHOLD
    ? QUANTILE_LIST_LONG
    : QUANTILE_LIST_SHORT
}


export function calcQuantileListPos({
  count,
  quantile,
  scale = SCALE_DEFAULT,
}) {
  if (!hasSufficientData({ count, quantile })) {
    return null
  }

  const quantileList = calcQuantileDetail({ count })

  return quantileList.map((_, i) => {
    const val = Math.round(quantile[i])
    return ({
      val,
      leftPos: calcLeft({ scale, val }),
      numberTop: (i - 1) * 4 + 4,
    })
  })
}
