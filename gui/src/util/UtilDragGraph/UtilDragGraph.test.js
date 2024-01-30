import {
  calcAngleInRadians,
  calcBaseLineCoordList,
  calcCircleRadius,
  calcPolygonCoordList,
  calcPolygonCoordString,
  calcRadiusUnit,
  calcScaleRadiusList,
} from './UtilDragGraph'

const valList = [1, 2, 4, 3, 5]
const angle = calcAngleInRadians({ valList })
const max = Math.max(...valList)
const radiusUnit = calcRadiusUnit({ max })
const coordList = calcPolygonCoordList({ angle, max, radiusUnit, valList })

test('calcAngleInRadians()', () => {
  expect(angle).toEqual(1.25664)
})

test('calcBaseLineCoordList()', () => {
  expect(calcBaseLineCoordList({ angle, valList })).toEqual(
  [
    [320     ,    35.2  ],
    [590.861 ,   231.993],
    [487.4   ,   550.409],
    [152.597 ,   550.407],
    [ 49.1401,   231.989],
  ])
})

test('calcCircleRadius()', () => {
  expect(calcCircleRadius({ value: 10, zoom: 2 })).toEqual(55)
})

test('calcPolygonCoordList()', () => {
  expect(coordList).toEqual(
  [
    [320     , 269.44 ],
    [416.171 , 288.752],
    [438.873 , 483.616],
    [230.844 , 442.711],
    [ 79.5738, 241.878],
  ])
})

test('calcPolygonCoordString()', () => {
  expect(calcPolygonCoordString({ coordList })).toEqual('320,269.44 416.171,288.752 438.873,483.616 230.844,442.711 79.5738,241.878 320,269.44')
})

test('calcScaleRadiusList() - low max', () => {
  expect(calcScaleRadiusList({ max: 4 })).toEqual({
    outerScale: 4,
    scaleRadiusList: [
       63.2,
      126.4,
      189.6,
      252.8,
    ],
    scaleUnit: 1,
  })
})

test('calcScaleRadiusList() - max 2', () => {
  expect(calcScaleRadiusList({ max: 2 })).toEqual({
    outerScale: 2,
    scaleRadiusList: [
      126.4,
      252.8,
    ],
    scaleUnit: 1,
  })
})

test('calcScaleRadiusList() - high max', () => {
  expect(calcScaleRadiusList({ max: 5000 })).toEqual({
    outerScale: 5000,
    scaleRadiusList: [
       50.56,
      101.12,
      151.68,
      202.24,
      252.8,
    ],
    scaleUnit: 1000,
  })
})
