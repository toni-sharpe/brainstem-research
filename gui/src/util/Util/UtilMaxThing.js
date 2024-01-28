import i18next from 'util/i18next/i18next'
import { toPairs, type } from 'ramda'

import { I18N_ERROR_KEY, TOP_SPACER } from 'util/Constant/BaseConstantList'


export function theThingListErrorCheck({ theThingList, callingFn }) {
  const theThingListLength = type(theThingList) === 'Array' && theThingList?.length

  if (theThingListLength === 0) {
    throw new Error(i18next.t(`${I18N_ERROR_KEY}.theThingListLengthZero`, { callingFn }))
  }
  if (!theThingListLength) {
    const i18nExtras = { callingFn, typeOf: type(theThingList), val: theThingList?.toString() || 'null' }
    throw new Error(i18next.t(`${I18N_ERROR_KEY}.theThingListLengthInvalid`, i18nExtras))
  }

  return theThingListLength
}

export function reduceToMaxThing(acc, [_, data]) {
  const mmMAXMapper = (([_, val]) => {
    return type(val) === 'Array'
      ? Math.max(...val)
      : val
  })
  const maybeMostMaxOfAllTheThings = Math.max(
    ...toPairs(data).map(mmMAXMapper)
  )
  return acc > maybeMostMaxOfAllTheThings
    ? acc
    : maybeMostMaxOfAllTheThings
}

export function calcMostMaxOfAllTheThings({ theThingList }) {
  theThingListErrorCheck({
    callingFn: 'calcMostMaxOfAllTheThings',
    theThingList,
  })
  return Math.ceil(
    theThingList.reduce(reduceToMaxThing, 0)
    *
    TOP_SPACER // this gives some space at the top of the graph, the x scale extends slightly
  )
}
