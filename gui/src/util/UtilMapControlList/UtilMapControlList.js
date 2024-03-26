import {
  DOWN_SOUTH_KEY,
  LEFT_WEST_KEY,
  RIGHT_EAST_KEY,
  UP_NORTH_KEY,
  WORLD_MAP_SVG_CENTER_X,
  WORLD_MAP_SVG_CENTER_Y,
  WORLD_MAP_SVG_SCALE_HEIGHT,
  WORLD_MAP_SVG_SCALE_WIDTH,
} from 'util/Constant/BaseConstantList'

import { numberPrecision } from 'util/Util/Util'

import { setJsonLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

const STEP = 10
const HORZ_MOVE = WORLD_MAP_SVG_SCALE_WIDTH / STEP
const VERT_MOVE = WORLD_MAP_SVG_SCALE_HEIGHT / STEP

export function calcNewGraphOffset({ x, y, zoomTo, zoomFrom }) {
  const factor = zoomTo / zoomFrom
  const offsetFactor = factor - 1
  return [
    // The offset to a point is base on the center of the map
    x * factor - WORLD_MAP_SVG_CENTER_X * offsetFactor,
    y * factor - WORLD_MAP_SVG_CENTER_Y * offsetFactor,
  ]
}

export function calcMove({ m, zoom }) {
  return (0 - m * zoom)
}

export function mapBound({ edgeSize, zoom }) {
  return numberPrecision({ n: (0 - (edgeSize * zoom) + edgeSize) })
}

export function onEastEventHandler({ graphKey, graphOffset: [x, y], persisted, setGraphOffset, zoom }) {
  document.querySelectorAll('.js-map-scroll').forEach(jsMs => jsMs.classList.remove("is-hovered"))
  const horz_bound = mapBound({ edgeSize: WORLD_MAP_SVG_SCALE_WIDTH, zoom })
  let m = x
  if (m <= horz_bound) {
    m = horz_bound
  } else {
    m = x - HORZ_MOVE
  }
  const offset = [m, y]
  setGraphOffset(offset)
  setJsonLocalStorage({ k: graphKey, v: { ...persisted, graphOffset: offset, zoom } })
  document.querySelector('.js-east').classList.add("is-hovered")
}

export function onWestEventHandler({ graphKey, graphOffset: [x, y], persisted, setGraphOffset, zoom }) {
  document.querySelectorAll('.js-map-scroll').forEach(jsMs => jsMs.classList.remove("is-hovered"))
  let newX = x + HORZ_MOVE
  if (newX >= 0) { newX = 0 }
  const offset = [newX, y]
  setGraphOffset(offset)
  setJsonLocalStorage({ k: graphKey, v: { ...persisted, graphOffset: offset, zoom } })
  document.querySelector('.js-west').classList.add("is-hovered")
}

export function onNorthEventHandler({ graphKey, graphOffset: [x, y], persisted, setGraphOffset, zoom }) {
  document.querySelectorAll('.js-map-scroll').forEach(jsMs => jsMs.classList.remove("is-hovered"))
  let newY = y + VERT_MOVE
  if (newY >= 0) { newY = 0 }
  const offset = [x, newY]
  setGraphOffset(offset)
  setJsonLocalStorage({ k: graphKey, v: { ...persisted, graphOffset: offset, zoom } })
  document.querySelector('.js-north').classList.add("is-hovered")
}

export function onSouthEventHandler({ graphKey, graphOffset: [x, y], persisted, setGraphOffset, zoom }) {
  document.querySelectorAll('.js-map-scroll').forEach(jsMs => jsMs.classList.remove("is-hovered"))
  const vert_bound = mapBound({ edgeSize: WORLD_MAP_SVG_SCALE_HEIGHT, zoom })
  let m = y
  if (m <= (vert_bound)) {
    m = vert_bound
  } else {
    m = y - VERT_MOVE
  }
  const offset = [x, m]
  setGraphOffset(offset)
  setJsonLocalStorage({ k: graphKey, v: { ...persisted, graphOffset: offset, zoom } })
  document.querySelector('.js-south').classList.add("is-hovered")
}

export function handleOnKeyDownScroll(eventHandlerProps) {
  const { keyCode } = eventHandlerProps

  if (keyCode === RIGHT_EAST_KEY) {
    onEastEventHandler(eventHandlerProps)
  }
  if (keyCode === LEFT_WEST_KEY) {
    onWestEventHandler(eventHandlerProps)
  }
  if (keyCode === UP_NORTH_KEY) {
    onNorthEventHandler(eventHandlerProps)
  }
  if (keyCode === DOWN_SOUTH_KEY) {
    onSouthEventHandler(eventHandlerProps)
  }
}
