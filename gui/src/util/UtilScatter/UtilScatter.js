import { toPairs } from 'ramda'

import { PRECISION, SCATTER_SCALE_HIGHLIGHT, SCATTER_SVG_SCALE } from 'util/Constant/BaseConstantList'
import { calcMaxBasedDisplay } from 'util/Util/UtilScaleGranularity'
import { calcMostMaxOfAllTheThings } from 'util/Util/UtilMaxThing'

export function calcScatterScale({ pointList }) {
  const pointToThingList = toPairs(pointList)
  const max = calcMostMaxOfAllTheThings({
    theThingList: pointToThingList
  })
  console.log(max, 'MAX')
  const squ = SCATTER_SVG_SCALE
  const { show } = calcMaxBasedDisplay({ max })
  const plotStepSize = Number((squ / max).toPrecision(PRECISION))
  const scatterGuideLine = plotStepSize * show

  return {
    h: SCATTER_SCALE_HIGHLIGHT,
    plotStepSize,
    scatterGuideLine,
    show,
    squ,
  }
}

export function calcStroke({ h, i }) {
  return isHighlightLine({ h, i })
    ? '#80c0fc'
    : '#eee'
}

export function isHighlightLine({ h, i }) {
  return i % h === 0
}
