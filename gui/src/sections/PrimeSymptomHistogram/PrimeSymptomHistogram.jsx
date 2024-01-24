import * as ramda from 'ramda'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import i18next from 'util/i18next/i18next'

import FactorToggle from 'components/FactorToggle/FactorToggle'
import OutcomeSummary from 'components/OutcomeSummary/OutcomeSummary'
import PrimeSymptomListCounter from 'sections/PrimeSymptomListCounter/PrimeSymptomListCounter'
import {
  BAD_TIMING_ERROR,
  HISTOGRAM_BAR_WIDTH,
  HISTOGRAM_BAR_LIST_MARGIN,
  PRIME_SYMPTOM_MINIMUM_COUNT,
  TIMING_ERROR,
} from 'util/Constant/BaseConstantList'
import Histogram from 'sections/Histogram/Histogram'
import {
  applyFactor,
  groupByOutcome,
  calcAverage,
  calcPrimeSymptomHistogramBarGroup,
  primeSymptomHistogramBarGrouper,
  primeSymptomTimingError,
} from 'util/UtilPrimeSymptomHistogram/UtilPrimeSymptomHistogram'
import { setJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './PrimeSymptomHistogram.scss'

export const i18nBase = 'PrimeSymptomHistogram'

function PrimeSymptomHistogram({
  badTimingError,
  blockSize,
  histogramHeight,
  localStorageFn,
  localStorageKey,
  primeSymptomData,
  timingError,
}) {
  const { count, factor: localStorageFactor } = localStorageFn({ k: localStorageKey })
  const [currentDisplayedDataPoints, setCurrentDisplayedDataPoints] = useState(count || primeSymptomData?.length || PRIME_SYMPTOM_MINIMUM_COUNT)
  const [currentFactorOn, setCurrentFactorOn] = useState(localStorageFactor)

  const totalAvailableDataPoints = primeSymptomData?.length

  useEffect(() => {
    if (
      totalAvailableDataPoints < currentDisplayedDataPoints
      &&
      totalAvailableDataPoints > 0
    ) {
      setCurrentDisplayedDataPoints(totalAvailableDataPoints)
    }
  }, [currentDisplayedDataPoints, totalAvailableDataPoints])

  if (!primeSymptomData?.length) {
    return null
  }

  setJSONLocalStorage({ k: localStorageKey, v: { count: currentDisplayedDataPoints, factor: currentFactorOn } })

  const histogramData = ramda.pipe(
    ramda.take(currentDisplayedDataPoints),
    ramda.map(primeSymptomTimingError({ badTimingError, timingError }))
  )(primeSymptomData)

  const { SEV, NSV, UNK } = groupByOutcome(histogramData)
  const severeCount = SEV?.length || 0
  const nonSevereCount = NSV?.length || 0
  const unknownCount = UNK?.length || 0

  const factor = applyFactor({ currentFactorOn, severeCount, nonSevereCount })

  const histogramBarGroupList = calcPrimeSymptomHistogramBarGroup({
    factor,
    histogramData,
    primeSymptomHistogramBarGrouper,
  })

  const severeAve = calcAverage(SEV)
  const nonSevereAve = calcAverage(NSV)

  const ariaName = i18next.t(`${i18nBase}.name`)
  const ariaLabel = currentFactorOn && factor !==1
    ? i18next.t(`${i18nBase}.factoredBy`, { ariaName, factor })
    : ariaName

  return (
    <div className='prime-symptom-histogram'>
      <span className='prime-symptom-histogram__number-explanation' role='note'>
        {i18next.t(`${i18nBase}.numberExplanation`)}
      </span>
      <section
        aria-label={i18next.t(`${i18nBase}.primeSymptomHistogramTools`)}
        className='prime-symptom-histogram__interaction-tools'
      >
        <div className='prime-symptom-histogram__tool'>
          { primeSymptomData.length && (
            <PrimeSymptomListCounter
              currentDisplayedDataPoints={currentDisplayedDataPoints}
              setCurrentDisplayedDataPoints={setCurrentDisplayedDataPoints}
              totalAvailableDataPoints={totalAvailableDataPoints}
            />
          ) }
        </div>
        <div className='prime-symptom-histogram__tool'>
          <FactorToggle
            currentFactorOn={currentFactorOn}
            setCurrentFactorOn={setCurrentFactorOn}
          />
        </div>
      </section>
      <section
        aria-label={ariaLabel}
        className='column-layout space-children--column prime-symptom-histogram__graph'
      >
        <div className='prime-symptom-histogram__tool'>
          <OutcomeSummary
            severeAve={severeAve}
            severeCount={severeCount}
            nonSevereAve={nonSevereAve}
            nonSevereCount={nonSevereCount}
            totalAvailableDataPoints={totalAvailableDataPoints}
            unknownCount={unknownCount}
          />
        </div>
        <Histogram
          barCountPerBlock={2}
          barMargin={HISTOGRAM_BAR_LIST_MARGIN}
          blockSize={blockSize}
          histogramBarGroupList={histogramBarGroupList}
          histogramHeight={histogramHeight}
          graphLabel={ariaLabel}
          i18nBaseOverride={i18nBase}
        />
      </section>
    </div>
  );
}

PrimeSymptomHistogram.defaultProps = {
  badTimingError: BAD_TIMING_ERROR,
  blockSize: HISTOGRAM_BAR_WIDTH,
  timingError: TIMING_ERROR,
}

PrimeSymptomHistogram.propTypes = {
  badTimingError: PropTypes.number,
  blockSize: PropTypes.number,
  localStorageFn: PropTypes.func,
  localStorageKey: PropTypes.oneOf(['primeSymptom', 'primeSymptomAntiBias']),
  primeSymptomData: PropTypes.array,
  timingError: PropTypes.number,
}

export default PrimeSymptomHistogram;
