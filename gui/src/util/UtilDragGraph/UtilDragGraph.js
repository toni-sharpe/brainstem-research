import {
  SVG_COORD_PRECISION,
  SVG_SCALE,
  SVG_SCALE_RADIUS,
} from 'util/Constant/BaseConstantList'
import { calcMaxBasedDisplay } from 'util/Util/UtilScaleGranularity'

function calcX({ a, r }) {
  return r * Math.sin(a) + (SVG_SCALE_RADIUS)
}

function calcY({ a, r }) {
  return SVG_SCALE - (r * Math.cos(a) + (SVG_SCALE_RADIUS))
}

function calcXY({ a, r }) {
  return [
    graphPrecision({ val: calcX({ a, r }) }),
    graphPrecision({ val: calcY({ a, r }) }),
  ]
}

function graphPrecision({ val }) {
  return Number(val.toPrecision(SVG_COORD_PRECISION))
}

export function calcAngleInRadians({ valList }) {
  return graphPrecision({ val: (360 / valList.length * (Math.PI / 180)) })
}

export function calcBaseLineCoordList({ angle, valList }) {
  const r = (SVG_SCALE_RADIUS * 0.94)

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
  return graphPrecision({ val: ((SVG_SCALE_RADIUS * 0.84) / max) })
}

export function calcScaleRadiusList({ max }) {
  const { highlight, show } = calcMaxBasedDisplay({ max })
  const scaleUnit = highlight || (show && show !== true) || 1
  const radiusUnit = calcRadiusUnit({ max })
  const scaleRadiusList = []

  let x = scaleUnit

  for (; x <= max; x = x + scaleUnit) {
    scaleRadiusList.push(graphPrecision({ val: x * radiusUnit }))
  }

  return {
    scaleRadiusList,
    scaleUnit,
    outerScale: x,
  }
}
