import React from 'react'
import PropTypes from 'prop-types'

import { HISTOGRAM_BAR_WIDTH } from 'util/Constant/BaseConstantList'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import './HistogramBarLabel.scss'

function HistogramBarLabel({
  blockSize,
  children,
  isShown,
}) {
  const positionStyles = {
    top: 4,
  }

  const className = children
    ? `histogram-bar-label${
      blockSize < 1.5
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
