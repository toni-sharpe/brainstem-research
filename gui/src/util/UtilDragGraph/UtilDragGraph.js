import { DRAG_GRAPH_SVG_SCALE } from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'
import { calcMaxBasedDisplay } from 'util/Util/UtilScaleGranularity'

export const DRAG_GRAPH_SVG_SCALE_RADIUS = DRAG_GRAPH_SVG_SCALE / 2

export function calcRadiusUnit({ max }) {
  return numberPrecision({ n: ((DRAG_GRAPH_SVG_SCALE_RADIUS * 0.79) / max) })
}

export function calcScaleRadiusList({ fullMax, max }) {
  const { highlight, show } = calcMaxBasedDisplay({ max })
  const radiusUnit = calcRadiusUnit({ max })
  const scaleRadiusList = []

  let x = show

  for (; x <= fullMax; x = x + show) {
    scaleRadiusList.push([
      numberPrecision({ n: x * radiusUnit }),
      ['0.00'].includes((numberPrecision({ n: x }) % highlight).toPrecision(3)),
    ])
  }

  return {
    highlight,
    scaleRadiusList,
    scaleUnit: show,
  }
}
