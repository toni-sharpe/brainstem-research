import PropTypes from 'prop-types'
import React from 'react'

import {
  calcVerticalZoomMarkTop,
  calcVerticalZoomMarkHeight,
} from 'util/UtilWorldMapZoomMark/UtilWorldMapZoomMark'

import './MapZoomMarkVertical.scss'

function MapZoomMarkVertical({ orientation, y, zoom }) {
  const height = calcVerticalZoomMarkHeight({ zoom })
  const top = calcVerticalZoomMarkTop({ y, zoom })

  return zoom !== 1 && (
    <div
      className={`map-zoom-mark-vertical__${orientation}`}
      style={{ height: `${height}vh`, top: `${top}vh` }}
    />
  )
}

MapZoomMarkVertical.propTypes = {
  orientation: PropTypes.oneOf(['left', 'right']),
  x: PropTypes.number,
  zoom: PropTypes.number,
}

export default MapZoomMarkVertical
