import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { type } from 'ramda'

import Button from 'components/Button/Button'
import DragGraphButton from 'components/DragGraphButton/DragGraphButton'
import DragGraphHeader from 'components/DragGraphHeader/DragGraphHeader'
import DragGraphOutcomeCircle from 'components/DragGraphOutcomeCircle/DragGraphOutcomeCircle'
import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import SvgCircle from 'components/SvgCircle/SvgCircle'
import SvgLine from 'components/SvgLine/SvgLine'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import {
  DRAG_GRAPH_MIN_TO_MAX_MULTIPLIER,
  DRAG_GRAPH_SEVERITY_MULTIPLIER,
  DRAG_GRAPH_SVG_SCALE,
  DRAG_GRAPH_SVG_SCALE_RADIUS,
} from 'util/Constant/BaseConstantList'
import {
  calcAngleInRadians,
  calcBaseLineCoordList,
  calcPolygonCoordList,
  calcPolygonCoordString,
  calcRadiusUnit,
  calcScaleRadiusList,
} from 'util/UtilDragGraph/UtilDragGraph'
import { numberPrecision } from 'util/Util/Util'
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

  const [graphOffset, setGraphOffset] = useState('0 0')
  const [incExtremes, setIncExtremes] = useState(persisted?.incExtremes || false)
  const [minToMaxMultiplier, setMinToMaxMultiplier] = useState(persisted?.minToMaxMultiplier || false)
  const [zoom, setZoom] = useState(persisted?.zoom || 1)
  const [aveSeverityShown, setAveSeverityShown] = useState(
    persisted?.aveSeverityShown !== undefined
      ? persisted?.aveSeverityShown
      : true
    )
  const [outcomeShown, setOutcomeShown] = useState(persisted?.outcomeShown || false)

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

  const commonButtonProps = {
    graphKey,
    localStorageValList: persisted,
  }

  return (
    <article className='drag-graph column-layout space-children--wide-column-with-border'>
      <section className='column-layout space-children--wide-column'>
        <DragGraphHeader
          heading={heading}
        />
        <ul className='drag-graph__controls row-layout space-children'>
          <li>
            <DragGraphButton
              {...commonButtonProps}
              newValue={!incExtremes}
              isSelected={incExtremes}
              isDisabled={minToMaxMultiplier}
              k='incExtremes'
              localStorageValList={{...persisted, minToMaxMultiplier: false }}
              stateFn={() => {
                setIncExtremes(!incExtremes)
                setMinToMaxMultiplier(false)
              }}
            />
          </li>
          <li>
            <DragGraphButton
              {...commonButtonProps}
              newValue={zoom !== 2.5 ? 2.5 : 1}
              isSelected={zoom === 2.5}
              k='zoom'
              stateFn={setZoom}
            />
          </li>
          <li>
            <Button
              isSelected={minToMaxMultiplier}
              isDisabled={incExtremes}
              size='medium'
              label={i18next.t(`DragGraphButton.minToMaxMultiplier`, { multiplier: DRAG_GRAPH_MIN_TO_MAX_MULTIPLIER })}
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
          <li>
            <DragGraphButton
              {...commonButtonProps}
              newValue={!aveSeverityShown}
              isSelected={aveSeverityShown}
              k='aveSeverityShown'
              stateFn={setAveSeverityShown}
            />
          </li>
          <li>
            <DragGraphButton
              {...commonButtonProps}
              newValue={!outcomeShown}
              isSelected={outcomeShown}
              k='outcomeShown'
              stateFn={setOutcomeShown}
            />
          </li>
          <li>
            <DragGraphButton
              {...commonButtonProps}
              localStorageValList={false}
              newValue={'0 0'}
              k='resetGraphCenter'
              stateFn={setGraphOffset}
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
        <SvgWrapper offsetPair={graphOffset} svgScale={DRAG_GRAPH_SVG_SCALE}>
          { baseLineCoordList.map(([x, y], i) => {
            return (<SvgLine key={`${x}-${y}-${i}`} stroke='#eee' x={[r, r]} y={[x, y]} />)
          })}
          { scaleRadiusList.map((circleRadius, i) => {
            const stroke = i === scaleRadiusList.length - 1 ? '#777' : '#eee'
            return (<SvgCircle circleRadius={circleRadius} c={{ x: r, y: r }} key={`scale-${i}`} stroke={stroke} />)
          })}
          <polygon
            fill={color}
            fillOpacity='0.3'
            key='drag-polygon'
            points={calcPolygonCoordString({ coordList: dragLineCoordList })}
            stroke={color}
          />
          { dragLineCoordList.map(([x, y], i) => {
            const {
              careLevel,
              length,
              severe,
              nonSevere,
            } = labelValList[i][1]

            const commonCircleProps = { c: { x, y }, zoom }

            return (
              <g key={`g-${i}`}>
                { severe > 0 && outcomeShown && (
                  <DragGraphOutcomeCircle {...commonCircleProps} fill='red' key={`sv-${i}`} r={severe} />
                ) }
                { nonSevere > 0 && outcomeShown && (
                  <DragGraphOutcomeCircle {...commonCircleProps} fill='blue' key={`nsv-${i}`} r={nonSevere} />
                ) }
               { careLevel > 0 && aveSeverityShown && (
                  <DragGraphOutcomeCircle
                    {...commonCircleProps}
                    fill='#494'
                    key={`cl-${i}`}
                    r={numberPrecision({ n: (careLevel / length) })}
                    multiplier={DRAG_GRAPH_SEVERITY_MULTIPLIER}
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
                    onFocus={() => setGraphOffset(`${0 - (r - x)} ${0 - (r - y)}`)}
                    tabIndex={0}
                    title={`Sev: ${severe} Not sev: ${nonSevere}`}
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
