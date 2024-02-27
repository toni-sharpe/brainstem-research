import { init, last, symmetricDifference, toPairs } from 'ramda'
import React, { useState } from 'react'

import {
  WORLD_MAP_SVG_CENTER_X,
  WORLD_MAP_SVG_CENTER_Y,
  WORLD_MAP_SVG_SCALE,
} from 'util/Constant/BaseConstantList'
import DragGraph from 'sections/DragGraph/DragGraph'
import Histogram from 'sections/Histogram/Histogram'
import MapCountry from 'components/MapCountry/MapCountry'
import MapObjectDetailed from 'components/MapObjectDetailed/MapObjectDetailed'
import MapSvgControlList from 'sections/MapSvgControlList/MapSvgControlList'
import WorldBorderList from 'util/Constant/WorldBorderList'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { getJSONLocalStorage, setJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'
import { calcAccessibleHue } from 'util/UtilHue/UtilHue'

import './MapSvg.scss'

function MapSvg({
  currentYear,
  mapDetailProps,
  mapDetailData,
}) {
  const graphKey = 'mapZoom'
  const persisted = getJSONLocalStorage({ k: graphKey })

  const [currentCountryIdList, setCurrentCountryList] = useState([])
  const [currentHoveredCountryId, setCurrentHoveredCountryId] = useState()
  const [graphOffset, setGraphOffset] = useState(persisted?.graphOffset || [0, 0])
  const [zoom, setZoom] = useState(persisted?.zoom || 1)

  let currentCX = {}
  let currentCY = {}
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
            toPairs(WorldBorderList[currentYear]).map(([countryId, { countryBorder, countryCenter, countryName }], i) => {
              isCurrentCountry = currentCountryIdList.includes(countryId)

              return countryBorder.map((subBorder, j) => {
                // this can go once the full center code is sorted
                let borderCoordList
                let c
                const lastB = last(subBorder)
                if (lastB.c) {
                  c = lastB.c
                  borderCoordList = init(subBorder)
                } else {
                  c = countryCenter[0].c
                  borderCoordList = subBorder
                }

                const cx = c.x * zoom
                const cy = c.y * zoom

                if (isCurrentCountry) {
                  currentCX = { ...currentCX, [countryId]: cx }
                  currentCY = { ...currentCY, [countryId]: cy }
                }

                const offsetX = WORLD_MAP_SVG_CENTER_X - cx
                const offsetY = WORLD_MAP_SVG_CENTER_Y - cy

                return (
                  <g
                    key={`${countryId}${j}`}
                    pointer-events="visiblePainted"
                    onMouseEnter={() => setCurrentHoveredCountryId(countryId)}
                    onMouseLeave={() => setCurrentHoveredCountryId(undefined)}
                    onClick={() => {
                      const offset = [offsetX, offsetY]
                      setGraphOffset(offset)
                      setCurrentCountryList(symmetricDifference(
                        currentCountryIdList,
                        [countryId],
                      ))
                      setJSONLocalStorage({ k: graphKey, v: offset })
                    }}
                  >
                    <MapCountry
                      borderCoordList={borderCoordList}
                      countryId={countryId}
                      countryName={countryName}
                      c={{ x: cx, y: cy }}
                      isHovered={currentHoveredCountryId === countryId}
                      isSelected={isCurrentCountry}
                      zoom={zoom}
                    />
                  </g>
                )
              })
            })
          }
          <g className='row-layout space-childen'>
            { zoom >= 2 && currentCountryIdList.map(currentCountryId => {
              const data = mapDetailData[currentCountryId]
              const { countryName } = WorldBorderList[currentYear][currentCountryId]
              const mapDetailElement = data.dragData
                ? DragGraph
                : Histogram

              let mapDetailProps
              let h
              let w

              if (data && data?.histogramBarGroupList?.length) {
                const { length } = data.histogramBarGroupList
                const totalBars = length * data.barCountPerBlock
                const barWidth = 120 / totalBars

                h = 165
                w = barWidth * totalBars + ((barWidth - 1) * data.barMargin / 100)

                mapDetailProps = {
                  hueFn: calcAccessibleHue(),
                  isPopulated: true,
                  translationSet: { barList: [], groupBy: 'ty' },
                  histogramHeight: 12,
                  widthOverride: w,
                }
              }

              if (data && data?.dragData?.length) {
                h = 140
                w = 125

                mapDetailProps = {
                  buttonSize: 'small-tiny',
                  dragGraphLabelSize: 20,
                  dragGraphZoomList: [0.2, 0.5, 1, 2],
                  graphKey: currentCountryId,
                  includeExtreme: true,
                  isPopulated: true,
                  isOnMap: true,
                  labelValList: data.dragData,
                  pointButtonLabel: 'map',
                  scale: w,
                  scaleToLabelRatio: 2.5,
                  scaleR: w / 2,
                  showZoomLabel: false,
                  showExtremeButton: false,
                  zDefault: 0.2,
                }
              }

              return (
                <MapObjectDetailed
                  closeOnClick={() => {
                    setCurrentCountryList(symmetricDifference(
                      currentCountryIdList,
                      [currentCountryId],
                    ))
                  }}
                  countryId={currentCountryId}
                  countryName={countryName}
                  isPopulated={mapDetailProps?.isPopulated}
                  h={h}
                  w={w}
                  x={currentCX[currentCountryId]}
                  y={currentCY[currentCountryId]}
                >
                  {data && React.createElement(mapDetailElement, {
                    ...mapDetailProps,
                    ...data,
                  })}
                </MapObjectDetailed>
              )
            })}
          </g>
        </g>
      </SvgWrapper>
    </figure>
  )
}

MapSvg.defaultProps = {
  currentYear: 2024,
}

export default MapSvg
