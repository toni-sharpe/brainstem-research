import { toPairs } from 'ramda'
import React, { useState } from 'react'

import {
  WORLD_MAP_SVG_SCALE,
  WORLD_MAP_SVG_SCALE_HEIGHT,
  WORLD_MAP_SVG_SCALE_WIDTH,
} from 'util/Constant/BaseConstantList'
import {
  calcMapPolygonCoordGroup,
  calcZoomC,
  onMapCountryClickHandler,
  countryElementMapperFn,
} from 'util/UtilMapCountry/UtilMapCountry'
import { numberPrecision } from 'util/Util/Util'

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
    <figure className='map-svg'>
      <MapSvgControlList
        graphKey={graphKey}
        graphOffset={graphOffset}
        persisted={persisted}
        setGraphOffset={setGraphOffset}
        setZoom={setZoom}
        zoom={zoom}
      />
      { zoom !== 1 && (
        <div
          className='map-svg__zoom-guide map-svg__east-west-guide--top'
          style={{
            width: `${(100 / zoom).toFixed(1)}%`,
            left: `${numberPrecision({ n: (Math.abs(graphOffset[0]) / (WORLD_MAP_SVG_SCALE_WIDTH * zoom) * 100) })}%`,
          }}/>
      ) }
      <div className='row-layout'>
        { zoom !== 1 && (
          <div
            className='map-svg__zoom-guide map-svg__north-south-guide--right'
            style={{
            height: `${(77 / zoom).toFixed(1)}vh`,
            top: `${numberPrecision({ n: ((Math.abs(graphOffset[1])) / (WORLD_MAP_SVG_SCALE_HEIGHT * zoom) * 77) })}vh`,
          }}/>
      ) }
        <SvgWrapper
          extraClass='map-svg__svg'
          k='world-map-svg'
          svgScale={`0 0 ${WORLD_MAP_SVG_SCALE}`}
        >
          <g key='guides' transform={`translate(${graphOffset})`}>
            { borders.map(borderMapFn({ setCurrentHoveredCountryId })) }
            { labels.map(countryElementMapperFn({ elementKey: 'l', setCurrentHoveredCountryId })) }

            <text x={500 * zoom} y={250 * zoom}>{graphOffset}</text>

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
        { zoom !== 1 && (
          <div
            className='map-svg__zoom-guide map-svg__north-south-guide--left'
            style={{
            height: `${(77 / zoom).toFixed(1)}vh`,
            top: `${numberPrecision({ n: ((Math.abs(graphOffset[1])) / (WORLD_MAP_SVG_SCALE_HEIGHT * zoom) * 77) })}vh`,
          }}/>
      ) }
      </div>
      { zoom !== 1 && (
        <div
          className='map-svg__zoom-guide map-svg__east-west-guide--bottom'
          style={{
            width: `${(100 / zoom).toFixed(1)}%`,
            left: `${numberPrecision({ n: (Math.abs(graphOffset[0]) / (WORLD_MAP_SVG_SCALE_WIDTH * zoom) * 100) })}%`,
          }}/>
      ) }
    </figure>
  )
}

MapSvg.defaultProps = {
  borderMapFn: ({ setCurrentHoveredCountryId }) => countryElementMapperFn({ elementKey: 'b', setCurrentHoveredCountryId }),
  currentYear: 2024,
  selectedCountryMapFn: tempTestMapperFn,
}

export default MapSvg
