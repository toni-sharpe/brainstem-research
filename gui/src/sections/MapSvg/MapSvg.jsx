import { init, last, symmetricDifference } from 'ramda'
import React, { useState } from 'react'

import {
  WORLD_MAP_SVG_CENTER_X,
  WORLD_MAP_SVG_CENTER_Y,
  WORLD_MAP_SVG_SCALE,
} from 'util/Constant/BaseConstantList'
import MapAreaCenterPoint from 'components/MapAreaCenterPoint/MapAreaCenterPoint'
import MapCountry from 'components/MapCountry/MapCountry'
import MapObjectSimple from 'components/MapObjectSimple/MapObjectSimple'
import MapObjectDetailed from 'components/MapObjectDetailed/MapObjectDetailed'
import MapSvgControlList from 'sections/MapSvgControlList/MapSvgControlList'
import WorldBorderList from 'util/Constant/WorldBorderList'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { getJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './MapSvg.scss'

function MapSvg({
  currentYear,
  mapDetailElement,
  mapDetailProps,
  mapDetailData,
}) {
  const graphKey = 'mapZoom'
  const persisted = getJSONLocalStorage({ k: graphKey })

  const [currentCountryList, setCurrentCountryList] = useState([])
  const [graphOffset, setGraphOffset] = useState([0, 0])
  const [zoom, setZoom] = useState(persisted?.zoom || 1)

  let currentCX = {}
  let currentCy = {}
  let isCurrentCountry

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
          {
            WorldBorderList[currentYear].map(({ countryBorder, countryName }, i) => {
              isCurrentCountry = currentCountryList.includes(countryName)

              return countryBorder.map((subBorder, j) => {
                const { c } = last(subBorder)
                const borderCoordList = init(subBorder)

                const cx = c.x * zoom
                const cy = c.y * zoom

                if (isCurrentCountry) {
                  currentCX = { ...currentCX, [countryName]: cx }
                  currentCy = { ...currentCy, [countryName]: cy }
                }

                const offsetX = WORLD_MAP_SVG_CENTER_X - cx
                const offsetY = WORLD_MAP_SVG_CENTER_Y - cy

                return (
                  <g
                    key={`${c.x}${c.y}`}
                    onClick={() => {
                      setGraphOffset([offsetX, offsetY])
                      setCurrentCountryList(symmetricDifference(
                        currentCountryList,
                        [countryName],
                      ))
                    }}
                  >
                    <MapCountry
                      borderCoordList={borderCoordList}
                      countryName={countryName}
                      c={{ x: cx, y: cy }}
                      isSelected={isCurrentCountry}
                      zoom={zoom}
                    />
                    { zoom >= 2 && zoom <= 3 && (
                      <MapObjectSimple
                        countryName={countryName}
                        size='small'
                        h={10}
                        w={48}
                        x={cx}
                        y={cy}
                      />
                    ) }
                    { (zoom >= 4 && !isCurrentCountry) && (
                      <MapObjectSimple
                        countryName={countryName}
                        size='medium'
                        h={18}
                        w={80}
                        x={cx}
                        y={cy}
                      />
                    ) }
                    { zoom < 2 && (
                      <MapAreaCenterPoint
                        c={{ x: cx, y: cy }}
                        r={zoom}
                      />
                    ) }
                  </g>
                )
              })
            })
          }
          { zoom >= 4 && currentCountryList.map(currentCountry => {
            let h = 50
            let w = 50
            const histogramHeight = 12

            const data = mapDetailData[currentCountry]
            if (data && data?.histogramBarGroupList?.length) {
              const { length } = data.histogramBarGroupList
              const totalBars = length * data.barCountPerBlock
              const barWidth = 120 / totalBars

              h = 165
              w = barWidth * totalBars + ((barWidth - 1) * data.barMargin / 100)
            }
            return (
              <MapObjectDetailed
                closeOnClick={() => {
                  setCurrentCountryList(symmetricDifference(
                    currentCountryList,
                    [currentCountry],
                  ))
                }}
                countryName={currentCountry}
                size='medium'
                h={h}
                w={w}
                x={currentCX[currentCountry]}
                y={currentCy[currentCountry]}
              >
                {data && React.createElement(mapDetailElement, {
                  ...mapDetailProps,
                  ...data,
                  graphLabel: currentCountry,
                  histogramHeight,
                  widthOverride: w,
                })}
              </MapObjectDetailed>
            )
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
