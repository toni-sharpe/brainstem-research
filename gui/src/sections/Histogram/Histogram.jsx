import i18next from 'util/i18next/i18next'
import React from 'react'
import PropTypes from 'prop-types'

import {
  HISTOGRAM_BAR_LIST_COUNT,
  HISTOGRAM_BAR_LIST_MARGIN,
  HISTOGRAM_BAR_WIDTH,
  HISTORGRAM_HEIGHT,
} from 'util/Constant/BaseConstantList'

import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import HistogramBarList from 'sections/HistogramBarList/HistogramBarList'
import HistogramDataPropType from 'prop-types/HistogramData.prop-type'
import HistogramTranslationPropType from 'prop-types/HistogramTranslation.prop-type'
import XAxisLineList from 'components/XAxisLineList/XAxisLineList'
import { calcMostMaxOfAllTheThings } from 'util/Util/UtilMaxThing'

import './Histogram.scss'
import './Histogram.story.scss'

function Histogram({
  barCountPerBlock,
  barMargin,
  blockSize,
  histogramBarGroupList,
  histogramHeight,
  graphLabel,
  hueFn,
  i18nBaseOverride,
  i18nKeyOnly,
  translationSet,
  widthOverride,
}) {

  if (!histogramBarGroupList || histogramBarGroupList?.length === 0) {
    return (
      <div className='row-layout histogram__error-wrapper'>
        <ErrorOutput message={i18next.t(`ErrorList.noHistogramData`)} />
      </div>
    )
  }

  const mostMaxOfAllThings = calcMostMaxOfAllTheThings({ theThingList: histogramBarGroupList })

  const commonProps = {
    barCountPerBlock,
    barMargin,
    blockSize,
    histogramHeight,
    i18nKeyOnly,
    mostMaxOfAllThings,
    translationSet,
  }

  return (
    <figure className='histogram column-layout'>
      <figcaption className='histogram__caption'>{graphLabel}</figcaption>
      <div className='histogram__columns' style={{ width: '100%' }}>
        <XAxisLineList
          {...commonProps}
          extraLineCount={4}
          histogramBarGroupList={histogramBarGroupList}
          widthOverride={widthOverride}
        />
        <HistogramBarList
          {...commonProps}
          histogramBarGroupList={histogramBarGroupList}
          hueFn={hueFn}
          i18nBaseOverride={i18nBaseOverride}
        />
      </div>
    </figure>
  )
}

Histogram.defaultProps = {
  barCountPerBlock: HISTOGRAM_BAR_LIST_COUNT,
  barMargin: HISTOGRAM_BAR_LIST_MARGIN,
  blockSize: HISTOGRAM_BAR_WIDTH,
  histogramHeight: HISTORGRAM_HEIGHT,
  i18nKeyOnly: null,
}

Histogram.propTypes = {
  barCountPerBlock: PropTypes.number,
  barMargin: PropTypes.number,
  blockSize: PropTypes.number,
  histogramBarGroupList: HistogramDataPropType,
  histogramHeight: PropTypes.number,
  graphLabel: PropTypes.string,
  i18nKeyOnly: PropTypes.bool, // lets any graph take charge of it's bar labelling
  translationSet: HistogramTranslationPropType,
}

export default Histogram
