import PropTypes from 'prop-types'
import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import DataAdjusterButtonList from 'sections/DataAdjusterButtonList/DataAdjusterButtonList'
import PrimeSymptomHistogram from 'sections/PrimeSymptomHistogram/PrimeSymptomHistogram'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import {
  BAD_TIMING_SIM_ERROR_LIST,
  PRIME_SYMPTOM_BLOCK_SIZE,
  PRIME_SYMPTOM_HISTOGRAM_HEIGHT,
} from 'util/Constant/BaseConstantList'
import { primeSymptomAntiBiasLocalStorage } from 'util/UtilLocalStorage/UtilPrimeSymptom'

import './BiasedTimingSim.scss'

const i18nBase = 'BiasedTimingSim'

function BiasedTimingSim({ antiBiasToolKitData }) {
  const [timingError, setTimingError] = useState(0)
  const [badTimingError, setBiasedTimingError] = useState(0)
  if (!antiBiasToolKitData) { return null }

  const commonAdjusterProps = {
    adjusterList: BAD_TIMING_SIM_ERROR_LIST,
    labelFn: function labelFn({ adjustBy }) {
      return adjustBy === 0 ? 'OK' : adjustBy
    }
  }

  return (
    <SubPageWrapper
      extraClass='biased-timing-sim'
      heading={i18next.t(`${i18nBase}.summary`)}
      withBorder={false}
    >
      <div className='row-layout space-children'>
        <DataAdjusterButtonList
          {...commonAdjusterProps}
          listLabel={i18next.t(`${i18nBase}.biased`)}
          onClickHandler={({ adjustBy }) => () => { setTimingError(adjustBy); setBiasedTimingError(0) }}
          selectedFn={({ curr }) => timingError === curr && badTimingError === 0}
        />
        <div className='hide'>
          <DataAdjusterButtonList
            {...commonAdjusterProps}
            listLabel={i18next.t(`${i18nBase}.veryBiased`)}
            onClickHandler={({ adjustBy }) => () => { setBiasedTimingError(adjustBy); setTimingError(0) }}
            selectedFn={({ curr }) => badTimingError === curr && timingError === 0}
          />
        </div>
      </div>
      <PrimeSymptomHistogram
        badTimingError={badTimingError}
        blockSize={PRIME_SYMPTOM_BLOCK_SIZE}
        localStorageFn={primeSymptomAntiBiasLocalStorage}
        localStorageKey='primeSymptomAntiBias'
        histogramHeight={PRIME_SYMPTOM_HISTOGRAM_HEIGHT}
        primeSymptomData={antiBiasToolKitData}
        timingError={timingError}
      />
    </SubPageWrapper>
  )
}

BiasedTimingSim.propTypes = {
  antiBiasToolKitData: PropTypes.array
}

export default BiasedTimingSim
