import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { type } from 'ramda'

import DragGraphButton from 'components/DragGraphButton/DragGraphButton'
import DragGraphEdgeFadeout from 'components/DragGraphEdgeFadeout/DragGraphEdgeFadeout'
import DragGraphHeader from 'components/DragGraphHeader/DragGraphHeader'
import DragGraphOutcomeCircle from 'components/DragGraphOutcomeCircle/DragGraphOutcomeCircle'
import DragGraphPointLabel from 'components/DragGraphPointLabel/DragGraphPointLabel'
import DragGraphSelectedLine from 'components/DragGraphSelectedLine/DragGraphSelectedLine'
import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import ResetZoomButton from 'components/ResetZoomButton/ResetZoomButton'
import SvgCircle from 'components/SvgCircle/SvgCircle'
import SvgLine from 'components/SvgLine/SvgLine'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import ZoomButton from 'components/ZoomButton/ZoomButton'
import {
  DRAG_GRAPH_LABEL_SIZE,
  DRAG_GRAPH_SVG_SCALE_RADIUS,
  DRAG_GRAPH_SVG_VIEWBOX,
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

  const [graphOffset, setGraphOffset] = useState([0, 0])
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
  const dragLineCoordList = calcPolygonCoordList({ angle, radiusUnit, valList })
  const baseLineCoordList = calcBaseLineCoordList({ angle, valList })
  const r = DRAG_GRAPH_SVG_SCALE_RADIUS
  const graphC = { x: r, y: r }

  const {
    highlight,
    scaleUnit,
    scaleRadiusList,
  } = calcScaleRadiusList({ fullMax, max })

  const commonButtonProps = {
    graphKey,
    localStorageValList: persisted,
  }

  const [ox, oy] = graphOffset

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
          <li>
            <ol
              className='drag-graph__zoom row-layout space-children'
            >
              <li>Zoom:</li>
              <li className='row-layout space-children'>
                { [1, 2, 3, 5, 10, 15, 20, 30, 50].map(z => {
                  return (
                    <ZoomButton
                      {...commonButtonProps}
                      newValue={z}
                      isSelected={zoom === z}
                      k={z}
                      key={`${z}-zoom`}
                      localStorageValList={{...persisted, zoom: z }}
                      stateFn={(newVal) => {
                        const factor = newVal / zoom
                        setGraphOffset([ox * factor, oy * factor])
                        setZoom(newVal)
                      }}
                    />
                  )
                }) }
              </li>
              <li>
                <ResetZoomButton
                  zoom={zoom}
                  graphOffset={graphOffset}
                  setGraphOffset={setGraphOffset}
                  setZoom={setZoom}
                  extraStateFn={() => setFocusLabel('')}
                />
              </li>
            </ol>
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
        </ul>
      </section>
      <figure className='column-layout space-children--column'>
        <figcaption
          className='drag-graph__scale-detail'
          key='scale'
        >
          {i18next.t(`${i18nBase}.scaleDetail`, { highlight, scaleUnit })}
        </figcaption>
        <SvgWrapper offsetPair='0 0' svgScale={DRAG_GRAPH_SVG_VIEWBOX}>
          <g key='guides' transform={`translate(${graphOffset.join(' ')})`}>
            { scaleRadiusList.map(([circleR, h], i) => {
              const stroke = h ? '#ccc' : '#eee'
              return (<SvgCircle key={`scc-${circleR}`} r={circleR} c={graphC} stroke={stroke} fillOpacity={0.0} />)
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
            <SvgCircle r={5} c={graphC} stroke='#000' strokeOpacity={0.4} />
          </g>
          <DragGraphEdgeFadeout c={graphC} />
          { baseLineCoordList.map(([_, [fx, fy]], i) => {
            const { severe, nonSevere } = labelValList[i][1]
            const isSelected = focusLabel === labelValList[i][0]
            const [rx, ry] = dragLineCoordList[i].map(v => r - v)

            return (
              <g key={`sel-${i}`}>
                <DragGraphSelectedLine
                  c={graphC}
                  isSelected={isSelected}
                  labelX={fx}
                  labelY={fy}
                  r={r}
                  zoom={zoom}
                />
                <DragGraphPointLabel
                  isSelected={isSelected}
                  label={labelValList[i][0]}
                  onFocus={() => {
                    setGraphOffset([rx, ry])
                    setFocusLabel(labelValList[i][0] || '')
                  }}
                  size={DRAG_GRAPH_LABEL_SIZE}
                  title={`Sev: ${severe} Not sev: ${nonSevere}`}
                  value={valList[i]}
                  x={fx}
                  y={fy}
                />
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
