import PropTypes from 'prop-types'
import React from 'react'

import { WORLD_MAP_FOCUS_ZONE } from 'util/Constant/BaseConstantList'
import {
  calcHorizontalZoomMarkLeft,
  calcHorizontalZoomMarkWidth,
} from 'util/UtilWorldMapZoomMark/UtilWorldMapZoomMark'

import './MapZoomMarkHorizontal.scss'

function MapZoomMarkHorizontal({
  orientation,
  showFocusZone,
  x,
  zoom,
}) {
  const width = calcHorizontalZoomMarkWidth({ zoom })
  const left = calcHorizontalZoomMarkLeft({ x, zoom })

  return zoom !== 1 && (
    <div
      className={`map-zoom-mark-horizontal__${orientation}`}
      style={{ width: `${width}%`, left: `${left}%` }}
    >
      { showFocusZone && orientation === 'top' && (
        <div>
          <div
            className='map-zoom-mark-horizontal__left-line'
          />
          <div
            className='map-zoom-mark-horizontal__right-line'
          />
        </div>
      ) }
    </div>
  )
}

MapZoomMarkHorizontal.defaultProps = {
  showFocusZone: WORLD_MAP_FOCUS_ZONE,
  zoom: 1,
}

MapZoomMarkHorizontal.propTypes = {
  orientation: PropTypes.oneOf(['top', 'bottom']),
  showFocusZone: PropTypes.bool,
  x: PropTypes.number,
  zoom: PropTypes.number,
}

export default MapZoomMarkHorizontal
