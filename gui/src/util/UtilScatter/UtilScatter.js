import { toPairs, type } from 'ramda'

import { PRECISION, SCATTER_SCALE_HIGHLIGHT, SCATTER_SVG_SCALE } from 'util/Constant/BaseConstantList'
import { calcMaxBasedDisplay } from 'util/Util/UtilScaleGranularity'
import { calcMostMaxOfAllTheThings } from 'util/Util/UtilMaxThing'

export function calcScatterScale({ pointList }) {
  const pointToThingList = toPairs(pointList)
  const max = calcMostMaxOfAllTheThings({
    theThingList: pointToThingList
  })
  const squ = SCATTER_SVG_SCALE
  const { show } = calcMaxBasedDisplay({ max })
  const plotStepSize = Number((squ / max).toPrecision(PRECISION))
  const scatterGuideLine = plotStepSize * show

  return {
    plotStepSize,
    scatterGuideLine,
    show,
    squ,
  }
}

export function calcStroke({ i }) {
  return type(i) === 'Number' && isHighlightLine({ i })
    ? '#80c0fc'
    : '#eee'
}

export function isHighlightLine({ i }) {
  return type(i) === 'Number' && i % SCATTER_SCALE_HIGHLIGHT === 0
}
