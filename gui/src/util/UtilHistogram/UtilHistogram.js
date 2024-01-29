import { calcHue } from 'util/Util/UtilHue'
import { numberPrecision } from 'util/Util/Util'

import {
  HISTOGRAM_BAR_LIST_COUNT,
  HISTOGRAM_BAR_LIST_MARGIN,
  HISTOGRAM_BAR_WIDTH,
  CONTRAST_TOGGLE_MINIMUM,
  HISTORGRAM_HEIGHT,
} from 'util/Constant/BaseConstantList'
import { theThingListErrorCheck } from 'util/Util/UtilMaxThing'


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
  const graphBlockLength = theThingListErrorCheck({
    callingFn: 'calcHistogramWidth',
    theThingList: histogramBarGroupList,
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


export function calcHistogramBarHue({
  useHueContrastToggle = true,
  useHueWheel = true,
} = {}) {
  if (!useHueWheel) {
    return null
  }

  return function({ i, total, aLevel = 1 }) {
    const hueCalced = calcHue({ i, total })
    const contractToggleCalced = calcContrastToggle({ i, total, useHueContrastToggle })

    const hue = numberPrecision({
      n: hueCalced + contractToggleCalced,
      lessPrecise: 2,
    })
    const hueCircled = hue > 360 ? hue % 360 : hue
    return `hsla(${hueCircled} 80% 50% / ${aLevel})`
  }
}
