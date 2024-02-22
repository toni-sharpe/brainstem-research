import { isCountryCircle } from './UtilMapCountry'

test('isCountryCircle() [1, 1], yes it is', () => {
  isCountryCircle({ borderCoordList: [[[1,1], [1,2], [2,2], [2,1]]], countryName: 'Test' })
})
test('isCountryCircle() [1, 2], no it is not', () => {
  isCountryCircle({ borderCoordList: [[[1,1], [1,3], [3,3], [3,1]]], countryName: 'Test' })
})
test('isCountryCircle() [2, 1], no it is not', () => {
  isCountryCircle({ borderCoordList: [[[1,1], [3,2], [3,2], [2,1]]], countryName: 'Test' })
})
test('isCountryCircle() [2, 2], no it is not', () => {
  isCountryCircle({ borderCoordList: [[[1,1], [1,10], [10,10], [10,1]]], countryName: 'Test' })
})
test('isCountryCircle() [1, 1], BUT its on the no circle list therefore it is not', () => {
  isCountryCircle({ borderCoordList: [[[1,1], [1,2], [2,2], [2,1]]], countryName: 'Oman' })
})
