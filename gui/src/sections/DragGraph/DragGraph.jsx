import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { join, map, pipe, split, type } from 'ramda'

import DragGraphButton from 'components/DragGraphButton/DragGraphButton'
import DragGraphHeader from 'components/DragGraphHeader/DragGraphHeader'
import DragGraphOutcomeCircle from 'components/DragGraphOutcomeCircle/DragGraphOutcomeCircle'
import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import SvgCircle from 'components/SvgCircle/SvgCircle'
import SvgLine from 'components/SvgLine/SvgLine'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import {
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
import { isFullMax } from 'util/UtilDragGraph/UtilDragGraphFilter'
import LabelValPropType from 'prop-types/LabelVal.prop-type'
import { getJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './DragGraph.scss'

const i18nBase = 'DragGraph'

function DragGraph({
  graphKey,
  heading,
  labelValList: lblValList,
}) {
  const persisted = getJSONLocalStorage({ k: graphKey })

  const [graphOffset, setGraphOffset] = useState('0 0')
  const [incExtremes, setIncExtremes] = useState(persisted?.incExtremes || false)
  const [zoom, setZoom] = useState(persisted?.zoom || 2)
  const [focusLabel, setFocusLabel] = useState('')

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

  const max = fullMax / zoom
  const radiusUnit = calcRadiusUnit({ max })
  const angle = calcAngleInRadians({ valList })
  const dragLineCoordList = calcPolygonCoordList({ angle, max, radiusUnit, valList })
  const baseLineCoordList = calcBaseLineCoordList({ angle, valList })
  const r = DRAG_GRAPH_SVG_SCALE_RADIUS
  const cGraph = { x: r, y: r }

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
              k='incExtremes'
              stateFn={setIncExtremes}
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
              stateFn={(newVal) => {
                setGraphOffset(newVal)
                setFocusLabel('')
              }}
            />
          </li>
        </ul>
      </section>
      <figure className='column-layout space-children--column'>
        <figcaption
          className='drag-graph__scale-detail'
          key='scale'
        >
          {i18next.t(`${i18nBase}.scaleDetail`, { highlight, scaleUnit })}
        </figcaption>
        <SvgWrapper svgScale={DRAG_GRAPH_SVG_SCALE}>
          <g key='guides' transform={`translate(${graphOffset})`}>
            { scaleRadiusList.map(([circleR, h], i) => {
              const stroke = h ? '#ccc' : '#eee'
              return (<SvgCircle key={`scc-${circleR}`} r={circleR} c={cGraph} stroke={stroke} fillOpacity={0.0} />)
            })}
            { baseLineCoordList.map(([[x, y], _], i) => {
              return (<SvgLine key={`scl-${i}`} stroke='#777' x={[r, r]} y={[x, y]} />)
            })}
            <polygon
              fill={'#333'}
              fillOpacity={0.2}
              key='drag-polygon'
              points={calcPolygonCoordString({ coordList: dragLineCoordList })}
              stroke={'#333'}
              strokeOpacity={0.6}
              strokeWidth={1.5}
            />
            { dragLineCoordList.map(([x, y], i) => {
              const {
                severe,
                nonSevere,
              } = labelValList[i][1]

              const commonCircleProps = { c: { x, y }, zoom: zoom / 10 }

              return (
                <g key={`g-${i}`}>
                  { severe > 0 && outcomeShown && (
                    <DragGraphOutcomeCircle {...commonCircleProps} fill='#b22' r={severe + 20} />
                  ) }
                  { nonSevere > 0 && outcomeShown && (
                    <DragGraphOutcomeCircle {...commonCircleProps} fill='#13a' r={nonSevere + 20} />
                  ) }
                  { (<SvgCircle {...commonCircleProps} r={4} fill='#13a' /> ) }
                </g>
              )
            })}
            <SvgCircle r={5} c={cGraph} stroke='#000' strokeOpacity={0.4} />
          </g>
          <SvgCircle
            r={475}
            c={cGraph}
            fillOpacity={0.0}
            stroke='#777'
            strokeOpacity={0.075}
            strokeWidth={200}
          />
          <SvgCircle
            r={525}
            c={cGraph}
            fillOpacity={0.0}
            stroke='#777'
            strokeOpacity={0.075}
            strokeWidth={200}
          />
          { baseLineCoordList.map(([_, [fx, fy]], i) => {
            const {
              severe,
              nonSevere,
            } = labelValList[i][1]

            const isSelected = focusLabel === labelValList[i][0]

            const [rx, ry] = dragLineCoordList[i].map(v => r - v)

            const baseSvgLineProps = {
              stroke: '#13a',
              strokeOpacity: 0.0,
              x: [r, r],
              y: [fx, fy],
              strokeWidth: 1.0,
            }

            let svgLineProps = baseSvgLineProps
            if (isSelected) {
              svgLineProps = {
                ...baseSvgLineProps,
                strokeOpacity: 1.0,
                strokeWidth: 2.0,
              }
            }

            return (
              <g key={`sel-${i}`}>
                <SvgLine {...svgLineProps} />
                { isSelected && (
                  <SvgCircle r={Math.max(2 * zoom / 6, 6)} c={cGraph} fill='#13a' stroke='#13a' />
                ) }
                <foreignObject
                  key={labelValList[i][0]}
                  onFocus={() => {
                    setGraphOffset(`${rx} ${ry}`)
                    setFocusLabel(labelValList[i][0] || '')
                  }}
                  tabIndex={0}
                  x={fx - 26}
                  y={fy - 26}
                  width='52'
                  height='52'
                  style={{
                    borderRadius: '3px',
                    boxShadow: isSelected ? '' : '0 0 20px 0 #555',
                  }}
                >
                  <article className={`drag-graph__point ${isSelected ? 'is-selected' : ''}`}>
                    <header className='drag-graph__point-label'>{labelValList[i][0]}</header>
                    <section
                      className='drag-graph__point-num'
                      title={`Sev: ${severe} Not sev: ${nonSevere}`}
                    >
                      <span>{valList[i]}</span>
                    </section>
                  </article>
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
