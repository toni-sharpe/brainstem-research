import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'
import { shuffle } from 'simple-statistics'
import { range } from 'ramda'

import DataAdjusterButtonList from 'sections/DataAdjusterButtonList/DataAdjusterButtonList'
import ScatterChart from 'sections/ScatterChart/ScatterChart'
import ScatterDataPropType from 'prop-types/ScatterData.prop-type'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import { BAD_CORRELATION_SIM_ERROR_LIST } from 'util/Constant/BaseConstantList'
import { dataAdjusterLocalStorage } from 'util/UtilLocalStorage/UtilDataAdjuster'
import { setLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './BiasedCorrelationSim.scss'

const i18nBase = 'BiasedCorrelationSim'

function BiasedCorrelationSim({ antiBiasToolKitData: scatterData }) {
  const persistedCorrelationError = dataAdjusterLocalStorage({ k: 'biasCorrelation' })
  const [timingError, setTimingError] = useState(persistedCorrelationError)
  if (!scatterData) { return null }

  function mappedPointFn ({
    fatal_symptom_2,
    consultant_doctor,
    fatal_symptom_1,
  }) {
    let x = fatal_symptom_2
    let y = fatal_symptom_1

    if (consultant_doctor !== 'FIR') {
      if (timingError > 0) {
        const [a, b, c] = shuffle(range(1, timingError))
        if (c % 2 === 0) {
          x = x - a
          y = y + b
        } else {
          x = x + a
          y = y - b
        }
      }
    }

    return { x, y }
  }

  const dataAdjusterProps = {
    labelFn: ({ adjustBy }) =>
      adjustBy === 0
        ? 'OK'
        : adjustBy,
    onClickHandler: ({ adjustBy }) =>
      () => {
        setTimingError(adjustBy)
        setLocalStorage({ k: 'biasCorrelation', v: adjustBy })
      },
    selectedFn: ({ curr }) => timingError === curr
  }

  return (
    <SubPageWrapper heading={i18next.t(`${i18nBase}.summary`)}>
      <div className='biased-correlation-sim row-layout space-children--wide'>
        <DataAdjusterButtonList
          {...dataAdjusterProps}
          adjusterList={BAD_CORRELATION_SIM_ERROR_LIST}
          listLabel={i18next.t(`${i18nBase}.random`)}
        />
        <ScatterChart
          ariaLabel={i18next.t(`${i18nBase}.biasedCorrelationSimChart`)}
          domain={[0, 260]}
          keyPair={{ x: 'fatal_symptom_2', y: 'fatal_symptom_1' }}
          mapFn={mappedPointFn}
          scatterData={scatterData}
          showStatData='no-bars'
        />
      </div>
    </SubPageWrapper>
  )
}

BiasedCorrelationSim.propTypes = {
  antiBiasToolKitData: ScatterDataPropType
}

export default BiasedCorrelationSim
