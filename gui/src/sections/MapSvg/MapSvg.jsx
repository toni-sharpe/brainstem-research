import { init, last } from 'ramda'
import React, { useState } from 'react'

import {
  WORLD_MAP_SVG_CENTER_X,
  WORLD_MAP_SVG_CENTER_Y,
  WORLD_MAP_SVG_SCALE,
} from 'util/Constant/BaseConstantList'
import MapAreaCenterPoint from 'components/MapAreaCenterPoint/MapAreaCenterPoint'
import MapCountry from 'components/MapCountry/MapCountry'
import MapObjectSimple from 'components/MapObjectSimple/MapObjectSimple'
import MapSvgControlList from 'sections/MapSvgControlList/MapSvgControlList'
import WorldBorderList from 'util/Constant/WorldBorderList'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { getJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './MapSvg.scss'

function MapSvg({ currentYear, data }) {
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
          { WorldBorderList[currentYear].map(({ countryBorder, countryName }, i) => {
              return countryBorder.map((subBorder, j) => {
                const { c } = last(subBorder)
                const borderCoordList = init(subBorder)

                const cx = c.x * zoom
                const cy = c.y * zoom

                const offsetX = WORLD_MAP_SVG_CENTER_X - cx
                const offsetY = WORLD_MAP_SVG_CENTER_Y - cy

                return (
                  <g
                    key={`${c.x}${c.y}`}
                    onClick={() => setGraphOffset(`${offsetX} ${offsetY}`)}
                  >
                    <MapCountry
                      borderCoordList={borderCoordList}
                      countryName={countryName}
                      cx={cx}
                      cy={cy}
                      zoom={zoom}
                    />
                    { zoom > 2 && zoom <= 5 && (
                      <MapObjectSimple
                        countryName={countryName}
                        size='small'
                        h={10}
                        w={48}
                        x={cx}
                        y={cy}
                      />
                    ) }
                    { zoom > 5 && zoom < 10 && (
                      <MapObjectSimple
                        countryName={countryName}
                        size='medium'
                        h={18}
                        w={80}
                        x={cx}
                        y={cy}
                      />
                    ) }
                    { zoom > 10 && (
                      <MapObjectSimple
                        countryName={countryName}
                        size='medium'
                        h={18}
                        w={80}
                        x={cx}
                        y={cy}
                      />
                    ) }
                    { zoom < 3 && (
                      <MapAreaCenterPoint
                        c={{ x: cx, y: cy }}
                        r={zoom}
                      />
                    ) }
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

MapSvg.defaultProps = {
  currentYear: 2024,
}

export default MapSvg
