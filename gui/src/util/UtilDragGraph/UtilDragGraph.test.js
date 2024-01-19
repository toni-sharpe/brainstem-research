import {
  calcAngleInRadians,
  calcBaseLineCoordList,
  calcPolygonCoordList,
  calcPolygonCoordString,
} from './UtilDragGraph'

const valList = [1, 2, 4, 3, 5]
const angle = calcAngleInRadians({ valList })
const coordList = calcPolygonCoordList({ angle, valList })

test('calcAngleInRadians()', () => {
  expect(angle).toEqual(1.25664)
})
test('calcBaseLineCoordList()', () => {
  expect(calcBaseLineCoordList({ angle, valList })).toEqual(
  [
    [50,2],
    [95.6508,35.1673],
    [78.2135,88.833],
    [21.786,88.8326],
    [4.34946,35.1666],
  ])
})
test('calcPolygonCoordList()', () => {
  expect(coordList).toEqual(
  [
    [50,41.6],
    [65.9778,44.8086],
    [69.7494,77.1831],
    [35.1876,70.3871],
    [10.0558,37.0208],
  ])
})
test('calcPolygonCoordString()', () => {
  expect(calcPolygonCoordString({ coordList })).toEqual('50,41.6 65.9778,44.8086 69.7494,77.1831 35.1876,70.3871 10.0558,37.0208 50,41.6')
})
