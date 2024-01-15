import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'
import { keys, map, pipe } from 'ramda'

import AxisSelector from 'sections/AxisSelector/AxisSelector'
import Histogram from 'sections/Histogram/Histogram'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import Button from 'components/Button/Button'
import { secondaryNavProps } from 'util/UtilNav/UtilNav'
import { HISTOGRAM_BAR_LIST_MARGIN } from 'util/Constant/BaseConstantList'

import { calcHistogramBarGroupList, dataFnList } from './HistogramMakerDataFunctions'
import './HistogramMaker.scss'

const i18nBase = 'HistogramMaker'

function HistogramMaker({ data }) {
  const [currentPathogenStepList, setCurrentPathogenStepList] = useState(['mild_symptom_1', 'prime_symptom_3'])
  const [currentGroupBy, setCurrentGroupBy] = useState('fatal_symptom_1')
  const [currentBarFn, setCurrentBarFn] = useState('count')

  if (!data || data.length === 0) {
    return null
  }

  const histogramBarGroupList = calcHistogramBarGroupList({
    currentBarFn,
    currentGroupBy,
    currentPathogenStepList,
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
    currentPathogenStepList.length

  const barCountPerBlock = currentPathogenStepList.length

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
      <div className='histogram-maker row-layout space-children--wide'>
        <AxisSelector
          align='right'
          axis='stats'
          currentAxisSelection={currentPathogenStepList}
          disabledSelection={currentGroupBy}
          setCurrentAxisSelection={setCurrentPathogenStepList}
          showDurationOptions={currentBarFn !== 'count'}
        />
        <div className='histogram-maker__data'>
          <Histogram
            barCountPerBlock={barCountPerBlock}
            barMargin={HISTOGRAM_BAR_LIST_MARGIN}
            blockSize={blockSize}
            histogramBarGroupList={histogramBarGroupList}
            heightPaddingLines={0}
            i18nKeyOnly
            minGraphHeight={0}
            translationSet={{
              barList: currentPathogenesisStepList.map(step => i18next.t(`CommonClinicalResponses.${step}`)),
              groupBy: i18next.t(`CommonClinicalResponses.${currentGroupBy}`),
            }}
            useHueContrastToggle
            useHueWheel
          />
        </div>
        <AxisSelector
          axis='groupBy'
          currentAxisSelection={currentGroupBy}
          defineDurationOptions
          disabledSelection={currentPathogenStepList}
          setCurrentAxisSelection={setCurrentGroupBy}
        />
      </div>
    </PageDetailWrapper>
  );
}

export default HistogramMaker;
