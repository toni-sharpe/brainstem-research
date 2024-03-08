import PropTypes from 'prop-types'
import React from 'react'
import {
  LEFT_WEST_KEY,
  RIGHT_EAST_KEY,
} from 'util/Constant/BaseConstantList'
import Button from 'components/Button/Button'

import './YearSlider.scss'

function onKeyDownHandler({
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

function YearSlider({
  currentYear,
  endYear,
  setCurrentYear,
  startYear,
  yearStep,
}) {
  console.log(currentYear)
  const left = (97.5 / (endYear - startYear)) * (currentYear - startYear)
  return (
    <div
      className='year-slider'
      onKeyDown={onKeyDownHandler({
        currentYear,
        endYear,
        setCurrentYear,
        startYear,
        yearStep,
      })}
    >
      <Button
        extraClass='year-slider__button'
        label={currentYear}
        size='small'
        style={{ left: `${left}%` }}
      />
    </div>
  )
}

YearSlider.defaultProps = {
  currentYear: 2024,
  endYear: 2024,
  yearStep: 1,
}

YearSlider.propTypes = {
  currentYear: PropTypes.number,
  endYear: PropTypes.number,
  setCurrentYear: PropTypes.func,
  startYear: PropTypes.number,
  yearSteps: PropTypes.number,
}

export default YearSlider
