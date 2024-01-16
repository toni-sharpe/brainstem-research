import { type } from 'ramda'
import i18next from 'util/i18next/i18next'

import {
  HISTOGRAM_BAR_LIST_COUNT,
  HISTOGRAM_BAR_LIST_MARGIN,
  HISTOGRAM_BAR_WIDTH,
  CONTRAST_TOGGLE_MINIMUM,
  HISTORGRAM_HEIGHT,
  I18N_ERROR_KEY,
} from 'util/Constant/BaseConstantList'


export function histogramBarGroupListErrorCheck({ histogramBarGroupList, callingFn }) {
  const graphBlockLength = type(histogramBarGroupList) === 'Array' && histogramBarGroupList?.length

  if (graphBlockLength === 0) {
    throw new Error(i18next.t(`${I18N_ERROR_KEY}.graphBlockLengthZero`, { callingFn }))
  }
  if (!graphBlockLength) {
    const i18nExtras = { callingFn, typeOf: type(histogramBarGroupList), val: histogramBarGroupList?.toString() || 'null' }
    throw new Error(i18next.t(`${I18N_ERROR_KEY}.graphBlockLengthInvalid`, i18nExtras))
  }

  return graphBlockLength
}


export function calcHistogramBarHeight({
  blockSize = HISTOGRAM_BAR_WIDTH,
  elems,
}) {
  return (elems?.length || 0) * blockSize
}


export function calcHistogramWidth({
  barCountPerBlock = HISTOGRAM_BAR_LIST_COUNT,
  blockSize = HISTOGRAM_BAR_WIDTH,
  barMargin = HISTOGRAM_BAR_LIST_MARGIN,
  histogramBarGroupList,
}) {
  const graphBlockLength = histogramBarGroupListErrorCheck({
    callingFn: 'calcHistogramWidth',
    histogramBarGroupList,
  })

  return (
    (
      barCountPerBlock
      *
      blockSize
      +
      barMargin
    )
    *
    graphBlockLength
  )
  -
  barMargin
}


export function calcHistogramBarPosition({
  height,
  left,
  top,
  width,
}) {
  return {
    height: height || `${HISTORGRAM_HEIGHT}vh`,
    left: left || 0,
    top: top || 0,
    width: width || 'auto'
  }
}


function calcContrastToggle({ i, total, useHueContrastToggle }) {
  if (!useHueContrastToggle) {
    return 0
  }

  if (total <= CONTRAST_TOGGLE_MINIMUM) {
    return 0
  }

  return (i % 2) * 180
}


function calcHue({ i, total }) {
  return 360
    /
    total
    *
    i
}


export function calcHistogramBarHue({
  useHueContrastToggle = true,
  useHueWheel = true,
} = {}) {
  if (!useHueWheel) {
    return null
  }

  return function({ i, total, aLevel = 1 }) {
    const hue = Number((
      calcHue({ i, total })
      +
      calcContrastToggle({ i, total, useHueContrastToggle })
    ).toPrecision(4))
    const hueCircled = hue > 360 ? hue % 360 : hue
    return `hsla(${hueCircled} 80% 50% / ${aLevel})`
  }
}
