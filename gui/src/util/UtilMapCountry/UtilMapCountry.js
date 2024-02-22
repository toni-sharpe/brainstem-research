import { pluck } from 'ramda'
import { variance } from 'simple-statistics'

import {
  NON_ISLAND_TINY_TERRIROTORIES,
  TINY_TERRIROTORY_MAX,
} from 'util/Constant/BaseConstantList'

export function isCountryCircle({ borderCoordList, countryName }) {
  const xRange = variance(pluck(0, borderCoordList))
  const yRange = variance(pluck(1, borderCoordList))

  return xRange <= TINY_TERRIROTORY_MAX
    &&
    yRange <= TINY_TERRIROTORY_MAX
    &&
    !NON_ISLAND_TINY_TERRIROTORIES.includes(countryName)
}
