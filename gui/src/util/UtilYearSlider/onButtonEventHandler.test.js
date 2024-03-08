import {
  LEFT_WEST_KEY,
  RIGHT_EAST_KEY,
} from 'util/Constant/BaseConstantList'

import { onButtonEventHandler } from './UtilYearSlider'

const setCurrentYearMock = jest.fn()

const eventHandlerCommonProps = {
  currentYear: 2020,
  endYear: 2030,
  setCurrentYear: setCurrentYearMock,
  startYear: 2010,
  yearStep: 1,
}

test('fn from onButtonEventHandler() if its not given left west or right east keys then nothing happens', () => {
  const eventHandler = onButtonEventHandler(eventHandlerCommonProps)
  expect(setCurrentYearMock).not.toHaveBeenCalled()
  expect(eventHandler({ keyCode: 38 })).toEqual(null)
})

test('fn from onButtonEventHandler() if currentYear > startYear and left west provided then currentYear decrements by yearStep', () => {
  const eventHandler = onButtonEventHandler(eventHandlerCommonProps)
  eventHandler({ keyCode: LEFT_WEST_KEY })
  expect(setCurrentYearMock).toHaveBeenCalledWith(2019)
})

test('fn from onButtonEventHandler() if currentYear === startYear and left west provided then startYear is used', () => {
  const eventHandler = onButtonEventHandler({
    ...eventHandlerCommonProps,
    currentYear: 2010
  })
  eventHandler({ keyCode: LEFT_WEST_KEY })
  expect(setCurrentYearMock).toHaveBeenCalledWith(2010)
})

test('fn from onButtonEventHandler() if currentYear < endYear and right east provided then year increments by yearStep', () => {
  const eventHandler = onButtonEventHandler(eventHandlerCommonProps)
  eventHandler({ keyCode: RIGHT_EAST_KEY })
  expect(setCurrentYearMock).toHaveBeenCalledWith(2021)
})

test('fn from onButtonEventHandler() if currentYear === endYear and right east provided then endYear is used', () => {
  const eventHandler = onButtonEventHandler({
    ...eventHandlerCommonProps,
    currentYear: 2030
  })
  eventHandler({ keyCode: RIGHT_EAST_KEY })
  expect(setCurrentYearMock).toHaveBeenCalledWith(2030)
})

test('fn from onButtonEventHandler() if yearStep is greater than 1 that is used', () => {
  const eventHandler = onButtonEventHandler({
    ...eventHandlerCommonProps,
    yearStep: 5,
  })
  eventHandler({ keyCode: RIGHT_EAST_KEY })
  expect(setCurrentYearMock).toHaveBeenCalledWith(2025)
})
