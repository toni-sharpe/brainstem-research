import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import { HISTOGRAM_BAR_LIST_COUNT, HISTOGRAM_BAR_WIDTH } from 'util/Constant/BaseConstantList'
import AllBlocksPropType from 'prop-types/AllBlocks.prop-type'

import './HistogramBarListLabel.scss'

const i18nBase = 'HistogramBarListLabel'

function HistogramBarListLabel({
  barCountPerBlock,
  blockMap,
  blockSize,
  i18nBaseOverride,
  i18nKeyOnly,
  i18nKey,
  left,
  top,
  translationSet,
}) {
  return (
    <span
      className='histogram-bar-list-label column-layout'
      style={{ left: 0, top, width: '100%' }}
    >
      { translationSet?.groupBy && (<span>{translationSet?.groupBy}</span>) }
      <span>{i18nKeyOnly ? i18nKey : i18next.t(`${i18nBaseOverride || i18nBase}.${i18nKey}`)}</span>
    </span>
  )
}

HistogramBarListLabel.defaultProps = {
  barCountPerBlock: HISTOGRAM_BAR_LIST_COUNT,
  blockSize: HISTOGRAM_BAR_WIDTH,
  i18nKeyOnly: false,
}

HistogramBarListLabel.propTypes = {
  barCountPerBlock: PropTypes.number,
  blockMap: AllBlocksPropType,
  blockSize: PropTypes.number,
  i18nKey: PropTypes.string.isRequired,
  i18nKeyOnly: PropTypes.bool,
  left: PropTypes.number.isRequired,
  top: PropTypes.string.isRequired,
}

export default HistogramBarListLabel
