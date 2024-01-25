import { map, join, pipe, type } from 'ramda'
import i18next from 'util/i18next/i18next'

import { I18N_ERROR_KEY } from 'util/Constant/BaseConstantList'


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


export function throwNumberError({ caller, numberList }) {
  const numberFilterFn = (([k, v]) => type(v) === 'Number')
  const isArray = type(numberList) === 'Array'
  const numberKeyString =
    isArray
      ? pipe(
          map(([label, _]) => label),
          join(', '),
        )(numberList)
      : numberList

  throwError({
    check: (
      type(numberList) === 'Number'
      ||
      (
        isArray
        &&
        numberList.filter(numberFilterFn).length === numberList.length
      )
    ),
    i18nKey: 'fnMustHaveNumbers',
    dynamicErrorData: { caller, numberKeyString }
  })
}
