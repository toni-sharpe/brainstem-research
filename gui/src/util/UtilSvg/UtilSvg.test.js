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
       -500,
      ],
      [
        250,
       -207.317,
      ],
    ],
    [
      [
        963.293,
         18.2394,
      ],
      [
        684.935,
        108.683,
      ],
    ],
    [
      [
        690.835,
        856.765,
      ],
      [
        518.802,
        619.979,
      ],
    ],
    [
      [
       -190.844,
        856.759,
      ],
      [
       -18.8075,
        619.975,
      ],
    ],
    [
      [
        -463.29,
        18.2289,
      ],
      [
       -184.933,
        108.676,
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
