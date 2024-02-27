import { init, last, pluck, symmetricDifference } from 'ramda'

import { setJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import {
  NON_ISLAND_TINY_TERRIROTORIES,
  TINY_TERRIROTORY_MAX,
  WORLD_MAP_SVG_CENTER_X,
  WORLD_MAP_SVG_CENTER_Y,
} from 'util/Constant/BaseConstantList'

export function isCountryCircle({
  borderCoordList,
  countryName,
}) {
  const xList = pluck(0, borderCoordList)
  const yList = pluck(1, borderCoordList)

  const xRange = Math.max(...xList) - Math.min(...xList)
  const yRange = Math.max(...yList) - Math.min(...yList)

  return xRange <= TINY_TERRIROTORY_MAX
    &&
    yRange <= TINY_TERRIROTORY_MAX
    &&
    !NON_ISLAND_TINY_TERRIROTORIES.includes(countryName)
}

export function calcMapPolygonCoordGroup({
  countryCenter,
  subBorder,
}) {
  const lastB = last(subBorder)

  if (lastB.c) {
    return {
      borderCoordList: init(subBorder),
      countryC: lastB.c
    }
  }

  return {
    countryC: countryCenter,
    borderCoordList: subBorder,
  }
}

export function calcZoomC({
  c,
  zoom,
}) {
  return c?.x && c?.y
    ? zoom !== 1
      ? { x: c.x * zoom, y: c.y * zoom }
      : c
    : null
}

export function onMapCountryClickHandler({
  c,
  countryId,
  currentCountryIdList,
  graphKey,
  setCurrentCountryList,
  setGraphOffset,
}) {
  return () => {
    const offset = [
      WORLD_MAP_SVG_CENTER_X - c.x,
      WORLD_MAP_SVG_CENTER_Y - c.y,
    ]
    setGraphOffset(offset)
    setCurrentCountryList(symmetricDifference(
      currentCountryIdList,
      [countryId],
    ))
    setJSONLocalStorage({ k: graphKey, v: offset })
  }
}
