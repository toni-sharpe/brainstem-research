import { buildMapCountryElement } from './UtilMapCountry'

const onClickMock = jest.fn()
const setCurrentHoveredCountryIdMock = jest.fn()

const result = buildMapCountryElement({
  data: { countryId: 19, onClick: onClickMock, x: 'test' },
  elementKey: 'x',
  i: 53,
  setCurrentHoveredCountryId: setCurrentHoveredCountryIdMock
})


test('buildMapCountryElement() result uses elementKey for children', () => {
  expect(result.children).toEqual('test')
})

test('buildMapCountryElement() result made key well', () => {
  expect(result.key).toEqual('19-53-x')
})

test('buildMapCountryElement() prepares for the mouse', () => {
  expect(result['pointerEvents']).toEqual('visiblePainted')
})

test('buildMapCountryElement() puts onClick in the right place', () => {
  result.onClick()
  expect(onClickMock).toHaveBeenCalled()
})

test('buildMapCountryElement() sets the hover country id on mouse enter', () => {
  result.onMouseEnter()
  expect(setCurrentHoveredCountryIdMock).toHaveBeenCalledWith(19)
})

test('buildMapCountryElement() unsets the hover country id on mouse leave', () => {
  result.onMouseLeave()
  expect(setCurrentHoveredCountryIdMock).toHaveBeenCalledWith(undefined)
})
