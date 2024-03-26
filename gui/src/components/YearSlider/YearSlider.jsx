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
import KeyHint from 'components/KeyHint/KeyHint'
import { onKeyDownRegionHandler } from 'util/UtilKeyboard/UtilKeyboard'

import './YearSlider.scss'

function YearSlider({
  buttonStep,
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
      className='js-year-slider year-slider'
      onKeyDown={onKeyDownRegionHandler()}
      tabIndex='-1'
    >
      <KeyHint
        letter='t'
        positionStyle={{ top: '4px', left: '-8px' }}
      />
      <div
        aria-label='year slider allows data across the years to be viewed'
        className='year-slider__rail row-layout'
        role='region'
        onKeyDown={eventHandler}
      >
        { range(0, (totalStepCount / buttonStep + 1)).map(y => {
          const year = y * buttonStep
          const ghostLeft = stepSize * year
          return (
            <Button
              extraClass='year-slider__ghost-button'
              key={y}
              label={startYear + year}
              onClick={() => {
                setCurrentYear(startYear + year)
              }}
              size='small'
              style={{ left: `${ghostLeft}%` }}
            />
          )
        })}
        <Button
          extraClass='js-year-slider-main-button year-slider__button'
          label={currentYear}
          size='small'
          style={{ left: `${left}%` }}
        />
      </div>
    </div>
  )
}

YearSlider.defaultProps = {
  buttonStep: 10,
  currentYear: 2024,
  endYear: 2024,
  yearStep: 1,
}

YearSlider.propTypes = {
  buttonStep: PropTypes.number,
  currentYear: PropTypes.number,
  endYear: PropTypes.number,
  setCurrentYear: PropTypes.func,
  startYear: PropTypes.number,
  yearSteps: PropTypes.number,
}

export default YearSlider
