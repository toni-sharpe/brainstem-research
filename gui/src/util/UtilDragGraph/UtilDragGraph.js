import {
  DRAG_GRAPH_SVG_SCALE,
  DRAG_GRAPH_SVG_SCALE_RADIUS,
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
  const r = (DRAG_GRAPH_SVG_SCALE_RADIUS * 0.94)

  return valList.map((val, i) => {
    const a = angle * i
    return calcXY({ a, r })
  })
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
  return numberPrecision({ n: ((DRAG_GRAPH_SVG_SCALE_RADIUS * 0.84) / max) })
}

export function calcScaleRadiusList({ max }) {
  const { highlight, show } = calcMaxBasedDisplay({ max })
  const scaleUnit = highlight || (show && show !== true) || 1
  const radiusUnit = calcRadiusUnit({ max })
  const scaleRadiusList = []

  let x = scaleUnit

  for (; x <= max; x = x + scaleUnit) {
    scaleRadiusList.push(numberPrecision({ n: x * radiusUnit }))
  }

  return {
    scaleRadiusList,
    scaleUnit,
    outerScale: x - scaleUnit,
  }
}
