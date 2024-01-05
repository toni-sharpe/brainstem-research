import React from 'react'
import PropTypes from 'prop-types'

import { HISTOGRAM_BAR_WIDTH } from 'util/Constant/BaseConstantList'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import './HistogramBarLabel.scss'

function HistogramBarLabel({
  blockSize,
  histogramHistogramBarListLabel,
  children,
  isShown,
}) {
  const positionStyles = {
    height: blockSize * 0.4,
    top: `-${blockSize * 0.35}px`,
    width: blockSize - 8
  }

  const className = children
    ? `histogram-bar-label${
      blockSize < 24
        ? ' histogram-bar-label__small-font'
        : ''
    }`
    : ''

  return (
    <span
      className={className}
      style={positionStyles}
    >
      { children }
    </span>
  )
}

HistogramBarLabel.defaultProps = {
  blockSize: HISTOGRAM_BAR_WIDTH,
  count: 0,
  isShown: true,
}

HistogramBarLabel.propTypes = {
  blockSize: NumberOrStringPropType,
  count: NumberOrStringPropType,
  isShown: PropTypes.bool,
}

export default HistogramBarLabel
