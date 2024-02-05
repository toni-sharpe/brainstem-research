import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { join, map, pipe, split, type } from 'ramda'

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
      : false
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

  const fullMax = Math.max(...valList)

  if (!incExtremes) {
    valList = valList.filter(v => !isFullMax({ max: fullMax, v }))
    labelValList = lblValList.filter(([_, { length: v }]) => !isFullMax({ max: fullMax, v }))
  }

  if (minToMaxMultiplier) {
    const min = Math.min(...valList)
    valList = valList.filter(v => isWithinMultiplier({ min, v }))
    labelValList = lblValList.filter(([_, { length: v }]) => isWithinMultiplier({ min, v }))
  }

  const max = fullMax / zoom
  const radiusUnit = calcRadiusUnit({ max })
  const angle = calcAngleInRadians({ valList })
  const dragLineCoordList = calcPolygonCoordList({ angle, max, radiusUnit, valList })
  const baseLineCoordList = calcBaseLineCoordList({ angle, valList })
  const r = DRAG_GRAPH_SVG_SCALE_RADIUS

  const {
    highlight,
    scaleUnit,
    scaleRadiusList,
  } = calcScaleRadiusList({ fullMax, max })

  const commonButtonProps = {
    graphKey,
    localStorageValList: persisted,
  }

  return (
    <article className='drag-graph column-layout space-children--column-with-border'>
      <section className='column-layout space-children--column'>
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
          <li className='row-layout space-children'>
            { [1, 2, 3, 5, 10, 15, 20, 30, 50].map(z => {
              return (
                <DragGraphButton
                  {...commonButtonProps}
                  newValue={z}
                  isSelected={zoom === z}
                  k={z}
                  key={`${z}-zoom`}
                  localStorageValList={{...persisted, zoom: z }}
                  stateFn={(newVal) => {
                    const newGraphOffset = pipe(
                      split(' '),
                      map(v => v * (newVal / zoom)),
                      join(' '),
                    )(graphOffset)
                    setGraphOffset(newGraphOffset)
                    setZoom(newVal)
                  }}
                />
              )
            }) }
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
              isDisabled={graphOffset === '0 0'}
              localStorageValList={false}
              newValue={'0 0'}
              k='resetGraphCenter'
              stateFn={setGraphOffset}
            />
          </li>
        </ul>
      </section>
      <figure className='column-layout space-children--column'>
        <figcaption
          className='drag-graph-header__scale-detail'
          key='scale'
        >
          {i18next.t(`${i18nBase}.scaleDetail`, { highlight, scaleUnit })}
        </figcaption>
        <SvgWrapper offsetPair={graphOffset} svgScale={DRAG_GRAPH_SVG_SCALE}>
          { baseLineCoordList.map(([x, y], i) => {
            return (<SvgLine key={`${x}-${y}-${i}`} stroke='#ccc' x={[r, r]} y={[x, y]} />)
          })}
          { scaleRadiusList.map(([circleRadius, h], i) => {
            const stroke = h ? '#ccc' : '#eee'
            return (<SvgCircle circleRadius={circleRadius} c={{ x: r, y: r }} key={`scale-${i}`} stroke={stroke} />)
          })}
          <polygon
            fill={'#000'}
            fillOpacity={0.2}
            key='drag-polygon'
            points={calcPolygonCoordString({ coordList: dragLineCoordList })}
            stroke={'#000'}
            strokeOpacity={0.8}
            strokeWidth={2}
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
                  <DragGraphOutcomeCircle {...commonCircleProps} fill='red' key={`sv-${i}`} r={severe + 10} />
                ) }
                { nonSevere > 0 && outcomeShown && (
                  <DragGraphOutcomeCircle {...commonCircleProps} fill='blue' key={`nsv-${i}`} r={nonSevere + 10} />
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
              </g>
            )
          })}
          { dragLineCoordList.map(([x, y], i) => {
            const {
              severe,
              nonSevere,
            } = labelValList[i][1]

            return (
              <foreignObject
                key={labelValList[i][0]}
                onFocus={() => setGraphOffset(`${0 - (r - x)} ${0 - (r - y)}`)}
                tabIndex={0}
                x={x - 22}
                y={y - 38}
                width='50'
                height='66'
              >
                <article className='drag-graph__point'>
                  <header className='drag-graph__point-label'>{labelValList[i][0]}</header>
                  <section
                    className='drag-graph__point-num'
                    title={`Sev: ${severe} Not sev: ${nonSevere}`}
                  >
                    <span>{valList[i]}</span>
                  </section>
                </article>
              </foreignObject>
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
