import { toPairs } from 'ramda'
import React, { useState } from 'react'

import { WORLD_MAP_SVG_SCALE } from 'util/Constant/BaseConstantList'
import {
  calcMapPolygonCoordGroup,
  calcZoomC,
  onMapCountryClickHandler,
  countryElementMapperFn,
} from 'util/UtilMapCountry/UtilMapCountry'
import { handleOnKeyDown } from 'util/UtilMapControlList/UtilMapControlList'

import MapZoomMarkHorizontal from 'components/MapZoomMarkHorizontal/MapZoomMarkHorizontal'
import MapZoomMarkVertical from 'components/MapZoomMarkVertical/MapZoomMarkVertical'
import MapCountry from 'components/MapCountry/MapCountry'
import MapSvgControlList from 'sections/MapSvgControlList/MapSvgControlList'
import WorldBorderList from 'util/Constant/WorldBorderList'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { getJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import tempTestMapperFn from './tempTestMapperFn'
import './MapSvg.scss'

function MapSvg({
  borderMapFn,
  currentYear,
  mapDetailProps,
  mapDetailData,
  selectedCountryMapFn,
}) {
  const graphKey = 'mapZoom'
  const persisted = getJSONLocalStorage({ k: graphKey })

  const [currentCountryIdList, setCurrentCountryList] = useState(persisted?.currentCountryIdList || [])
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
        countryId,
        currentCountryIdList,
        graphKey,
        persisted,
        setCurrentCountryList,
      })

      borders.push({ b, countryId, onClick })
      labels.push({ l, countryId, onClick })
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
          svgScale={`0 0 ${WORLD_MAP_SVG_SCALE}`}
        >
          <g key='guides' transform={`translate(${graphOffset})`}>
            { borders.map(borderMapFn({ setCurrentHoveredCountryId })) }
            { labels.map(countryElementMapperFn({ elementKey: 'l', setCurrentHoveredCountryId })) }

            <g className='row-layout space-childen' tabIndex={0}>
              { zoom >= 2
                &&
                currentCountryIdList.map(
                  selectedCountryMapFn({
                    currentCountryIdList,
                    currentYear,
                    mapDetailData,
                    setCurrentCountryList,
                    zoom,
                  })
                )
              }
            </g>
          </g>
        </SvgWrapper>
        <MapZoomMarkVertical orientation='right' y={graphOffset[1]} zoom={zoom} />
      </div>
      <MapZoomMarkHorizontal orientation='bottom' x={graphOffset[0]} zoom={zoom} />
    </figure>
  )
}

MapSvg.defaultProps = {
  borderMapFn: ({ setCurrentHoveredCountryId }) => countryElementMapperFn({ elementKey: 'b', setCurrentHoveredCountryId }),
  currentYear: 2024,
  selectedCountryMapFn: tempTestMapperFn,
}

export default MapSvg
