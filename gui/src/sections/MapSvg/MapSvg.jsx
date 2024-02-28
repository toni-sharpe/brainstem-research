import { toPairs } from 'ramda'
import React, { useState } from 'react'

import { WORLD_MAP_SVG_SCALE } from 'util/Constant/BaseConstantList'
import {
  calcMapPolygonCoordGroup,
  calcZoomC,
  onMapCountryClickHandler,
  countryElementMapperFn,
} from 'util/UtilMapCountry/UtilMapCountry'

import MapCountry from 'components/MapCountry/MapCountry'
import MapSvgControlList from 'sections/MapSvgControlList/MapSvgControlList'
import WorldBorderList from 'util/Constant/WorldBorderList'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { getJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import tempTestMapperFn from './tempTestMapperFn'
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
          { borders.map(countryElementMapperFn({ elementKey: 'b', setCurrentHoveredCountryId })) }
          { labels.map(countryElementMapperFn({ elementKey: 'l', setCurrentHoveredCountryId })) }

          <g className='row-layout space-childen'>
            { zoom >= 2
              &&
              currentCountryIdList.map(
                tempTestMapperFn({
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
    </figure>
  )
}

MapSvg.defaultProps = {
  currentYear: 2024,
}

export default MapSvg
