

function calcX({ a, r }) {
  return r * Math.sin(a) + (SVG_SCALE_RADIUS)
}

function calcY({ a, r }) {
  return SVG_SCALE - (r * Math.cos(a) + (SVG_SCALE_RADIUS))
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
  const r = (SVG_SCALE_RADIUS * 1.5)

  return valList.map((val, i) => {
    const a = angle * i
    return [calcXY({ a, r }), calcXY({ a, r: r / 1.64 })]
  })
}

export function calcCircleRadius({
  multiplier = OUTCOME_MULTIPLIER,
  value,
  zoom = 1
}) {
  return OUTCOME_START + value
  *
  multiplier
  *
  zoom
}

export function calcRadiusOfSelectedPoint({ zoom }) {
  return numberPrecision({
    n: Math.max(
        2
        *
        zoom
        /
        6,
      MINIMUM_SELECTED_RADIUS
    ),
    lessPrecise: 3,
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