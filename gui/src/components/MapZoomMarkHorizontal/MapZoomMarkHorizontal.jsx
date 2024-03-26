import PropTypes from 'prop-types'
import React from 'react'

import {
  calcHorizontalZoomMarkLeft,
  calcHorizontalZoomMarkWidth,
} from 'util/UtilWorldMapZoomMark/UtilWorldMapZoomMark'

import './MapZoomMarkHorizontal.scss'

function MapZoomMarkHorizontal({ orientation, x, zoom }) {
  const width = calcHorizontalZoomMarkWidth({ zoom })
  const left = calcHorizontalZoomMarkLeft({ x, zoom })

  return zoom !== 1 && (
    <div
      className={`map-zoom-mark-horizontal__${orientation}`}
      style={{ width: `${width}%`, left: `${left}%` }}
    />
  )
}

MapZoomMarkHorizontal.propTypes = {
  orientation: PropTypes.oneOf(['top', 'bottom']),
  x: PropTypes.number,
  zoom: PropTypes.number,
}

export default MapZoomMarkHorizontal
