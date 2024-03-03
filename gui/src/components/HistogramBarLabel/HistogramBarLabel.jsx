import React from 'react'
import PropTypes from 'prop-types'

import { HISTOGRAM_BAR_WIDTH } from 'util/Constant/BaseConstantList'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import './HistogramBarLabel.scss'

function HistogramBarLabel({
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

HistogramBarLabel.propTypes = {
  children: PropTypes.node,
}

export default HistogramBarLabel
