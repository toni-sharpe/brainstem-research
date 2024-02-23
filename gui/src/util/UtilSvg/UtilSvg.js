import { numberPrecision } from 'util/Util/Util'
import {
  OUTCOME_MULTIPLIER,
  OUTCOME_START,
  SVG_SCALE,
  SVG_SCALE_RADIUS,
} from 'util/Constant/BaseConstantList'

function calcX({
  a,
  r,
  scaleR = SVG_SCALE_RADIUS,
  scale = SVG_SCALE,
}) {
  return r * Math.sin(a) + scaleR
}

function calcY({
  a,
  r,
  scaleR = SVG_SCALE_RADIUS,
  scale = SVG_SCALE,
}) {
  return scale - (r * Math.cos(a) + scaleR)
}

function calcXY({ a, r, scale, scaleR }) {
  return [
    numberPrecision({ n: calcX({ a, r, scale, scaleR }) }),
    numberPrecision({ n: calcY({ a, r, scale, scaleR }) }),
  ]
}

export function calcAngleInRadians({ valList }) {
  return numberPrecision({ n: (360 / valList.length * (Math.PI / 180)) })
}

export function calcBaseLineCoordList({
  angle,
  scale = SVG_SCALE,
  scaleToLabelRatio = 1.64,
  scaleR = SVG_SCALE_RADIUS,
  valList
}) {
  const r = scaleR * 1.5

  return valList.map((val, i) => {
    const a = angle * i
    return [
      calcXY({ a, r, scale, scaleR }),
      calcXY({ a, r: r / scaleToLabelRatio, scale, scaleR })
    ]
  })
}

export function calcCircleRadius({
  multiplier = OUTCOME_MULTIPLIER,
  outcomeStart = OUTCOME_START,
  value,
  zoom = 1
}) {
  return outcomeStart + value
  *
  multiplier
  *
  zoom
}

export function calcPolygonCoordList({
   angle,
   max,
   radiusUnit,
   scale,
   scaleR,
   valList
}) {
  return valList.map((val, i) => {
    const r = val * radiusUnit
    const a = angle * i
    return calcXY({ a, r, scale, scaleR })
  })
}

export function calcPolygonCoordString({ coordList }) {
  const mappedList = coordList.map(([x, y]) => `${x},${y}`)
  return `${mappedList.join(' ')} ${coordList[0][0]},${coordList[0][1]}`
}
