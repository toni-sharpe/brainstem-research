import React from 'react'
import PropTypes from 'prop-types'

import {
  calcAngleInRadians,
  calcBaseLineCoordList,
  calcPolygonCoordList,
  calcPolygonCoordString,
} from 'util/UtilDragGraph/UtilDragGraph'
import LabelValPropType from 'prop-types/LabelVal.prop-type'

import './DragGraph.scss'

function DragGraph({
  color,
  heading,
  labelValList,
}) {
  const valList = labelValList.map(([_, val]) => val)
  const angle = calcAngleInRadians({ valList })
  const dragLineCoordList = calcPolygonCoordList({ angle, valList })
  const baseLineCoordList = calcBaseLineCoordList({ angle, valList })

  return (
    <div className='drag-graph column-layout space-children--column'>
      <h2 className='drag-graph__heading'>{heading}</h2>
      <svg
        viewBox='0 0 100 100'
        xmlns="http://www.w3.org/2000/svg"
      >
        { baseLineCoordList.map(([x, y], i) => {
          return (
            <line key={`${x}`} x1='50' y1='50' x2={x} y2={y} stroke='#eee' />
          )
        })}
        <polygon
          points={calcPolygonCoordString({ coordList: dragLineCoordList })}
          stroke={color}
          fill={color}
          fillOpacity='0.3'
        />
      </svg>
    </div>
  )
}

DragGraph.propTypes = {
  labelValList: PropTypes.arrayOf(LabelValPropType),
}

export default DragGraph
