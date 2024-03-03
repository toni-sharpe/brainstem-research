import React from 'react'
import PropTypes from 'prop-types'

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
