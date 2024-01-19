import { filter, groupBy, map, pipe, prop, toPairs, type } from 'ramda'
import i18next from 'util/i18next/i18next'

import { I18N_ERROR_KEY } from 'util/Constant/BaseConstantList'


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


export function throwError({ check, dynamicErrorData, i18nKey }) {
  if (!check) {
    throw new Error(i18next.t(`${I18N_ERROR_KEY}.${i18nKey}`, dynamicErrorData))
  }
}


export function throwFnError({ caller, fn, fnName }) {
  throwError({
    check: type(fn) === 'Function',
    i18nKey: 'fnMustBeProvidedTo',
    dynamicErrorData: { fnName, caller }
  })
}

