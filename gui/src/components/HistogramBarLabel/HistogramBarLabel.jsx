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
  return (
    <span
      className='histogram-bar-label'
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
