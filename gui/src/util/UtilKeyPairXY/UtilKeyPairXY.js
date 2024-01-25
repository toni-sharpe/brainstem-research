import { filter, map, pipe } from 'ramda'

import { throwError } from 'util/UtilError/UtilError'


export default function calcKeyPairXy({ data, xKey, yKey, mapFn = null }) {
  throwError({ check: (xKey && yKey) || mapFn, i18nKey: 'utilKeyPairXYMakeMapFn' })
  return pipe(
    map(mapFn ? mapFn : (data) => {
      return ({ x: data[xKey], y: data[yKey] })
    }),
    filter(({x, y}) => x && y),
  )(data)
}
