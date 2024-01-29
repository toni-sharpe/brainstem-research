import {
  calcAngleInRadians,
  calcBaseLineCoordList,
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
    [250, 65],
    [425.946, 192.832],
    [358.739, 399.669],
    [141.258, 399.667],
    [74.0552, 192.83],
  ])
})

test('calcPolygonCoordList()', () => {
  expect(coordList).toEqual(
  [
    [250, 218],
    [310.868, 230.223],
    [325.236, 353.555],
    [193.572, 327.665],
    [97.8315, 200.555],
  ])
})

test('calcPolygonCoordString()', () => {
  expect(calcPolygonCoordString({ coordList })).toEqual('250,218 310.868,230.223 325.236,353.555 193.572,327.665 97.8315,200.555 250,218')
})

test('calcScaleRadiusList() - low max', () => {
  expect(calcScaleRadiusList({ max: 4 })).toEqual({
    outerScale: 4,
    scaleRadiusList: [
      40,
      80,
     120,
     160,
    ],
    scaleUnit: 1,
  })
})

test('calcScaleRadiusList() - max 2', () => {
  expect(calcScaleRadiusList({ max: 2 })).toEqual({
    outerScale: 2,
    scaleRadiusList: [
       80,
      160,
    ],
    scaleUnit: 1,
  })
})

test('calcScaleRadiusList() - high max', () => {
  expect(calcScaleRadiusList({ max: 5000 })).toEqual({
    outerScale: 5000,
    scaleRadiusList: [
       32,
       64,
       96,
      128,
      160,
    ],
    scaleUnit: 1000,
  })
})
