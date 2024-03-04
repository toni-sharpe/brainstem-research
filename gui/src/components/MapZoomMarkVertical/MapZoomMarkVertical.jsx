import PropTypes from 'prop-types'
import React from 'react'

import {
  WORLD_MAP_ON_SCREEN_HEIGHT,
  WORLD_MAP_SVG_SCALE_HEIGHT,
} from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'

import './MapZoomMarkVertical.scss'

function MapZoomMarkVertical({ orientation, y, zoom }) {
  const height = (WORLD_MAP_ON_SCREEN_HEIGHT / zoom).toFixed(1)
  const top = numberPrecision({
    n: (
      (Math.abs(y))
      /
      (
        WORLD_MAP_SVG_SCALE_HEIGHT
        *
        zoom
      )
      *
      WORLD_MAP_ON_SCREEN_HEIGHT
    )
  })

  return zoom !== 1 && (
    <div
      className={`map-zoom-mark-vertical__${orientation}`}
      style={{ height: `${height}vh`, top: `${top}vh` }}
      tabIndex={0}
    />
  )
}

MapZoomMarkVertical.propTypes = {
  orientation: PropTypes.oneOf(['left', 'right']),
  x: PropTypes.number,
  zoom: PropTypes.number,
}

export default MapZoomMarkVertical
