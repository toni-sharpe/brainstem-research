import { last, init } from 'ramda'
import React, { useState } from 'react'

import { calcPolygonCoordString } from 'util/UtilDragGraph/UtilDragGraph'
import {
  WORLD_MAP_SVG_CENTER_X,
  WORLD_MAP_SVG_CENTER_Y,
  WORLD_MAP_SVG_SCALE,
} from 'util/Constant/BaseConstantList'
import MapAreaCenterPoint from 'components/MapAreaCenterPoint/MapAreaCenterPoint'
import MapObjectSimple from 'components/MapObjectSimple/MapObjectSimple'
import MapSvgControlList from 'sections/MapSvgControlList/MapSvgControlList'
import MapBorderList from 'util/Constant/MapBorderList'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { getJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './MapSvg.scss'

function MapSvg() {
  const graphKey = 'mapZoom'
  const [graphOffset, setGraphOffset] = useState('0 0')
  const persisted = getJSONLocalStorage({ k: graphKey })

  const [zoom, setZoom] = useState(persisted?.zoom || 1)

  return (
    <figure className='map-svg'>
      <MapSvgControlList
        graphKey={graphKey}
        graphOffset={graphOffset}
        persisted={persisted}
        setGraphOffset={setGraphOffset}
        setZoom={setZoom}
        zoom={zoom}
      />
      <SvgWrapper
        extraClass='map-svg__svg'
        k='world-map-svg'
        svgScale={`0 0 ${WORLD_MAP_SVG_SCALE}`}
      >
        <g key='guides' transform={`translate(${graphOffset})`}>
          { MapBorderList.map(({ mapBorder }, i) => {
              return mapBorder.map((subBorder, j) => {
                const { c } = last(subBorder)
                const borderCoords = init(subBorder)

                const cx = c.x * zoom
                const cy = c.y * zoom

                const offsetX = WORLD_MAP_SVG_CENTER_X - cx
                const offsetY = WORLD_MAP_SVG_CENTER_Y - cy

                const coordList = borderCoords.map(([a, b]) => ([a * zoom , b * zoom]))

                return (
                  <g
                    key={`${c.x}${c.y}`}
                    onClick={() => setGraphOffset(`${offsetX} ${offsetY}`)}
                  >
                    <polygon
                      fill={'#4c4'}
                      fillOpacity={0.2}
                      points={calcPolygonCoordString({ coordList })}
                      stroke={'#484'}
                      strokeOpacity={1}
                      strokeWidth={0.5}
                    />
                    <MapObjectSimple x={cx} y={cy} w={24} h={10} />
                    <MapAreaCenterPoint c={{ x: cx, y: cy }} />
                  </g>
                )
              })
            })
          })}
        </g>
      </SvgWrapper>
    </figure>
  )
}

export default MapSvg
