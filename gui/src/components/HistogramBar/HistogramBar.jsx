import React from 'react'
import PropTypes from 'prop-types'

import { HISTOGRAM_BAR_WIDTH } from 'util/Constant/BaseConstantList'
import { calcHistogramBarPosition } from 'util/UtilHistogram/UtilHistogram'

import './HistogramBar.scss'

function HistogramBar({
  backgroundColor,
  blockSize,
  children,
  height,
  left,
  title,
  top,
}) {
  const endStyles = calcHistogramBarPosition({
    height,
    left: `${left}%`,
    top,
    width: `${blockSize}%`,
  })

  return (
    <li
      className='histogram-bar'
      style={{ ...endStyles, backgroundColor: backgroundColor || '#999' }}
      title={title}
    >
      {children}
    </li>
  )
}

HistogramBar.defaultProps = {
  backgroundColor: undefined, // neutral grey default
  blockSize: HISTOGRAM_BAR_WIDTH,
}

HistogramBar.propTypes = {
  backgroundColor: PropTypes.string, // over-rides extraClass
  blockSize: PropTypes.number,
  children: PropTypes.node,
  height: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
}

export default HistogramBar
