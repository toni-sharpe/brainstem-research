import { onMapCountryClickHandler } from './UtilMapCountry'
import { setJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

jest.mock('util/UtilLocalStorage/UtilLocalStorage', () => ({
  __esModule: true, // this property makes it work
  setJSONLocalStorage: jest.fn(),
}));

test('onMapCountryClickHandler() builds a fn that adds the right stuff in the right places', () => {
  const setCurrentCountryListMock = jest.fn()

  const onClick = onMapCountryClickHandler({
    countryId: 19,
    currentCountryIdList: [13],
    graphKey: 'testKey',
    persisted: { xy: 12 },
    setCurrentCountryList: setCurrentCountryListMock,
  })

  onClick()

  expect(setJSONLocalStorage).toHaveBeenCalledWith({"k": "testKey", "v": { xy: 12, currentCountryIdList: [13, 19] }})
  expect(setCurrentCountryListMock).toHaveBeenCalledWith([13, 19])
})

test('onMapCountryClickHandler() builds a fn that removes a country id that is in there already', () => {
  const setCurrentCountryListMock = jest.fn()

  const onClick = onMapCountryClickHandler({
    countryId: 23,
    currentCountryIdList: [23, 29],
    graphKey: 'testKey',
    setCurrentCountryList: setCurrentCountryListMock,
  })

  onClick()

  expect(setCurrentCountryListMock).toHaveBeenCalledWith([29])
})
