import {
  LEFT_WEST_KEY,
  RIGHT_EAST_KEY,
} from 'util/Constant/BaseConstantList'

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
  }
}