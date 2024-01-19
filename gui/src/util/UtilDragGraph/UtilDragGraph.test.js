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
    [250,15],
    [473.498, 177.382],
    [388.128,440.12],
    [111.869,440.118],
    [26.5026,177.378],
  ])
})
test('calcPolygonCoordList()', () => {
  expect(coordList).toEqual(
  [
    [250,208],
    [329.889,224.043],
    [348.747,385.915],
    [175.938,351.935],
    [50.2789,185.104],
  ])
})
test('calcPolygonCoordString()', () => {
  expect(calcPolygonCoordString({ coordList })).toEqual('250,208 329.889,224.043 348.747,385.915 175.938,351.935 50.2789,185.104 250,208')
})
test('calcScaleRadiusList() - low max', () => {
  expect(calcScaleRadiusList({ max: 4 })).toEqual({
    outerScale: 5,
    scaleRadiusList: [
      52.5,
      105,
      157.5,
      210,
    ],
    scaleUnit: 1,
  })
})
test('calcScaleRadiusList() - max 2', () => {
  expect(calcScaleRadiusList({ max: 2 })).toEqual({
    outerScale: 3,
    scaleRadiusList: [
      105,
      210,
    ],
    scaleUnit: 1,
  })
})
test('calcScaleRadiusList() - high max', () => {
  expect(calcScaleRadiusList({ max: 5000 })).toEqual({
    outerScale: 6000,
    scaleRadiusList: [
      42,
      84,
      126,
      168,
      210,
    ],
    scaleUnit: 1000,
  })
})
