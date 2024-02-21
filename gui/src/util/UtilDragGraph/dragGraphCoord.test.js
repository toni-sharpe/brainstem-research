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
    [
      [
         320,
        -160,
      ],
      [
         320,
          27.3171,
      ],
    ],
    [
      [
        776.508,
        171.673,
      ],
      [
        598.358,
        229.557,
      ],
    ],
    [
      [
        602.135,
        708.33,
      ],
      [
        492.033,
        556.786,
      ],
    ],
    [
      [
        37.8597,
        708.326,
      ],
      [
        147.963,
        556.784,
      ],
    ],
    [
      [
        -136.505,
        171.666,
      ],
      [
        41.6431,
        229.553,
      ],
    ],
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
  expect(calcScaleRadiusList({ fullMax: 4, max: 4 })).toEqual({
    highlight: 5,
    scaleRadiusList: [
      [ 63.2, false],
      [126.4, false],
      [189.6, false],
      [252.8, false],
    ],
    scaleUnit: 1,
  })
})

test('calcScaleRadiusList() - max 2', () => {
  expect(calcScaleRadiusList({ fullMax: 2, max: 2 })).toEqual({
    highlight: 1,
    scaleRadiusList: [
      [ 63.2,  false],
      [126.4,   true],
      [189.6,  false],
      [252.8,   true],
    ],
    scaleUnit: 0.5,
  })
})

test('calcScaleRadiusList() - high max', () => {
  expect(calcScaleRadiusList({ fullMax: 5000, max: 5000 })).toEqual({
    highlight: 1000,
    scaleRadiusList: [
      [ 10.112, false],
      [ 20.224, false],
      [ 30.336, false],
      [ 40.448, false],
      [ 50.56 ,  true],
      [ 60.672, false],
      [ 70.784, false],
      [ 80.896, false],
      [ 91.008, false],
      [101.12 ,  true],
      [111.232, false],
      [121.344, false],
      [131.456, false],
      [141.568, false],
      [151.68 ,  true],
      [161.792, false],
      [171.904, false],
      [182.016, false],
      [192.128, false],
      [202.24 ,  true],
      [212.352, false],
      [222.464, false],
      [232.576, false],
      [242.688, false],
      [252.8  ,  true],
    ],
    scaleUnit: 200,
  })
})
