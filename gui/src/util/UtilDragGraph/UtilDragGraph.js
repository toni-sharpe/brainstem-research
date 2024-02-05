import {
  DRAG_GRAPH_SVG_SCALE,
  DRAG_GRAPH_SVG_SCALE_RADIUS,
  DRAG_GRAPH_OUTCOME_START,
  DRAG_GRAPH_OUTCOME_MULTIPLIER,
} from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'
import { calcMaxBasedDisplay } from 'util/Util/UtilScaleGranularity'

function calcX({ a, r }) {
  return r * Math.sin(a) + (DRAG_GRAPH_SVG_SCALE_RADIUS)
}

function calcY({ a, r }) {
  return DRAG_GRAPH_SVG_SCALE - (r * Math.cos(a) + (DRAG_GRAPH_SVG_SCALE_RADIUS))
}

function calcXY({ a, r }) {
  return [
    numberPrecision({ n: calcX({ a, r }) }),
    numberPrecision({ n: calcY({ a, r }) }),
  ]
}

export function calcAngleInRadians({ valList }) {
  return numberPrecision({ n: (360 / valList.length * (Math.PI / 180)) })
}

export function calcBaseLineCoordList({ angle, valList }) {
  const r = (DRAG_GRAPH_SVG_SCALE_RADIUS * 2)

  return valList.map((val, i) => {
    const a = angle * i
    return calcXY({ a, r })
  })
}

export function calcCircleRadius({
  multiplier = DRAG_GRAPH_OUTCOME_MULTIPLIER,
  value,
  zoom = 1
}) {
  return DRAG_GRAPH_OUTCOME_START + value
  *
  multiplier
  *
  zoom
}

export function calcPolygonCoordList({ angle, max, radiusUnit, valList }) {
  return valList.map((val, i) => {
    const r = val * radiusUnit
    const a = angle * i
    return calcXY({ a, r })
  })
}

export function calcPolygonCoordString({ coordList }) {
  const mappedList = coordList.map(([x, y]) => `${x},${y}`)
  return `${mappedList.join(' ')} ${coordList[0][0]},${coordList[0][1]}`
}

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
