import {
  WORLD_MAP_SVG_CENTER_X,
  WORLD_MAP_SVG_CENTER_Y,
} from 'util/Constant/BaseConstantList'

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
