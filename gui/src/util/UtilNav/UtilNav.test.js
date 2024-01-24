import { secondaryNavProps } from './UtilNav'


/*
 * secondaryNavProps()
 */
test('secondaryNavProps()', () => {
  const setCurrentPanel = jest.fn()

  const args = {
    currentPanel: 'test-b',
    k: 'test-a',
    i18nBase: 'ReactTestLibrary',
    setCurrentPanel,
  }

  const result = secondaryNavProps(args)

  const expected = {
    isSelected: false,
    label: 'Test Panel A',
    size: 'medium',
  }

  expect(expected.isSelected).toEqual(result.isSelected)
  expect(expected.label).toEqual(result.label)
  expect(expected.size).toEqual(result.size)
  result.onClick()
  expect(setCurrentPanel).toHaveBeenCalledWith('test-a')
})


/*
 * secondaryNavProps() error
 */
test('secondaryNavProps() throws errors for missing props', () => {
  const errorText = 'all four args are required, currentPanel, k and i18nBase are all strings and setCurrentPanel should be a function'
  expect(() => secondaryNavProps({ currentPanel: 'a', k: 'b', i18nBase: 'c' })).toThrow(errorText)
  expect(() => secondaryNavProps({ currentPanel: 'a', k: 'b', setCurrentPanel: () => {} })).toThrow(errorText)
  expect(() => secondaryNavProps({ currentPanel: 'a', i18nBase: 'c', setCurrentPanel: () => {} })).toThrow(errorText)
  expect(() => secondaryNavProps({ k: 'b', i18nBase: 'c', setCurrentPanel: () => {} })).toThrow(errorText)
  expect(() => secondaryNavProps({ currentPanel: 'a', k: 'b', i18nBase: 'c', setCurrentPanel: 'not a func' })).toThrow(errorText)
})
