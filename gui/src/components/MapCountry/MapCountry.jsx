import { pluck } from 'ramda'
import React from 'react'
import { variance } from 'simple-statistics'

import { calcPolygonCoordString } from 'util/UtilDragGraph/UtilDragGraph'
import SvgCircle from 'components/SvgCircle/SvgCircle'

import './MapCountry.scss'

function MapCountry({
  borderCoordList,
  countryName,
  cx,
  cy,
  isSelected,
  zoom
}) {
  const xRange = variance(pluck(0, borderCoordList))
  const yRange = variance(pluck(1, borderCoordList))
  const isCircle =
    xRange < 2
    &&
    yRange < 2
    &&
    ![
      'Kosovo',
      'Palestine',
      'Azerbaijan',
      'Luxembourg',
    ].includes(countryName)
  const coordList = borderCoordList.map(([a, b]) => ([a * zoom , b * zoom]))

  const selectedClass = isSelected ? ' is-selected' : ''
  const fadeAwayClass = !isSelected && zoom >= 7 ? ' drop-back' : ''
  const className = `map-country${selectedClass}${fadeAwayClass}`

  return isCircle
    ? (
      <SvgCircle
        extraClass={className}
        r={zoom <= 6
            ? Math.max(zoom / 2, 6)
            : zoom <= 20
              ? Math.max(zoom / 3, 10)
              : Math.max(zoom / 4, 16)
        }
        c={{ x: cx, y: cy }}
      />
    )
    : (
      <polygon
        className={className}
        points={calcPolygonCoordString({ coordList })}
        strokeOpacity={1}
      />
    )
}

export default MapCountry
