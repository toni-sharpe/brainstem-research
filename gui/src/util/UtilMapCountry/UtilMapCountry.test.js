import {
  calcMapPolygonCoordGroup,
  calcZoomC,
  isCountryCircle,
} from './UtilMapCountry'

test('isCountryCircle() [1, 1], yes it is', () => {
  expect(isCountryCircle({ borderCoordList: [[1,1], [1,2], [2,2], [2,1]], countryName: 'Test' })).toEqual(true)
})
test('isCountryCircle() [1, 2], no it is not', () => {
  expect(isCountryCircle({ borderCoordList: [[1,1], [1,3], [3,3], [3,1]], countryName: 'Test' })).toEqual(false)
})
test('isCountryCircle() [2, 1], no it is not', () => {
  expect(isCountryCircle({ borderCoordList: [[1,1], [3,2], [3,2], [2,1]], countryName: 'Test' })).toEqual(false)
})
test('isCountryCircle() [10, 10], no it is not', () => {
  expect(isCountryCircle({ borderCoordList: [[1,1], [1,10], [10,10], [10,1]], countryName: 'Test' })).toEqual(false)
})
test('isCountryCircle() [1, 1], BUT its on the no circle list therefore it is not', () => {
  expect(isCountryCircle({ borderCoordList: [[1,1], [1,2], [2,2], [2,1]], countryName: 'Oman' })).toEqual(false)
})


const countryCenter = { x: 11, y: 13 }

test('calcMapPolygonCoordGroup() where c is the last element', () => {
  const c = { x: 1, y: 1 }
  const subBorder = [[0, 1], { c }]
  expect(calcMapPolygonCoordGroup({ countryCenter, subBorder })).toEqual({ borderCoordList: [[0, 1]], countryC: c })
})
test('calcMapPolygonCoordGroup() where c is not the last element and we need the provided center', () => {
  const subBorder = [[0, 1], [5, 7]]
  expect(calcMapPolygonCoordGroup({ countryCenter, subBorder })).toEqual({ borderCoordList: subBorder, countryC: countryCenter })
})


test('calcZoomC() with no x is null', () => {
  expect(calcZoomC({ c: { y: 1 }, zoom: 1 })).toEqual(null)
})
test('calcZoomC() with no y is null', () => {
  expect(calcZoomC({ c: { x: 1 }, zoom: 1 })).toEqual(null)
})
test('calcZoomC() with zoom 1 returns c', () => {
  expect(calcZoomC({ c: { x: 1, y: 2 }, zoom: 1 })).toEqual({ x: 1, y: 2 })
})
test('calcZoomC() with zoom over 1 returns c multiplied', () => {
  expect(calcZoomC({ c: { x: 1, y: 2 }, zoom: 3 })).toEqual({ x: 3, y: 6 })
})
test('calcZoomC() with fractional zoom returns fractional c', () => {
  expect(calcZoomC({ c: { x: 1, y: 2 }, zoom: 0.2 })).toEqual({ x: 0.2, y: 0.4 })
})
