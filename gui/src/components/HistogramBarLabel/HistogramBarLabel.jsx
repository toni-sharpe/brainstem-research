import React from 'react'

import { HISTOGRAM_BAR_WIDTH } from 'util/Constant/BaseConstantList'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import './HistogramBarLabel.scss'

function HistogramBarLabel({
  blockSize,
  children,
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
}

HistogramBarLabel.propTypes = {
  blockSize: NumberOrStringPropType,
}

export default HistogramBarLabel
