import React from 'react'

import ZoomPropType from 'prop-types/Zoom.prop-type'

import SvgLine from 'components/SvgLine/SvgLine'
import {
  WORLD_MAP_SVG_SCALE_HEIGHT,
  WORLD_MAP_LONGITUDE,
} from 'util/Constant/BaseConstantList'

function MapLongitude({ zoom }) {
  const commonProps = {
    strokeOpacity: 1,
    strokeWidth: 0.5,
  }

  return WORLD_MAP_LONGITUDE.map(lng => {
    const [
      position,
      degree,
      label,
    ] = lng

    const zoomPosition = position * zoom

    const stroke = label === 'G'
      ? '#5da'
      : '#ccc'

    // return (
    //   <SvgLine
    //     {...commonProps}
    //     stroke={stroke}
    //     x={[zoomPosition, 0]}
    //     y={[zoomPosition, WORLD_MAP_SVG_SCALE_HEIGHT]}
    //   />
    // )
  })
}

MapLongitude.propTypes = {
  zoom: ZoomPropType,
}

export default MapLongitude
