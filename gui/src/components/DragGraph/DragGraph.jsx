import i18next from 'util/i18next/i18next'
import React from 'react'
import PropTypes from 'prop-types'

import {
  calcAngleInRadians,
  calcBaseLineCoordList,
  calcPolygonCoordList,
  calcPolygonCoordString,
} from 'util/UtilDragGraph/UtilDragGraph'

function DragGraph({
  color,
  valList,
}) {
  const angle = calcAngleInRadians({ valList })
  const dragLineCoordList = calcPolygonCoordList({ angle, valList })
  const baseLineCoordList = calcBaseLineCoordList({ angle, valList })

  return (
    <svg
      viewBox='0 0 100 100'
      xmlns="http://www.w3.org/2000/svg"
    >
      { baseLineCoordList.map(([x, y], i) => {
        return (
          <line x1='50' y1='50' x2={x} y2={y} stroke='#eee' />
        )
      })}
      <polygon
        points={calcPolygonCoordString({ coordList: dragLineCoordList })}
        stroke={color}
        fill={color}
        fill-opacity='0.3'
      />
    </svg>
  )
}

DragGraph.propTypes = {
  valList: PropTypes.arrayOf(PropTypes.number),
}

export default DragGraph
