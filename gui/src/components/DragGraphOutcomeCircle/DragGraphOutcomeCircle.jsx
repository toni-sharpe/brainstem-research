import PropTypes from 'prop-types'
import React from 'react'

import SvgCircle from 'components/SvgCircle/SvgCircle'
import { calcCircleRadius } from 'util/UtilSvg/UtilSvg'

import './DragGraphOutcomeCircle.scss'

function DragGraphOutcomeCircle({
  c,
  multiplier,
  fill,
  fillOpacity,
  r,
  zoom,
}) {
  return (
    <SvgCircle
      r={calcCircleRadius({ multiplier, value: r, zoom })}
      c={c}
      fill={fill}
      fillOpacity={fillOpacity}
    />
  )
}

DragGraphOutcomeCircle.defaultProps = {
  fillOpacity: 0.3,
  multiplier: 1,
}

DragGraphOutcomeCircle.propTypes = {
  heading: PropTypes.string,
  scaleDetail: PropTypes.string,
}

export default DragGraphOutcomeCircle
