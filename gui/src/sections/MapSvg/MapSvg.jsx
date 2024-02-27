import { symmetricDifference, toPairs } from 'ramda'
import React, { useState } from 'react'

import { WORLD_MAP_SVG_SCALE } from 'util/Constant/BaseConstantList'
import {
  calcMapPolygonCoordGroup,
  calcZoomC,
  onMapCountryClickHandler,
} from 'util/UtilMapCountry/UtilMapCountry'

import DragGraph from 'sections/DragGraph/DragGraph'
import Histogram from 'sections/Histogram/Histogram'
import MapCountry from 'components/MapCountry/MapCountry'
import MapObjectDetailed from 'components/MapObjectDetailed/MapObjectDetailed'
import MapSvgControlList from 'sections/MapSvgControlList/MapSvgControlList'
import WorldBorderList from 'util/Constant/WorldBorderList'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { getJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'
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

  const borders = []
  const labels = []

  toPairs(
    WorldBorderList[currentYear]
  ).forEach(function([
    countryId, {
      countryBorder,
      countryCenter,
      countryName,
      labelCenter,
    }
  ]) {
    return countryBorder.forEach(function(subBorder) {
      const { borderCoordList, countryC } = calcMapPolygonCoordGroup({
        countryCenter,
        subBorder,
      })

      const c = calcZoomC({ c: countryC, zoom })

      const [b, l] = MapCountry({
        borderCoordList,
        countryId,
        countryName,
        c,
        labelC: calcZoomC({ c: labelCenter, zoom }),
        isHovered: currentHoveredCountryId === countryId,
        isSelected: currentCountryIdList.includes(countryId),
        zoom,
      })

      const onClick = onMapCountryClickHandler({
        c,
        countryId,
        currentCountryIdList,
        graphKey,
        setCurrentCountryList,
        setGraphOffset,
      })

      borders.push({ b, countryId, onClick })
      labels.push({ l, countryId, onClick })
    })
  })

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
            borders.map(({ b, countryId, onClick }, i) => {
              return (
                <g
                  key={`${countryId}-${i}`}
                  pointer-events="visiblePainted"
                  onMouseEnter={() => setCurrentHoveredCountryId(countryId)}
                  onMouseLeave={() => setCurrentHoveredCountryId(undefined)}
                  onClick={onClick}
                >
                  {b}
                </g>
              )
            })
          }
          {
            labels.map(({ l, countryId, onClick }) => {
              return (<g
                  pointer-events="visiblePainted"
                  onMouseEnter={() => setCurrentHoveredCountryId(countryId)}
                  onMouseLeave={() => setCurrentHoveredCountryId(undefined)}
                  onClick={onClick}>{l}</g>)
            })
          }





          <g className='row-layout space-childen'>
            { zoom >= 2 && currentCountryIdList.map(currentCountryId => {
              const data = mapDetailData[currentCountryId]

              const {
                countryCenter,
                labelCenter,
                countryName,
              } = WorldBorderList[currentYear][currentCountryId]

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
                  c={countryCenter || labelCenter}
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
