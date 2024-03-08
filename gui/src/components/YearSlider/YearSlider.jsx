import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { range } from 'ramda'

import {
  LEFT_WEST_KEY,
  RIGHT_EAST_KEY,
  YEAR_SLIDER_BUTTON_WIDTH
} from 'util/Constant/BaseConstantList'
import { onButtonEventHandler } from 'util/UtilYearSlider/UtilYearSlider'
import Button from 'components/Button/Button'

import './YearSlider.scss'

function YearSlider({
  currentYear,
  endYear,
  setCurrentYear,
  startYear,
  yearStep,
}) {
  const [focusArrow, setFocussArrow] = useState(null)

  const availableSpace = 100 - YEAR_SLIDER_BUTTON_WIDTH
  const totalStepCount = endYear - startYear
  const stepSize = availableSpace / totalStepCount
  const currentStep = currentYear - startYear

  const left = stepSize * currentStep

  const eventHandler = onButtonEventHandler({
    currentYear,
    endYear,
    setCurrentYear,
    startYear,
    yearStep,
  })

  return (
    <div
      className='year-slider row-layout'
      onKeyDown={eventHandler}
    >
      { range(0, (totalStepCount / 10)).map(y => {
        const year = y * 10
        const ghostLeft = stepSize * year
        return (
          <Button
            extraClass='year-slider__ghost-button'
            onClick={() => {
              setCurrentYear(startYear + year)
            }}
            label={startYear + year}
            size='medium'
            style={{ left: `${ghostLeft}%` }}
          />
        )
      })}
      <Button
        extraClass='year-slider__button'
        label={currentYear}
        size='medium'
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
