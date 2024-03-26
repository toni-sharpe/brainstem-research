import PropTypes from 'prop-types'
import React from 'react'

import { WORLD_MAP_FOCUS_ZONE } from 'util/Constant/BaseConstantList'
import {
  calcVerticalZoomMarkTop,
  calcVerticalZoomMarkHeight,
} from 'util/UtilWorldMapZoomMark/UtilWorldMapZoomMark'

import './MapZoomMarkVertical.scss'

function MapZoomMarkVertical({
  orientation,
  showFocusZone,
  y,
  zoom,
}) {
  const height = calcVerticalZoomMarkHeight({ zoom })
  const top = calcVerticalZoomMarkTop({ y, zoom })

  return zoom !== 1 && (
    <div
      className={`map-zoom-mark-vertical__${orientation}`}
      style={{ height: `${height}vh`, top: `${top}vh` }}
    >
      { showFocusZone && orientation === 'left' && (
        <div>
          <div
            className='map-zoom-mark-vertical__top-line'
          />
          <div
            className='map-zoom-mark-vertical__bottom-line'
          />
        </div>
      ) }
    </div>
  )
}

MapZoomMarkVertical.defaultProps = {
  showFocusZone: WORLD_MAP_FOCUS_ZONE,
  zoom: 1,
}

MapZoomMarkVertical.propTypes = {
  orientation: PropTypes.oneOf(['left', 'right']),
  showFocusZone: PropTypes.bool,
  y: PropTypes.number,
  zoom: PropTypes.number,
}

export default MapZoomMarkVertical
