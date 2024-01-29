import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { type } from 'ramda'

import Button from 'components/Button/Button'
import DragGraphHeader from 'components/DragGraphHeader/DragGraphHeader'
import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import SvgCircle from 'components/SvgCircle/SvgCircle'
import SvgLine from 'components/SvgLine/SvgLine'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import {
  DRAG_GRAPH_MIN_TO_MAX_MULTIPLIER,
  DRAG_GRAPH_SVG_SCALE,
  DRAG_GRAPH_SVG_SCALE_RADIUS,
} from 'util/Constant/BaseConstantList'
import {
  calcAngleInRadians,
  calcBaseLineCoordList,
  calcOutcomeCircleRadius,
  calcPolygonCoordList,
  calcPolygonCoordString,
  calcRadiusUnit,
  calcScaleRadiusList,
} from 'util/UtilDragGraph/UtilDragGraph'
import {
  isFullMax,
  isWithinMultiplier,
} from 'util/UtilDragGraph/UtilDragGraphFilter'
import LabelValPropType from 'prop-types/LabelVal.prop-type'
import {
  setJSONLocalStorage,
  getJSONLocalStorage,
} from 'util/UtilLocalStorage/UtilLocalStorage'

import './DragGraph.scss'

const i18nBase = 'DragGraph'

function DragGraph({
  color,
  graphKey,
  heading,
  labelValList: lblValList,
}) {
  const persisted = getJSONLocalStorage({ k: graphKey })
  const [incExtremes, setIncExtremes] = useState(persisted?.incExtremes || false)
  const [minToMaxMultiplier, setMinToMaxMultiplier] = useState(persisted?.minToMaxMultiplier || false)
  const [zoom, setZoom] = useState(persisted?.zoom || 1)
  const dataError = !lblValList || type(lblValList) !== 'Array' || lblValList.length < 2

  if (dataError) {
    return (
      <ErrorOutput message={i18next.t('ErrorList.noDragGraphData')} />
    )
  }

  let labelValList = lblValList
  let valList = lblValList.map(([_, { length: val }]) => val)

  if (!incExtremes) {
    let max = Math.max(...valList)
    valList = valList.filter(v => !isFullMax({ max, v }))
    labelValList = lblValList.filter(([_, { length: v }]) => !isFullMax({ max, v }))
  }

  if (minToMaxMultiplier) {
    const min = Math.min(...valList)
    valList = valList.filter(v => isWithinMultiplier({ min, v }))
    labelValList = lblValList.filter(([_, { length: v }]) => isWithinMultiplier({ min, v }))
  }

  const max = Math.max(...valList) / zoom
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
    <article className='drag-graph column-layout space-children--wide-column-with-border'>
      <section className='column-layout space-children--wide-column'>
        <DragGraphHeader
          heading={heading}
        />
        <ul className='drag-graph__controls row-layout space-children'>
          <li>
            <Button
              isSelected={incExtremes}
              isDisabled={minToMaxMultiplier}
              size='medium'
              label={i18next.t(`${i18nBase}.incExtremes`)}
              onClick={() => {
                const newIncExtremes = !incExtremes
                setJSONLocalStorage({ k: graphKey, v: {
                  ...persisted,
                  incExtremes: newIncExtremes,
                  minToMaxMultiplier: false
                } })
                setIncExtremes(newIncExtremes)
                setMinToMaxMultiplier(false)
              }}
            />
          </li>
          <li>
            <Button
              isSelected={zoom === 2}
              size='medium'
              label={i18next.t(`${i18nBase}.zoomX2`)}
              onClick={() => {
                const newZoom = zoom !== 2 ? 2 : 1
                setJSONLocalStorage({ k: graphKey, v: {
                  ...persisted,
                  zoom: newZoom
                } })
                setZoom(newZoom)
              }}
            />
          </li>
          <li>
            <Button
              isSelected={zoom === 3}
              size='medium'
              label={i18next.t(`${i18nBase}.zoomX3`)}
              onClick={() => {
                const newZoom = zoom !== 3 ? 3 : 1
                setJSONLocalStorage({ k: graphKey, v: {
                  ...persisted,
                  zoom: newZoom
                } })
                setZoom(newZoom)
              }}
            />
          </li>
          <li>
            <Button
              isSelected={minToMaxMultiplier}
              isDisabled={incExtremes}
              size='medium'
              label={i18next.t(`${i18nBase}.minToMaxMultiplier`, { multiplier: DRAG_GRAPH_MIN_TO_MAX_MULTIPLIER })}
              onClick={() => {
                const newMaxTenXMin = !minToMaxMultiplier
                setJSONLocalStorage({ k: graphKey, v: {
                  ...persisted,
                  incExtremes: false,
                  minToMaxMultiplier: newMaxTenXMin
                } })
                setIncExtremes(false)
                setMinToMaxMultiplier(newMaxTenXMin)
              }}
            />
          </li>
        </ul>
      </section>
      <figure>
        <figcaption
          className='drag-graph-header__scale-detail'
          key='scale'
        >
          {i18next.t(`${i18nBase}.scaleDetail`, { outerScale, scaleUnit })}
        </figcaption>
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
            const { severe, nonSevere } = labelValList[i][1]
            return (
              <g key={`g-${x}-${y}-${i}`}>
                { severe > 0 && (
                  <SvgCircle
                    circleRadius={calcOutcomeCircleRadius({ value: severe, zoom })}
                    c={{ x, y }}
                    key={`sv-${i}`}
                    fill='red'
                    fillOpacity={0.1}
                  />
                ) }
                { nonSevere > 0 && (
                  <SvgCircle
                    circleRadius={calcOutcomeCircleRadius({ value: nonSevere, zoom })}
                    c={{ x, y }}
                    key={`nsv-${i}`}
                    fill='blue'
                    fillOpacity={0.1}
                  />
                ) }
                <foreignObject
                  height='46'
                  key={labelValList[i][0]}
                  width='30'
                  x={x - 15}
                  y={y - 28}
                >
                  <div className='drag-graph__graph-point-label'>{labelValList[i][0]}</div>
                  <div
                    className='drag-graph__graph-point'
                    tabIndex={0}
                  >
                    {valList[i]}
                  </div>
                </foreignObject>
              </g>
            )
          })}
        </SvgWrapper>
      </figure>
    </article>
  )
}

DragGraph.propTypes = {
  labelValList: PropTypes.arrayOf(LabelValPropType),
}

export default DragGraph
