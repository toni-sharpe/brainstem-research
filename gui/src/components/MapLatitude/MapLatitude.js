import React from 'react'

import ZoomPropType from 'prop-types/Zoom.prop-type'

import SvgLine from 'components/SvgLine/SvgLine'
import {
  WORLD_MAP_SVG_SCALE_WIDTH,
  WORLD_MAP_LATITUDE
} from 'util/Constant/BaseConstantList'

function MapLatitide({ zoom }) {
  const commonProps = {
    strokeOpacity: 1,
    strokeWidth: 2,
  }

  return WORLD_MAP_LATITUDE.map(lat => {
    const [
      position,
      degree,
      label,
    ] = lat

    const zoomPosition = position * zoom

    const stroke = label === 'E'
        ? '#f00'
        : label === 'R' || label === 'P'
          ? '#eee'
          : label === 'A'
            ? '#eee'
            : label === 'N'
              ? '#eee'
              : '#eee'

    return (
      <SvgLine
        {...commonProps}
        stroke={stroke}
        x={[0, zoomPosition]}
        y={[WORLD_MAP_SVG_SCALE_WIDTH, zoomPosition]}
      />
    )
  })
}

MapLatitide.propTypes = {
  zoom: ZoomPropType,
}

export default MapLatitide
