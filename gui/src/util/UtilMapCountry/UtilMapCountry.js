import { init, last, pluck, symmetricDifference } from 'ramda'

import { setJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import {
  NON_ISLAND_TINY_TERRIROTORIES,
  TINY_TERRIROTORY_MAX,
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
  countryId,
  currentCountryIdList,
  graphKey,
  setCurrentCountryList,
  persisted,
}) {
  return () => {
    const newCurrentCountryIdList = symmetricDifference(
      currentCountryIdList,
      [countryId],
    )
    setCurrentCountryList(newCurrentCountryIdList)
    setJSONLocalStorage({ k: graphKey, v: { ...persisted, currentCountryIdList: newCurrentCountryIdList } })
  }
}

export function buildMapCountryElement({
  data,
  elementKey,
  i,
  setCurrentHoveredCountryId,
}) {
  const { countryId, onClick } = data

  return({
    children: data[elementKey],
    key: `${countryId}-${i}-${elementKey}`,
    onClick,
    onMouseEnter: () => setCurrentHoveredCountryId(countryId),
    onMouseLeave: () => setCurrentHoveredCountryId(undefined),
    pointerEvents: 'visiblePainted',
  })
}

export function countryElementMapperFn({ elementKey, setCurrentHoveredCountryId }) {
  return function(data, i) {
    return (
      <g {...buildMapCountryElement({ data, elementKey, i, setCurrentHoveredCountryId })} />
    )
  }
}
