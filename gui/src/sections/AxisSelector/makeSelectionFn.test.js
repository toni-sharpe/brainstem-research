import '@testing-library/jest-dom'

import { makeSelectionFn } from './AxisSelector'

test('makeSelectionFn just returns the func if no array involved', () => {
  const setCurrentAxisSelectionMock = jest.fn()
  makeSelectionFn({
    currentAxisSelection: 'test',
    setCurrentAxisSelection: setCurrentAxisSelectionMock,
  })('test-key')
  expect(setCurrentAxisSelectionMock).toHaveBeenCalledWith('test-key')
})

test('makeSelectionFn adds to array if not there', () => {
  const setCurrentAxisSelectionMock = jest.fn()
  makeSelectionFn({
    currentAxisSelection: ['test'],
    setCurrentAxisSelection: setCurrentAxisSelectionMock,
  })('test-key')
  expect(setCurrentAxisSelectionMock).toHaveBeenCalledWith(['test', 'test-key'])
})

test('makeSelectionFn doesnt allow the only item in the list to be removed', () => {
  const setCurrentAxisSelectionMock = jest.fn()
  makeSelectionFn({
    currentAxisSelection: ['test'],
    setCurrentAxisSelection: setCurrentAxisSelectionMock,
  })('test')
  expect(setCurrentAxisSelectionMock).toHaveBeenCalledWith(['test'])
})

test('makeSelectionFn removes from the array if theres more than one', () => {
  const setCurrentAxisSelectionMock = jest.fn()
  makeSelectionFn({
    currentAxisSelection: ['test', 'test-key'],
    setCurrentAxisSelection: setCurrentAxisSelectionMock,
  })('test-key')
  expect(setCurrentAxisSelectionMock).toHaveBeenCalledWith(['test'])
})
