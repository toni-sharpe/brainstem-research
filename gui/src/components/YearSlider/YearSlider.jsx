import PropTypes from 'prop-types'
import React from 'react'
import { range } from 'ramda'

import {
  calcStepSize,
  calcCurrentStep,
  calcTotalStepCount,
  onButtonEventHandler,
} from 'util/UtilYearSlider/UtilYearSlider'
import Button from 'components/Button/Button'

import './YearSlider.scss'

function YearSlider({
  currentYear,
  endYear,
  setCurrentYear,
  startYear,
  yearStep,
}) {
  const totalStepCount = calcTotalStepCount({ endYear, startYear })
  if (totalStepCount === null) { return null }

  const stepSize = calcStepSize({ totalStepCount })
  const currentStep = calcCurrentStep({ currentYear, endYear, startYear })
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
