import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'
import { keys, map, pipe } from 'ramda'

import AxisSelector from 'sections/AxisSelector/AxisSelector'
import Histogram from 'sections/Histogram/Histogram'
import Button from 'components/Button/Button'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import { calcAccessibleHue } from 'util/UtilHue/UtilHue'
import { HISTOGRAM_BAR_LIST_MARGIN } from 'util/Constant/BaseConstantList'
import { secondaryNavLocalStorage } from 'util/UtilLocalStorage/UtilSecondaryNav'
import { secondaryNavProps } from 'util/UtilNav/UtilNav'

import { calcHistogramBarGroupList, dataFnList } from './HistogramMakerDataFunctions'
import './HistogramMaker.scss'

const i18nBase = 'HistogramMaker'

function HistogramMaker({ data }) {
  const barFn = secondaryNavLocalStorage({ def: 'count', k: i18nBase })
  const [currentPathogenesisStepList, setCurrentPathogenesisStepList] = useState(['mild_symptom_1', 'prime_symptom_3'])
  const [currentGroupBy, setCurrentGroupBy] = useState('fatal_symptom_1')
  const [currentBarFn, setCurrentBarFn] = useState(barFn)

  if (!data || data.length === 0) {
    return null
  }

  const histogramBarGroupList = calcHistogramBarGroupList({
    currentBarFn,
    currentGroupBy,
    currentPathogenesisStepList,
    data,
  })

  const totalBarListCount = 7
  const marginCount = 6
  const leftAfterMargins = 100 - marginCount
  const blockSize =
    leftAfterMargins
    /
    totalBarListCount
    /
    currentPathogenesisStepList.length

  const barCountPerBlock = currentPathogenesisStepList.length

  const hueFn = calcAccessibleHue()

  const commonNavProps = {
    currentPanel: currentBarFn,
    i18nBase,
    setCurrentPanel: setCurrentBarFn,
  }

  return (
    <PageDetailWrapper
      count={data?.length}
      i18nBase={i18nBase}
      secondaryNav={(
        <SecondaryNav
          ariaLabel={i18next.t(`${i18nBase}.secondaryNav`)}
          extraClass='histogram-maker'
        >
          { pipe(
              keys,
              map(k => (<li key={k}><Button {...secondaryNavProps({ ...commonNavProps, k })} /></li>)),
            )(dataFnList)
          }
        </SecondaryNav>
      )}
    >
      <div className='histogram-maker row-layout'>
        <AxisSelector
          axis='stats'
          currentAxisSelection={currentPathogenesisStepList}
          disabledSelection={currentGroupBy}
          hueFn={hueFn}
          setCurrentAxisSelection={setCurrentPathogenesisStepList}
          showDurationOptions={currentBarFn !== 'count'}
        />
        <div className='histogram-maker__data'>
          <Histogram
            barCountPerBlock={barCountPerBlock}
            barMargin={HISTOGRAM_BAR_LIST_MARGIN}
            blockSize={blockSize}
            histogramBarGroupList={histogramBarGroupList}
            heightPaddingLines={0}
            hueFn={hueFn}
            i18nKeyOnly
            minGraphHeight={0}
            translationSet={{
              barList: currentPathogenesisStepList.map(step => i18next.t(`CommonClinicalResponses.${step}`)),
              groupBy: i18next.t(`CommonClinicalResponses.${currentGroupBy}`),
            }}
          />
        </div>
        <AxisSelector
          align='right'
          axis='groupBy'
          currentAxisSelection={currentGroupBy}
          defineDurationOptions
          disabledSelection={currentPathogenesisStepList}
          setCurrentAxisSelection={setCurrentGroupBy}
        />
      </div>
    </PageDetailWrapper>
  );
}

export default HistogramMaker;
