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
  isHovered,
  isSelected,
  labelC,
  zoom
}) {
  const isCircle = isCountryCircle({
    borderCoordList,
    countryName,
  })

  const coordList = borderCoordList.map(([a, b]) => ([a * zoom , b * zoom]))

  const selectedClass = isSelected ? ' is-selected' : ''
  const hoveredClass = isHovered ? ' is-hovered' : ''
  const className = `map-country${selectedClass}${hoveredClass}`
  const labelClassName = `map-country__name${selectedClass}${hoveredClass}`

  const border = isCircle && type(c, 'Object')
    ? (
      <SvgCircle
        extraClass={className}
        fill='#efe'
        r={zoom * 1.6}
        c={c}
      />
    )
    : (
    <polygon
      className={className}
      fill='#efe'
      points={calcPolygonCoordString({ coordList })}
      strokeOpacity={1}
    />
  )

  const label = zoom > 2
    ? (
      <SvgText
        extraClass={labelClassName}
        style={{ font: `bold ${zoom + 4 + zoom * 0.8}px sans-serif` }}
        text={countryName}
        x={labelC ? labelC.x : c.x}
        y={labelC ? labelC.y : c.y}
      />
    )
    : (
      <MapAreaCenterPoint
        c={c}
        r={1}
      />
    )

  return [border, label]
}

MapCountry.defaultProps = {
  labelC: undefined,
}

MapCountry.propTypes = {
  borderCoordList: BorderCoordListPropType,
  c: SvgXyPropType,
  countryName: PropTypes.string,
  isSelected: PropTypes.bool,
  isHovered: PropTypes.bool,
  labelC: SvgXyPropType,
  zoom: PropTypes.number,
}

export default MapCountry
