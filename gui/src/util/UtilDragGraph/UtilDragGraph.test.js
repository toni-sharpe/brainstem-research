import {
  DRAG_GRAPH_MINIMUM_SELECTED_RADIUS,
} from 'util/Constant/BaseConstantList'
import { calcRadiusOfSelectedPoint } from 'util/UtilDragGraph/UtilDragGraph'

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
