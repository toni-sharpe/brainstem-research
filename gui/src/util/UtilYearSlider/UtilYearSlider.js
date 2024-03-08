import {
  LEFT_WEST_KEY,
  RIGHT_EAST_KEY,
  YEAR_SLIDER_BUTTON_WIDTH,
} from 'util/Constant/BaseConstantList'
import { throwError } from 'util/UtilError/UtilError'

export function calcTotalStepCount({ endYear, startYear }) {
  throwError({ check: endYear >= startYear, i18nKey: 'sliderYear' })

  return startYear === endYear
    ? null
    : endYear - startYear
}

export function calcStepSize({ totalStepCount }) {
  const availableSpace = 100 - YEAR_SLIDER_BUTTON_WIDTH
  return availableSpace / totalStepCount
}

export function calcCurrentStep({ currentYear, endYear, startYear }) {
  throwError({ check: currentYear >= startYear && currentYear <= endYear, i18nKey: 'sliderStepYear' })

  return currentYear - startYear
}

export function onButtonEventHandler({
  currentYear,
  endYear,
  setCurrentYear,
  startYear,
  yearStep,
}) {
  return function({ keyCode }) {
    if (keyCode === LEFT_WEST_KEY) {
      setCurrentYear(currentYear > startYear ? currentYear - yearStep : startYear)
    }
    if (keyCode === RIGHT_EAST_KEY) {
      setCurrentYear(currentYear < endYear ? currentYear + yearStep : endYear)
    }
    return null
  }
}