import PropTypes from 'prop-types'
import React from 'react'
import { type } from 'ramda'

import { isCountryCircle } from 'util/UtilMapCountry/UtilMapCountry'
import { calcPolygonCoordString } from 'util/UtilSvg/UtilSvg'
import SvgText from 'components/SvgText/SvgText'
import SvgCircle from 'components/SvgCircle/SvgCircle'
import MapAreaCenterPoint from 'components/MapAreaCenterPoint/MapAreaCenterPoint'
import SvgXyPropType from 'prop-types/SvgXy.prop-type'
import BorderCoordListPropType from 'prop-types/BorderCoordList.prop-type'

import './MapCountry.scss'

function MapCountry({
  borderCoordList,
  countryName,
  c,
  isSelected,
  zoom
}) {
  const isCircle = isCountryCircle({
    borderCoordList,
    countryName,
  })

  const coordList = borderCoordList.map(([a, b]) => ([a * zoom , b * zoom]))

  const selectedClass = isSelected ? ' is-selected' : ''
  const className = `map-country${selectedClass}`

  return isCircle && type(c, 'Object')
    ? (
      <SvgCircle
        extraClass={className}
        r={zoom <= 6
            ? Math.max(zoom / 2, 6)
            : zoom <= 20
              ? Math.max(zoom / 3, 10)
              : Math.max(zoom / 4, 16)
        }
        c
      />
    )
    : (
    <>
      <polygon
        className={className}
        points={calcPolygonCoordString({ coordList })}
        strokeOpacity={1}
      />
      { zoom >= 2
        ? (
          <SvgText
            extraClass={`map-country__name-${zoom <= 4 ? 'small' : 'large'}`}
            x={c.x}
            y={c.y}
            text={countryName}
          />
        )
        : (
          <MapAreaCenterPoint
            c={c}
            r={3}
          />
        )
      }
    </>
  )
}

MapCountry.propTypes = {
  borderCoordList: BorderCoordListPropType,
  countryName: PropTypes.string,
  c: SvgXyPropType,
  isSelected: PropTypes.bool,
  zoom: PropTypes.number,
}

export default MapCountry
