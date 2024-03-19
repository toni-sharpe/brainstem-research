import React from 'react'
import PropTypes from 'prop-types'

import {
  WORLD_MAP_SVG_SCALE_HEIGHT,
  WORLD_MAP_SVG_SCALE_WIDTH,
  LATITUDE_BUFFER,
} from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'

function MapEdgeBuffer({
  graphOffset,
  zoom
}) {
  const latBufferZoom = LATITUDE_BUFFER * zoom
  const mapHeightZoom = WORLD_MAP_SVG_SCALE_HEIGHT * zoom
  const mapWidthZoom = WORLD_MAP_SVG_SCALE_WIDTH * zoom

  return (
    <g>
      <line
        stroke='#149'
        strokeOpacity={0.4 + 0.6 / zoom}
        strokeWidth={1 * zoom}
        transform={`translate(${graphOffset})`}
        x1={numberPrecision({ n: latBufferZoom })}
        x2={numberPrecision({ n: latBufferZoom })}
        y1={numberPrecision({ n: latBufferZoom })}
        y2={numberPrecision({ n: mapHeightZoom - latBufferZoom })}
      />
      <line
        stroke='#149'
        strokeOpacity={0.4 + 0.6 / zoom}
        strokeWidth={1 * zoom}
        transform={`translate(${graphOffset})`}
        x1={numberPrecision({ n: latBufferZoom })}
        x2={numberPrecision({ n: mapWidthZoom - latBufferZoom })}
        y1={numberPrecision({ n: mapHeightZoom - latBufferZoom })}
        y2={numberPrecision({ n: mapHeightZoom - latBufferZoom })}
      />
      <line
        stroke='#149'
        strokeOpacity={0.4 + 0.6 / zoom}
        strokeWidth={1 * zoom}
        transform={`translate(${graphOffset})`}
        x1={numberPrecision({ n: mapWidthZoom - latBufferZoom })}
        x2={numberPrecision({ n: mapWidthZoom - latBufferZoom })}
        y1={numberPrecision({ n: mapHeightZoom - latBufferZoom })}
        y2={numberPrecision({ n: latBufferZoom })}
      />
      <line
        stroke='#149'
        strokeOpacity={0.4 + 0.6 / zoom}
        strokeWidth={1 * zoom}
        transform={`translate(${graphOffset})`}
        x1={numberPrecision({ n: mapWidthZoom - latBufferZoom })}
        x2={numberPrecision({ n: latBufferZoom })}
        y1={numberPrecision({ n: latBufferZoom })}
        y2={numberPrecision({ n: latBufferZoom })}
      />
    </g>
  )
}

MapEdgeBuffer.defaultProps = {
  strokeOpacity: 1.0,
  strokeWidth: 1,
}

MapEdgeBuffer.propTypes = {
  stroke: PropTypes.string,
  x: PropTypes.arrayOf(PropTypes.number),
  y: PropTypes.arrayOf(PropTypes.number),
}

export default MapEdgeBuffer
