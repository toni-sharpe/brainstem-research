import {
  filter,
  keys,
  mergeDeepRight,
  pipe,
  reduce,
  toPairs,
} from 'ramda'
import React, { useState } from 'react'

import { WORLD_MAP_SVG_SCALE } from 'util/Constant/BaseConstantList'
import {
  buildMapCountryElement,
  calcMapPolygonCoordGroup,
  calcZoomC,
  onMapCountryClickHandler,
} from 'util/UtilMapCountry/UtilMapCountry'
import { handleOnKeyDown } from 'util/UtilMapControlList/UtilMapControlList'

import MapEdgeBuffer from 'components/MapEdgeBuffer/MapEdgeBuffer'
import MapZoomMarkHorizontal from 'components/MapZoomMarkHorizontal/MapZoomMarkHorizontal'
import MapZoomMarkVertical from 'components/MapZoomMarkVertical/MapZoomMarkVertical'
import MapCountry from 'components/MapCountry/MapCountry'
import MapSvgControlList from 'sections/MapSvgControlList/MapSvgControlList'
import WorldBorderList from 'util/Constant/WorldBorderList'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { getJsonLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './MapSvg.scss'

function MapSvg({
  currentYear,
  mapDetailData,
  selectedCountryMapFn,
  showLabelList,
  svgScale,
}) {
  const graphKey = 'mapZoom'
  const persisted = getJsonLocalStorage({ k: graphKey })

  const [currentCountryIdList, setCurrentCountryList] = useState(persisted?.currentCountryIdList || [])
  const [currentHoveredCountryId, setCurrentHoveredCountryId] = useState()
  const [graphOffset, setGraphOffset] = useState(persisted?.graphOffset || [0, 0])
  const [zoom, setZoom] = useState(persisted?.zoom || 1)

  const borderList = []
  const labelList = []

  const baseWorldBorderList = WorldBorderList[0]

  const worldBorderUpdateYearList = pipe(
    keys,
    filter(year => year <= currentYear),
    reduce((a, c) => mergeDeepRight(a, WorldBorderList[c]), baseWorldBorderList),
    toPairs,
  )(WorldBorderList)

  worldBorderUpdateYearList.forEach(function([
    countryId, {
      countryBorder,
      countryCenter,
      countryName,
      labelCenter,
    }
  ]) {
    return (countryBorder || [null]).forEach(function(subBorder) {
      const { borderCoordList, countryC } = calcMapPolygonCoordGroup({
        countryCenter,
        subBorder,
      })

      const {
        fill,
        stroke,
      } = mapDetailData[countryId] && mapDetailData[countryId][1]
          ? mapDetailData[countryId][1]
          : {}

      const [b, l] = MapCountry({
        borderCoordList,
        c: calcZoomC({ c: countryC, zoom }),
        countryId,
        countryName,
        fill,
        stroke,
        isHovered: currentHoveredCountryId === countryId,
        isSelected: currentCountryIdList.includes(countryId),
        labelC: labelCenter && !countryC.label
          ? { ...calcZoomC({ c: labelCenter, zoom }), countryName }
          : countryC.label
            ? { ...calcZoomC({ c: countryC.label, zoom }), countryName: countryC.label.countryName }
            : null,
        showCountryId: false,
        zoom,
      })

      const onClick = onMapCountryClickHandler({
        countryId,
        currentCountryIdList,
        graphKey,
        persisted,
        setCurrentCountryList,
      })

      borderList.push({ b, countryId, onClick })
      labelList.push({ l, countryId, onClick })
    })
  })

  return (
    <figure
      className='map-svg'
      onKeyDown={({ keyCode }) => handleOnKeyDown({
        graphKey,
        graphOffset,
        keyCode,
        persisted,
        setGraphOffset,
        setZoom,
        zoom,
      })}
    >
      <MapSvgControlList
        graphKey={graphKey}
        graphOffset={graphOffset}
        persisted={persisted}
        setGraphOffset={setGraphOffset}
        setZoom={setZoom}
        zoom={zoom}
      />
      <MapZoomMarkHorizontal orientation='top' x={graphOffset[0]} zoom={zoom} />
      <div className='row-layout'>
        <MapZoomMarkVertical orientation='left' y={graphOffset[1]} zoom={zoom} />
        <SvgWrapper
          ariaLabel='world map'
          extraClass='map-svg__svg'
          k='world-map-svg'
          region
          svgScale={`${svgScale}`}
        >
          <defs>
            <pattern id="star" viewBox="0,0,10,10" patternUnits="userSpaceOnUse" width="1%" height="1%">
              <circle
                cx='5'
                cy='5'
                r='6'
                fill='#44e'
                fillOpacity='0.3'
                strokeWidth='6'
                stroke='#fff'
                strokeOpacity='0.9'
              />
            </pattern>
          </defs>
          <MapEdgeBuffer
            graphOffset={graphOffset}
            zoom={zoom}
          />
          <g key='guides' transform={`translate(${graphOffset})`}>
            { borderList.map(({ b, countryId, onClick }, i) => {
              return (
                <g {...buildMapCountryElement({
                  b,
                  countryId,
                  i,
                  onClick,
                  setCurrentHoveredCountryId,
                })} />
              )
            })}
            { showLabelList && labelList.map(({ countryId, l, onClick }, i) => {
              return (
                <g {...buildMapCountryElement({
                  countryId,
                  i,
                  onClick,
                  setCurrentHoveredCountryId
                })}>
                  {l}
                </g>
              )
            })}
          </g>
        </SvgWrapper>
        <MapZoomMarkVertical orientation='right' y={graphOffset[1]} zoom={zoom} />
      </div>
      <MapZoomMarkHorizontal orientation='bottom' x={graphOffset[0]} zoom={zoom} />
    </figure>
  )
}

MapSvg.defaultProps = {
  currentYear: 0,
  showLabelList: true,
  svgScale: WORLD_MAP_SVG_SCALE,
}

export default MapSvg
