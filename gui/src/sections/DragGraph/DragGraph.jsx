import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { type } from 'ramda'

import DragGraphButton from 'components/DragGraphButton/DragGraphButton'
import DragGraphEdgeFadeout from 'components/DragGraphEdgeFadeout/DragGraphEdgeFadeout'
import DragGraphHeader from 'components/DragGraphHeader/DragGraphHeader'
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
  DRAG_GRAPH_SVG_SCALE,
  DRAG_GRAPH_SVG_ZOOM_LIST,
} from 'util/Constant/BaseConstantList'
import {
  calcRadiusUnit,
  calcScaleRadiusList,
} from 'util/UtilDragGraph/UtilDragGraph'
import {
  calcAngleInRadians,
  calcBaseLineCoordList,
  calcPolygonCoordList,
  calcPolygonCoordString,
} from 'util/UtilSvg/UtilSvg'
import { isFullMax } from 'util/UtilDragGraph/UtilDragGraphFilter'
import LabelValPropType from 'prop-types/LabelVal.prop-type'
import { getJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './DragGraph.scss'

const i18nBase = 'DragGraph'

function DragGraph({
  buttonSize,
  dragGraphLabelSize,
  dragGraphZoomList,
  graphKey,
  heading,
  includeExtreme,
  labelValList: lblValList,
  isOnMap,
  pointButtonLabel,
  pointDataMapper,
  scale,
  scaleToLabelRatio,
  scaleR,
  showExtremeButton,
  showZoomLabel,
  useDepth,
  zDefault,
}) {
  const persisted = getJSONLocalStorage({ k: graphKey })

  const [graphOffset, setGraphOffset] = useState([0, 0])
  const [incExtreme, setIncExtremes] = useState(persisted?.incExtreme || persisted?.incExtreme === false ? persisted?.incExtreme : includeExtreme)
  const [zoom, setZoom] = useState(persisted?.zoom || zDefault)
  const [focusLabel, setFocusLabel] = useState('')

  const [pointDataShown, setPointDataShown] = useState(persisted?.pointDataShown || false)

  const dataError = !lblValList || type(lblValList) !== 'Array' || lblValList.length < 2

  if (dataError) {
    return (
      <ErrorOutput message={i18next.t('ErrorList.noDragGraphData')} />
    )
  }

  let labelValList = lblValList
  let valList = lblValList.map(([_, { length: val }]) => val)

  const fullMax = Math.max(...valList)

  if (!incExtreme) {
    valList = valList.filter(v => !isFullMax({ max: fullMax, v }))
    labelValList = lblValList.filter(([_, { length: v }]) => !isFullMax({ max: fullMax, v }))
  }

  const max = fullMax / zoom
  const radiusUnit = calcRadiusUnit({ max })
  const angle = calcAngleInRadians({ valList })
  const dragLineCoordList = calcPolygonCoordList({ angle, radiusUnit, scale, scaleR, valList })
  const baseLineCoordList = calcBaseLineCoordList({ angle, scale, scaleToLabelRatio, scaleR, useDepth, valList })
  const r = scaleR
  const graphC = { x: r, y: r }

  const {
    highlight,
    scaleUnit,
    scaleRadiusList,
  } = calcScaleRadiusList({ fullMax, max })

  const commonButtonProps = {
    graphKey,
    localStorageValList: persisted,
    buttonSize,
  }

  const [ox, oy] = graphOffset

  return (
    <article className={`drag-graph${isOnMap ? ' is-on-map' : ''} column-layout space-children--column-with-border`}>
      <section
        aria-label={`graph heading and controls for ${heading}`}
        className='drag-graph__header column-layout space-children--column'
      >
        { heading && (<DragGraphHeader heading={heading} />) }
        <ul className='drag-graph__controls row-layout space-children'>
          { showExtremeButton && (
            <li>
              <DragGraphButton
                {...commonButtonProps}
                newValue={!incExtreme}
                isSelected={incExtreme}
                k='incExtreme'
                stateFn={setIncExtremes}
              />
            </li>
          )}
          { !isOnMap && (
            <li>
              <ol
                className='drag-graph__zoom row-layout space-children'
              >
                { showZoomLabel && (<li>Zoom:</li>) }
                <li className='row-layout space-children'>
                  { dragGraphZoomList.map(z => {
                    return (
                      <ZoomButton
                        {...commonButtonProps}
                        newValue={z}
                        isSelected={zoom === z}
                        k={z}
                        key={`${z}-zoom`}
                        localStorageValList={{...persisted, zoom: z }}
                        size={buttonSize}
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
                    zDefault={zDefault}
                    buttonSize={buttonSize}
                    graphOffset={graphOffset}
                    setGraphOffset={setGraphOffset}
                    setZoom={setZoom}
                    extraStateFn={() => setFocusLabel('')}
                  />
                </li>
              </ol>
            </li>
          ) }
          { !isOnMap && (
            <li>
              <DragGraphButton
                {...commonButtonProps}
                newValue={!pointDataShown}
                isSelected={pointDataShown}
                k={pointButtonLabel}
                stateFn={setPointDataShown}
              />
            </li>
          ) }
        </ul>
      </section>
      <figure className='drag-graph__figure column-layout'>
        { !isOnMap && (
          <figcaption
            className='drag-graph__scale-detail'
            key='scale'
          >
            {i18next.t(`${i18nBase}.scaleDetail`, { highlight, scaleUnit })}
          </figcaption>
        ) }
        <SvgWrapper
          ariaLabel={`drag graph for ${heading}`}
          region
          svgScale={`0 0 ${scale} ${scale}`}
        >
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
            { pointDataShown && dragLineCoordList.map(pointDataMapper({ data: labelValList, zoom })) }
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
                  size={dragGraphLabelSize}
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

DragGraph.defaultProps = {
  dragGraphLabelSize: DRAG_GRAPH_LABEL_SIZE,
  dragGraphZoomList: DRAG_GRAPH_SVG_ZOOM_LIST,
  includeExtreme: true,
  isOnMap: false,
  pointButtonLabel: 'outcomeShown',
  scale: DRAG_GRAPH_SVG_SCALE,
  scaleR: DRAG_GRAPH_SVG_SCALE_RADIUS,
  showExtremeButton: true,
  showZoomLabel: true,
  useDepth: false,
  zDefault: 2,
}

DragGraph.propTypes = {
  dragGraphZoomList: PropTypes.array,
  includeExtreme: PropTypes.bool,
  isOnMap: PropTypes.bool,
  labelValList: PropTypes.arrayOf(LabelValPropType),
  pointButtonLabel: PropTypes.string,
  scale: PropTypes.number,
  scaleToLabelRatio: PropTypes.number,
  scaleR: PropTypes.number,
  showExtremeButton: PropTypes.bool,
  showZoomLabel: PropTypes.bool,
  zDefault: PropTypes.number,
}


export default DragGraph
