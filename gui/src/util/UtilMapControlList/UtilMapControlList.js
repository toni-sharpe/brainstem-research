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

import { setJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

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

const STEP = 10
const HORZ_MOVE = WORLD_MAP_SVG_SCALE_WIDTH / STEP
const VERT_MOVE = WORLD_MAP_SVG_SCALE_HEIGHT / STEP

export function mapBound({ edgeSize, zoom }) {
  return numberPrecision({ n: (0 - (edgeSize * zoom)) })
}

export function onWestEventHandler({ graphKey, graphOffset: [x, y], persisted, setGraphOffset, zoom }) {
  const horz_bound = mapBound({ edgeSize: WORLD_MAP_SVG_SCALE_WIDTH, zoom })
  let m = x
  if (m <= horz_bound + WORLD_MAP_SVG_SCALE_WIDTH) {
    m = horz_bound + WORLD_MAP_SVG_SCALE_WIDTH
  } else {
    m = x - HORZ_MOVE
  }
  const offset = [m, y]
  setGraphOffset(offset)
  setJSONLocalStorage({ k: graphKey, v: { ...persisted, graphOffset: offset, zoom } })
}

export function onEastEventHandler({ graphKey, graphOffset: [x, y], persisted, setGraphOffset, zoom }) {
  let newX = x + HORZ_MOVE
  if (newX >= 0) { newX = 0 }
  const offset = [newX, y]
  setGraphOffset(offset)
  setJSONLocalStorage({ k: graphKey, v: { ...persisted, graphOffset: offset, zoom } })
}

export function onNorthEventHandler({ graphKey, graphOffset: [x, y], persisted, setGraphOffset, zoom }) {
  let newY = y + VERT_MOVE
  if (newY >= 0) { newY = 0 }
  const offset = [x, newY]
  setGraphOffset(offset)
  setJSONLocalStorage({ k: graphKey, v: { ...persisted, graphOffset: offset, zoom } })
}

export function onSouthEventHandler({ graphKey, graphOffset: [x, y], persisted, setGraphOffset, zoom }) {
  const vert_bound = mapBound({ edgeSize: WORLD_MAP_SVG_SCALE_HEIGHT, zoom })
  let m = y
  if (m <= (vert_bound + WORLD_MAP_SVG_SCALE_HEIGHT)) {
    m = vert_bound + WORLD_MAP_SVG_SCALE_HEIGHT
  } else {
    m = y - VERT_MOVE
  }
  const offset = [x, m]
  setGraphOffset(offset)
  setJSONLocalStorage({ k: graphKey, v: { ...persisted, graphOffset: offset, zoom } })
}

export function handleOnKeyDown(eventHandlerProps) {
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
