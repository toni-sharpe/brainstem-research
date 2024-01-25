import { filter, groupBy, map, pipe, prop, toPairs, type } from 'ramda'

import { throwError } from 'util/UtilError/UtilError'


export function getCurrentUrl() {
  const documentUrl = document.URL.split('/')
  return documentUrl[documentUrl.length - 1]
}


export function groupByPipe({ k }) {
  return pipe(
    groupBy(prop(k)),
    toPairs,
    filter(([v, _]) => !['', 'null'].includes(v)),
    map(([v, list]) => [v, list.length]),
  )
}


export function isOrIsInArray({ k, arr = [] }) {
  throwError({
    check: k,
    i18nKey: 'isOrIsInArrayNeedsValues',
    dynamicErrorData: { missing: `Missing: ${!k ? 'k' : ''}` }
  })

  return (
    arr === k
    || (
      type(arr) === 'Array'
      &&
      arr?.includes(k)
    )
  )
}


export function sortFn(a, b) {
  return a > b
    ? -1
    : 1
}
