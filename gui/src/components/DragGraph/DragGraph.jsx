import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'
import { type } from 'ramda'

import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import { SVG_SCALE, SVG_SCALE_RADIUS } from 'util/Constant/BaseConstantList'
import {
  calcAngleInRadians,
  calcBaseLineCoordList,
  calcPolygonCoordList,
  calcPolygonCoordString,
  calcRadiusUnit,
  calcScaleRadiusList,
} from 'util/UtilDragGraph/UtilDragGraph'
import LabelValPropType from 'prop-types/LabelVal.prop-type'

import './DragGraph.scss'

const i18nBase = 'DragGraph'

function DragGraph({
  color,
  heading,
  labelValList,
}) {
  if (!labelValList || type(labelValList) !== 'Array' || labelValList.length < 2) {
    return (
      <div className='drag-graph column-layout space-children--column'>
        <h2
          className='drag-graph__heading'
          key='heading'
        >
          {heading}
        </h2>
        <ErrorOutput message={i18next.t('ErrorList.noDragGraphData')} />
      </div>
    )
  }
  const valList = labelValList.map(([_, val]) => val)
  const max = Math.max(...valList)
  const radiusUnit = calcRadiusUnit({ max })
  const angle = calcAngleInRadians({ valList })
  const dragLineCoordList = calcPolygonCoordList({ angle, max, radiusUnit, valList })
  const baseLineCoordList = calcBaseLineCoordList({ angle, valList })

  const {
    outerScale,
    scaleUnit,
    scaleRadiusList,
  } = calcScaleRadiusList({ max })

  return (
    <div className='drag-graph column-layout space-children--column'>
      <h2
        className='drag-graph__heading'
        key='heading'
      >
        {heading}
      </h2>
      <span className='drag-graph__scale-detail'>{i18next.t(`${i18nBase}.scaleDetail`, { outerScale, scaleUnit})}</span>
      <svg
        key='svg'
        viewBox={`0 0 ${SVG_SCALE} ${SVG_SCALE}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        { baseLineCoordList.map(([x, y], i) => {
          return (
            <line
              key={`${x}-${y}`}
              stroke='#eee'
              x1={SVG_SCALE_RADIUS}
              x2={x}
              y1={SVG_SCALE_RADIUS}
              y2={y}
            />
          )
        })}
        <circle
          cx={SVG_SCALE_RADIUS}
          cy={SVG_SCALE_RADIUS}
          key='center'
          r={5}
          fill='#999'
        />
        { scaleRadiusList.map((svgRadius, i) => {
          const finalCircle = i === scaleRadiusList.length - 1

          return (
            <circle
              cx={SVG_SCALE_RADIUS}
              cy={SVG_SCALE_RADIUS}
              fillOpacity='0.0'
              key={`scale-${i}`}
              r={svgRadius}
              stroke={finalCircle ? '#777' : '#eee'}
            />
          )
        })}
        <polygon
          fill={color}
          fillOpacity='0.3'
          key='drag-polygon'
          points={calcPolygonCoordString({ coordList: dragLineCoordList })}
          stroke={color}
        />
        { dragLineCoordList.map(([x, y], i) => {
          return valList[i] > max / 10
            ? (
              <foreignObject
                x={x - 15}
                y={y - 31}
                width='30'
                height='46'
              >
                <div className='drag-graph__graph-point-label'>{labelValList[i][0]}</div>
                <div
                  className='drag-graph__graph-point'
                  tabindex={0}
                >
                  {valList[i]}
                </div>
              </foreignObject>
            )
            : null
        })}
      </svg>
    </div>
  )
}

DragGraph.propTypes = {
  labelValList: PropTypes.arrayOf(LabelValPropType),
}

export default DragGraph
