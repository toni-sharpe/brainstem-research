import PropTypes from 'prop-types'
import React from 'react'

import {
  WORLD_MAP_ON_SCREEN_WIDTH,
  WORLD_MAP_SVG_SCALE_WIDTH,
} from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'

import './MapZoomMarkHorizontal.scss'

function MapZoomMarkHorizontal({ orientation, x, zoom }) {
  const width = (WORLD_MAP_ON_SCREEN_WIDTH / zoom).toFixed(1)
  const left = numberPrecision({
    n: (
      Math.abs(x)
      /
      (
        WORLD_MAP_SVG_SCALE_WIDTH
        *
        zoom
      )
      *
      WORLD_MAP_ON_SCREEN_WIDTH
    )
    +
    (
      100
      -
      WORLD_MAP_ON_SCREEN_WIDTH
    )
    /
    2
  })

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
