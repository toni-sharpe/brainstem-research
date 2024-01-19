function calcX({ a, r }) {
  return r * Math.sin(a) + 50
}

function calcY({ a, r }) {
  return 100 - (r * Math.cos(a) + 50)
}

function calcXY({ a, r }) {
  return [
    Number(calcX({ a, r }).toPrecision(6)),
    Number(calcY({ a, r }).toPrecision(6)),
  ]
}

export function calcAngleInRadians({ valList }) {
  return Number((360 / valList.length * (Math.PI / 180)).toPrecision(6))
}

export function calcBaseLineCoordList({ angle, valList }) {
  const r = 48

  return valList.map((val, i) => {
    const a = angle * i
    return calcXY({ a, r })
  })
}

export function calcPolygonCoordList({ angle, valList }) {
  const max = Math.max(...valList)
  const radiusUnit = Number((42 / max).toPrecision(6))

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
