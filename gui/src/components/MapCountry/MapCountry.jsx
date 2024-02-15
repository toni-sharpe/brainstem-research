import { pluck } from 'ramda'
import React, { useState } from 'react'
import { variance } from 'simple-statistics'

import { calcPolygonCoordString } from 'util/UtilDragGraph/UtilDragGraph'
import SvgCircle from 'components/SvgCircle/SvgCircle'

import './MapCountry.scss'

function MapCountry({ borderCoordList, cx, cy, zoom }) {
  const xRange = variance(pluck(0, borderCoordList))
  const yRange = variance(pluck(1, borderCoordList))
  const isCircle = xRange < 3 && yRange < 3
  const coordList = borderCoordList.map(([a, b]) => ([a * zoom , b * zoom]))

  return isCircle
    ? (
      <SvgCircle
        extraClass='map-country'
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
        extraClass='map-country'
        points={calcPolygonCoordString({ coordList })}
        strokeOpacity={1}
      />
    )
}

export default MapCountry
