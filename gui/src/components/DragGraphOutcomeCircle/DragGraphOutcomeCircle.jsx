import PropTypes from 'prop-types'
import React from 'react'

import SvgCircle from 'components/SvgCircle/SvgCircle'
import { calcCircleRadius } from 'util/UtilDragGraph/UtilDragGraph'

import './DragGraphOutcomeCircle.scss'

function DragGraphOutcomeCircle({
  c,
  multiplier,
  fill,
  r,
  zoom,
}) {
  return (
    <SvgCircle
      circleRadius={calcCircleRadius({ multiplier, value: r, zoom })}
      c={c}
      fill={fill}
      fillOpacity={0.1}
    />
  )
}

DragGraphOutcomeCircle.defaultProps = {
  multiplier: 1,
}

DragGraphOutcomeCircle.propTypes = {
  heading: PropTypes.string,
  scaleDetail: PropTypes.string,
}

export default DragGraphOutcomeCircle
