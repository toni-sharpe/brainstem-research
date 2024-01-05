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
  PRIME_SYMPTOM_BAR_MARGIN,
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

import './PrimeSymptomHistogram.scss'

const i18nBase = 'PrimeSymptomHistogram'

function PrimeSymptomHistogram({
  badTimingError,
  blockSize,
  histogramHeight,
  primeSymptomData,
  timingError,
}) {
  const [currentDisplayedDataPoints, setCurrentDisplayedDataPoints] = useState(primeSymptomData?.length || PRIME_SYMPTOM_MINIMUM_COUNT)
  const [currentFactorOn, setCurrentFactorOn] = useState(true)

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

  const histogramData = ramda.pipe(
    ramda.take(currentDisplayedDataPoints),
    ramda.map(primeSymptomTimingError({ badTimingError, timingError }))
  )(primeSymptomData)

  const { FAT, NFT, UNK } = groupByOutcome(histogramData)
  const fatalCount = FAT?.length || 0
  const nonFatalCount = NFT?.length || 0
  const unknownCount = UNK?.length || 0

  const factor = applyFactor({ currentFactorOn, fatalCount, nonFatalCount })

  const histogramBarGroupList = calcPrimeSymptomHistogramBarGroup({
    factor,
    histogramData,
    primeSymptomHistogramBarGrouper,
  })

  const fatalAve = calcAverage(FAT)
  const nonFatalAve = calcAverage(NFT)

  const ariaName = i18next.t(`${i18nBase}.name`)
  const ariaLabel = currentFactorOn && factor !==1
    ? i18next.t(`${i18nBase}.factoredBy`, { ariaName, factor })
    : ariaName

  return (
    <div className='prime-symptom-histogram column-layout space-children--wide-column'>
      <section
        aria-label={i18next.t(`${i18nBase}.primeSymptomHistogramTools`)}
        className='row-layout space-children--wide-with-border prime-symptom-histogram__interaction-tools'
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
          <OutcomeSummary
            fatalAve={fatalAve}
            fatalCount={fatalCount}
            nonFatalAve={nonFatalAve}
            nonFatalCount={nonFatalCount}
            totalAvailableDataPoints={totalAvailableDataPoints}
            unknownCount={unknownCount}
          />
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
        <span className='prime-symptom-histogram__number-explanation' role='note'>
          {i18next.t(`${i18nBase}.numberExplanation`)}
        </span>
        <Histogram
          barCountPerBlock={2}
          barMargin={PRIME_SYMPTOM_BAR_MARGIN}
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
  primeSymptomData: PropTypes.array,
  timingError: PropTypes.number,
}

export default PrimeSymptomHistogram;
