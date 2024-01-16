import React from 'react'
import PropTypes from 'prop-types'

import { HISTOGRAM_BAR_WIDTH } from 'util/Constant/BaseConstantList'
import { bemWithExtraClass } from 'util/UtilClassName/UtilClassName'
import { calcHistogramBarPos } from 'util/UtilHistogram/UtilHistogram'

import './HistogramBar.scss'

function HistogramBar({
  backgroundColor,
  blockSize,
  children,
  extraClass,
  height,
  left,
  title,
  top,
}) {
  const endStyles = calcHistogramBarPos({
    className: extraClass,
    height,
    left: `${left}%`,
    top,
    width: `${blockSize}%`,
  })

  return (
    <li
      className={bemWithExtraClass({ bemBase: 'histogram-bar', extraClass })}
      style={{ ...endStyles, backgroundColor }}
      title={title}
    >
      {children}
    </li>
  )
}

HistogramBar.defaultProps = {
  backgroundColor: null, // neutral grey default
  blockSize: HISTOGRAM_BAR_WIDTH,
  extraClass : null,
}

HistogramBar.propTypes = {
  backgroundColor: PropTypes.string, // over-rides extraClass
  blockSize: PropTypes.number,
  children: PropTypes.node,
  extraClass: PropTypes.string, // must be provided in CSS somewhere to work
  height: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
}

export default HistogramBar
