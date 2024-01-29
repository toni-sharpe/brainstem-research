import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'
import { type } from 'ramda'

import DragGraphHeader from 'components/DragGraphHeader/DragGraphHeader'
import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import SvgCircle from 'components/SvgCircle/SvgCircle'
import SvgLine from 'components/SvgLine/SvgLine'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { DRAG_GRAPH_SVG_SCALE, DRAG_GRAPH_SVG_SCALE_RADIUS } from 'util/Constant/BaseConstantList'
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
  const dataError = !labelValList || type(labelValList) !== 'Array' || labelValList.length < 2

  if (dataError) {
    return (
      <ErrorOutput message={i18next.t('ErrorList.noDragGraphData')} />
    )
  }

  const valList = labelValList.map(([_, val]) => val)
  const max = Math.max(...valList)
  const radiusUnit = calcRadiusUnit({ max })
  const angle = calcAngleInRadians({ valList })
  const dragLineCoordList = calcPolygonCoordList({ angle, max, radiusUnit, valList })
  const baseLineCoordList = calcBaseLineCoordList({ angle, valList })
  const r = DRAG_GRAPH_SVG_SCALE_RADIUS

  const {
    outerScale,
    scaleUnit,
    scaleRadiusList,
  } = calcScaleRadiusList({ max })

  return (
    <article className='drag-graph column-layout space-children--column'>
      <DragGraphHeader
        heading={heading}
        scaleDetail={i18next.t(`${i18nBase}.scaleDetail`, { outerScale, scaleUnit })}
      />
      <SvgWrapper svgScale={DRAG_GRAPH_SVG_SCALE}>
        { baseLineCoordList.map(([x, y], i) => <SvgLine key={`${x}-${y}-${i}`} stroke='#eee' x={[r, r]} y={[x, y]} />) }
        { scaleRadiusList.map((circleRadius, i) => {
          const stroke = i === scaleRadiusList.length - 1 ? '#777' : '#eee'
          return (<SvgCircle circleRadius={circleRadius} c={{ x: r, y: r }} key={`scale-${i}`} stroke={stroke} />
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
          return valList[i] > max / 50
            ? (
              <foreignObject
                height='46'
                key={labelValList[i][0]}
                width='30'
                x={x - 15}
                y={y - 31}
              >
                <div className='drag-graph__graph-point-label'>{labelValList[i][0]}</div>
                <div
                  className='drag-graph__graph-point'
                  tabIndex={0}
                >
                  {valList[i]}
                </div>
              </foreignObject>
            )
            : null
        })}
      </SvgWrapper>
    </article>
  )
}

DragGraph.propTypes = {
  labelValList: PropTypes.arrayOf(LabelValPropType),
}

export default DragGraph
