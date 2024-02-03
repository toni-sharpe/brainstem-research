import { type } from 'ramda'

import { PRECISION } from 'util/Constant/BaseConstantList'
import { throwError } from 'util/UtilError/UtilError'


export function getCurrentUrl() {
  const documentUrl = document.URL.split('/')
  return documentUrl[documentUrl.length - 1]
}


export function numberPrecision({ n, lessPrecise = 0 }) {
  throwError({ check: type(n) === 'Number', i18nKey: 'numberPrecisionJustSingle' })
  return Number(n.toPrecision(PRECISION - lessPrecise))
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
    : a < b
      ? 1
      : 0
}
