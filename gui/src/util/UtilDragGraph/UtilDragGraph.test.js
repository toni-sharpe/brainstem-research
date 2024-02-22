import {
  DRAG_GRAPH_MINIMUM_SELECTED_RADIUS,
} from 'util/Constant/BaseConstantList'
import {
  calcScaleRadiusList,
  calcRadiusOfSelectedPoint,
} from 'util/UtilDragGraph/UtilDragGraph'

const testSuffix = `thn the minimum of ${DRAG_GRAPH_MINIMUM_SELECTED_RADIUS}`

test(`calcRadiusOfSelectedPoint() = 6 when the zoom / 6 less ${testSuffix}`, () => {
  expect(calcRadiusOfSelectedPoint({ zoom: 17 })).toEqual(6)
})
test(`calcRadiusOfSelectedPoint() = 6 when the zoom / 6 equal ${testSuffix}`, () => {
  expect(calcRadiusOfSelectedPoint({ zoom: 18 })).toEqual(6)
})
test(`calcRadiusOfSelectedPoint() > 6 when the zoom / 6 > ${testSuffix}`, () => {
  expect(calcRadiusOfSelectedPoint({ zoom: 19 })).toEqual(6.33)
})
test(`calcRadiusOfSelectedPoint() well above`, () => {
  expect(calcRadiusOfSelectedPoint({ zoom: 123 })).toEqual(41)
})
test(`calcRadiusOfSelectedPoint() well below`, () => {
  expect(calcRadiusOfSelectedPoint({ zoom: 1 })).toEqual(6)
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
