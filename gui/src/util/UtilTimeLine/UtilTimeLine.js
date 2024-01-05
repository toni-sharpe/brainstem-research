import {
  addYears,
  format,
  differenceInCalendarMonths,
  differenceInMonths,
  startOfYear,
  subMonths,
} from 'date-fns'
import {
  filter,
  groupBy,
  isEmpty,
  map,
  pipe,
  pluck,
  prop,
  range,
  sum,
  toPairs,
} from 'ramda'

import { COLOR_RANGE_RESTRICTOR, TIME_LINE_FIRST_MONTH } from 'util/Constant/BaseConstantList'


// Makes a hex color shade without going right the way down to black
export function calcColorVal({ valSum }) {
  const increment = 255 / COLOR_RANGE_RESTRICTOR

  return valSum
    ? (
        255
        -
        increment
        *
        valSum
      ).toFixed(2)
    : null
}


export function calcDateKey({ month = 0, monthTotal = 0 } = {}) {
  return format(
    subMonths(
      new Date(),
      monthTotal > 0
        ? (
          monthTotal
          -
          month
        )
        : 0
    ),
    'yyyy-MM-01'
  )
}


export function calcMonthlyDataValues({
  data,
  dataPointSumPerMonth,
  filterBy,
}) {
  const dateGrouped = {}

  pipe(
    filterBy[0]
      ? filter(d => { return d[filterBy[0]] === filterBy[1] })
      : (d) => {return d},
    groupBy(prop('pathological_event_date')),
    toPairs,
    map(([k, v]) => {
      const dateKey = `${k.substring(0, 7)}-01`
      if (!dateGrouped[dateKey]) {
        dateGrouped[dateKey] = { valSum: 0, valOutputList: [] }
      }
      const valList = pluck(dataPointSumPerMonth)(v)
      const valSum = sum([...valList, dateGrouped[dateKey].valSum])
      const valOutputList = [...dateGrouped[dateKey].valOutputList, ...valList]
      dateGrouped[dateKey] = { valSum, valOutputList }
      return null
    })
  )(data)

  return dateGrouped
}


export function calcMonthsLeftThisYear() {
  return differenceInMonths(
    startOfYear(
      addYears(
        new Date(),
        1
      )
    ),
    new Date()
  )
}


export function calcMonthType({ thisMonth, valSum } = {}) {
  return thisMonth
    ? 'this-month'
    : valSum
      ? null
      : 'event-free'
}


export function calcRange({ num = 0 } = {}) {
  return range(0, num)
}


export function calcShownMonthTotal() {
  return Math.abs(differenceInCalendarMonths(
    new Date(TIME_LINE_FIRST_MONTH),
    new Date()
  ))
}


export function calcThisMonthKey() {
  return format(new Date(), 'yyyy-MM').toString().substring(0, 7)
}


export function extractOutputValsForMonth({ dateGroup } = {}) {
  if (!dateGroup || isEmpty(dateGroup)) {
    dateGroup = { valSum: null, valOutputList: null }
  }
  const { valSum, valOutputList } = dateGroup

  return { valSum, valOutputList }
}
