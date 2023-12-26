import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'util/i18next/i18next'

import Button from 'components/Button/Button'
import SingleLabelButtonGroup from 'components/SingleLabelButtonGroup/SingleLabelButtonGroup'
import { PRIME_SYMPTOM_BUTTON_SET, PRIME_SYMPTOM_MINIMUM_COUNT } from 'util/Constant/BaseConstantList'
import { writeLabelForPointChange } from 'util/UtilPrimeSymptomHistogram/UtilPrimeSymptomHistogram'

import onClickHandler from './onClickHandler'

const i18nBase = 'PrimeSymptomListCounter'

function PrimeSymptomListCounter({
  currentDisplayedDataPoints,
  setCurrentDisplayedDataPoints,
  totalAvailableDataPoints,
}) {
  const onClick = onClickHandler({
    currentDisplayedDataPoints,
    setCurrentDisplayedDataPoints,
    totalAvailableDataPoints,
  })

  return (
    <SingleLabelButtonGroup label={i18next.t(`${i18nBase}.counterLabel`)}>
      <ul className='row-layout space-children'>
        { PRIME_SYMPTOM_BUTTON_SET.map((pointChange, i) => {
          const nextPoints =
            currentDisplayedDataPoints
            +
            pointChange

          const isDisabled =
            (nextPoints > totalAvailableDataPoints)
            ||
            (nextPoints < PRIME_SYMPTOM_MINIMUM_COUNT)

          return (
            <li key={pointChange}>
              <Button
                aria-pressed
                isDisabled={isDisabled}
                label={writeLabelForPointChange({ pointChange })}
                onClick={() => onClick({ pointChange })}
              />
            </li>
          )
        })}
      </ul>
    </SingleLabelButtonGroup>
  )
}

PrimeSymptomListCounter.propTypes = {
  currentDisplayedDataPoints: PropTypes.number.isRequired,
  setCurrentDisplayedDataPoints: PropTypes.func.isRequired,
  totalAvailableDataPoints: PropTypes.number.isRequired,
}

export default PrimeSymptomListCounter
