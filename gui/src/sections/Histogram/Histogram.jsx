import i18next from 'util/i18next/i18next'
import React from 'react'
import PropTypes from 'prop-types'

import {
  HISTOGRAM_BAR_GROUP_COUNT,
  HISTOGRAM_BAR_GROUP_MARGIN,
  HISTOGRAM_BAR_WIDTH,
  HISTORGRAM_HEIGHT,
  USE_HUE_CONTRAST_TOGGLE,
  USE_HUE_WHEEL,
} from 'util/Constant/BaseConstantList'

import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import HistogramBarList from 'sections/HistogramBarList/HistogramBarList'
import HistogramDataPropType from 'prop-types/HistogramData.prop-type'
import XAxisLineList from 'components/XAxisLineList/XAxisLineList'
import { calcHistogramBarHue, calcHistogramWidth } from 'util/UtilHistogram/UtilHistogram'
import { calcMostMaxOfAllTheThings } from 'util/UtilHistogram/UtilHistogramMaxThing'

import './Histogram.scss'
import './Histogram.story.scss'

function Histogram({
  averageLineList,
  barCountPerBlock,
  barMargin,
  blockSize,
  histogramBarGroupList,
  histogramHeight,
  graphLabel,
  i18nBaseOverride,
  i18nKeyOnly,
  useHueContrastToggle,
  useHueWheel,
}) {
  if (!histogramBarGroupList || histogramBarGroupList?.length === 0) {
    return (
      <div className='row-layout histogram__error-wrapper'>
        <ErrorOutput message={i18next.t(`ErrorList.noHistogramData`)} />
      </div>
    )
  }

  const graphWidth = calcHistogramWidth({
    barCountPerBlock,
    blockSize,
    barMargin,
    histogramBarGroupList,
  })

  const mostMaxOfAllThings = calcMostMaxOfAllTheThings({ histogramBarGroupList })

  const commonProps = {
    barCountPerBlock,
    barMargin,
    blockSize,
    histogramHeight,
    i18nKeyOnly,
    mostMaxOfAllThings,
  }

  const hueFn = calcHistogramBarHue({
    useHueContrastToggle,
    useHueWheel,
  })

  const styleHack = {
    left: '50%',
    marginLeft: 0 - (graphWidth / 2),
    width: graphWidth
  }

  return (
    <figure className='histogram column-layout' style={styleHack}>
      <figcaption className='histogram__caption'>{graphLabel}</figcaption>
      <div className='histogram__columns' style={{ width: graphWidth }}>
        <HistogramBarList
          {...commonProps}
          histogramBarGroupList={histogramBarGroupList}
          hueFn={hueFn}
          i18nBaseOverride={i18nBaseOverride}
        />
        <XAxisLineList
          {...commonProps}
          extraLineCount={4}
          histogramBarGroupList={histogramBarGroupList}
          graphWidth={graphWidth}
        />
      </div>
    </figure>
  )
}

Histogram.defaultProps = {
  barCountPerBlock: HISTOGRAM_BAR_GROUP_COUNT,
  barMargin: HISTOGRAM_BAR_GROUP_MARGIN,
  blockSize: HISTOGRAM_BAR_WIDTH,
  histogramHeight: HISTORGRAM_HEIGHT,
  i18nKeyOnly: null,
  useHueContrastToggle: USE_HUE_CONTRAST_TOGGLE,
  useHueWheel: USE_HUE_WHEEL,
}

Histogram.propTypes = {
  barCountPerBlock: PropTypes.number,
  barMargin: PropTypes.number,
  blockDataSize: PropTypes.number,
  blockSize: PropTypes.number,
  histogramBarGroupList: HistogramDataPropType,
  histogramHeight: PropTypes.number,
  graphLabel: PropTypes.string,
  i18nKeyOnly: PropTypes.bool, // lets any graph take charge of it's bar labelling
  useHueContrastToggle: PropTypes.bool,
  useHueWheel: PropTypes.bool,
}

export default Histogram
