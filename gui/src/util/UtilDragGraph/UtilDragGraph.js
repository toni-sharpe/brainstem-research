import {
  DRAG_GRAPH_SVG_SCALE_RADIUS,
  DRAG_GRAPH_MINIMUM_SELECTED_RADIUS,
} from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'
import { calcMaxBasedDisplay } from 'util/UtilScale/UtilScaleGranularity'

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

export function calcRadiusOfSelectedPoint({ zoom = 1 }) {
  return numberPrecision({
    n: Math.max(
        2
        *
        zoom
        /
        6,
      DRAG_GRAPH_MINIMUM_SELECTED_RADIUS
    ),
    lessPrecise: 3,
  })
}
