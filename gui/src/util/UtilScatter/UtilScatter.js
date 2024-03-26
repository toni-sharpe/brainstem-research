import { map, pipe, toPairs, type } from 'ramda'

import {
  SCATTER_SCALE_HIGHLIGHT,
  SCATTER_SCALE_LABEL_OFFSET,
  SCATTER_SVG_SCALE,
} from 'util/Constant/BaseConstantList'
import { calcMaxBasedDisplay } from 'util/UtilScale/UtilScaleGranularity'
import { calcMostMaxOfAllTheThings } from 'util/Util/UtilMaxThing'
import { numberPrecision } from 'util/Util/Util'

export function calcScatterScale({ pointList }) {
  const pointToThingList = pipe(
    toPairs,
    map(([k, { x, y }]) => ([k, { x, y }])),
  )(pointList)
  const max = calcMostMaxOfAllTheThings({
    theThingList: pointToThingList
  })
  const squ = SCATTER_SVG_SCALE + SCATTER_SCALE_LABEL_OFFSET
  const { show } = calcMaxBasedDisplay({ max })
  const plotStepSize = numberPrecision({ n: SCATTER_SVG_SCALE / max })
  const scatterGuideLine = plotStepSize * show

  return {
    plotStepSize,
    rangeTopBound: Math.ceil((squ - SCATTER_SCALE_LABEL_OFFSET) / scatterGuideLine),
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
