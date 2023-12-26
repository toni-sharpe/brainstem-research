import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import { HISTOGRAM_BAR_GROUP_COUNT, HISTOGRAM_BAR_WIDTH } from 'util/Constant/BaseConstantList'
import AllBlocksPropType from 'prop-types/AllBlocks.prop-type'

import './HistogramBarGroupLabel.scss'

const i18nBase = 'HistogramBarGroupLabel'

function HistogramBarGroupLabel({
  barCountPerBlock,
  blockMap,
  blockSize,
  i18nKeyOnly,
  i18nKey,
  left,
  top,
}) {
  const width = barCountPerBlock * blockSize
  const simpleNumbers = width < 10

  const className = `
    histogram-bar-group-label
    ${simpleNumbers ? 'font-small' : 'font-regular'}
  `

  return (
    <span
      className={className}
      style={{ left, top, width }}
    >
      <span>{i18nKeyOnly ? i18nKey : i18next.t(`${i18nBase}.${i18nKey}`)}</span>
    </span>
  )
}

HistogramBarGroupLabel.defaultProps = {
  barCountPerBlock: HISTOGRAM_BAR_GROUP_COUNT,
  blockSize: HISTOGRAM_BAR_WIDTH,
  i18nKeyOnly: false,
}

HistogramBarGroupLabel.propTypes = {
  barCountPerBlock: PropTypes.number,
  blockMap: AllBlocksPropType,
  blockSize: PropTypes.number,
  i18nKey: PropTypes.string.isRequired,
  i18nKeyOnly: PropTypes.bool,
  left: PropTypes.number.isRequired,
  top: PropTypes.string.isRequired,
}

export default HistogramBarGroupLabel
