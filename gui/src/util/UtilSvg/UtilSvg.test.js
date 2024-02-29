import {
  calcAngleInRadians,
  calcBaseLineCoordList,
  calcCircleRadius,
  calcPolygonCoordList,
  calcPolygonCoordString,
  calcRadiusUnit,
  calcScaleRadiusList,
} from './UtilSvg'

import { numberPrecision } from 'util/Util/Util'
import {
  OUTCOME_MULTIPLIER,
  OUTCOME_START,
  SVG_SCALE,
  SVG_SCALE_RADIUS,
} from 'util/Constant/BaseConstantList'

const valList = [1, 2, 4, 3, 5]
const angle = calcAngleInRadians({ valList })
const max = Math.max(...valList)
const radiusUnit = SVG_SCALE_RADIUS
const coordList = calcPolygonCoordList({ angle, max, radiusUnit, valList })

test('calcAngleInRadians()', () => {
  expect(angle).toEqual(1.25664)
})

test('calcBaseLineCoordList()', () => {
  expect(calcBaseLineCoordList({ angle, valList })).toEqual(
  [
    [
      [
         250,
        -125,
      ],
      [
         250,
          21.3415,
      ],
    ],
    [
      [
        606.647,
        134.12,
      ],
      [
        467.467,
        179.341,
      ],
    ],
    [
      [
        470.418,
        553.383,
      ],
      [
        384.401,
        434.989,
      ],
    ],
    [
      [
         29.5779,
        553.379,
      ],
      [
        115.596,
        434.987,
      ],
    ],
    [
      [
       -106.645,
        134.114,
      ],
      [
         32.5336,
        179.338,
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
    [ 250    ,    0     ],
    [ 725.529,    95.4929],
    [ 837.78 , 1059.02  ],
    [-190.844, 856.759 ],
    [-938.816,  -136.285 ],
  ])
})

test('calcPolygonCoordString()', () => {
  expect(calcPolygonCoordString({ coordList })).toEqual('250,0 725.529,95.4929 837.78,1059.02 -190.844,856.759 -938.816,-136.285 250,0')
})
