import '@testing-library/jest-dom'

import APITimeLineData from 'example-data/APITimeLine.example-data'

import {
  calcColorVal,
  calcDateKey,
  calcMonthlyDataValues,
  calcMonthsLeftThisYear,
  calcMonthType,
  calcRange,
  calcShownMonthTotal,
  calcThisMonthKey,
  extractOutputValsForMonth,
} from './UtilTimeLine'

jest
  .useFakeTimers()
  .setSystemTime(new Date('2023-06-15'))


/*
 * calcColorVal()
 */
test('calcColorVal() returns null with no valSum', () => {
  expect(calcColorVal({ valSum: undefined })).toEqual(null)
})
test('calcColorVal() returns 0 if valSum is 0', () => {
  expect(calcColorVal({ valSum: 0 })).toEqual(null)
})
test('calcColorVal() returns string to two decimal places with valSum', () => {
  expect(calcColorVal({ valSum: 1 })).toEqual('254.50')
})
test('calcColorVal() returns string to two decimal places with valSum', () => {
  expect(calcColorVal({ valSum: 255 })).toEqual('127.50')
})


/*
 * calcDateKey() - note, all results revert to day 01 of the returned month
 */
test('calcDateKey() if month is 0 (default) but monthTotal is set then monthTotal is used, we are at the first month of our set', () => {
  expect(calcDateKey({ month: 0, monthTotal: 13 })).toEqual('2022-05-01')
})
test('calcDateKey() if monthTotal is 0 (default) then no months are deducted and we get the fake time back', () => {
  expect(calcDateKey({ month: 7 })).toEqual('2023-06-01')
})
test('calcDateKey() with positive ints makes the correct calculation, here we are 7 months in from the earlier test with monthTotal 13', () => {
  expect(calcDateKey({ month: 7, monthTotal: 13 })).toEqual('2022-12-01')
})


/*
 * calcMonthlyDataValues()
 */
test('calcMonthlyDataValues()', () => {
  expect(calcMonthlyDataValues({
    data: APITimeLineData,
    dataPointSumPerMonth: 'overall_patient_rating',
    filterBy: [ 'X', 'DEF' ],
  })).toEqual({
    "2015-01-01": {
      valOutputList: [19.54, 25.07],
      valSum: 44.61
    },
    "2015-05-01": {
      valOutputList: [37.44],
      valSum: 37.44
    },
    "2015-07-01": {
      valOutputList: [27.54],
      valSum: 27.54
    }
  })
})


/*
 * calcMonthsLeftThisYear()
 */
test('calcMonthsLeftThisYear() - there are six full months left from the test date (Jul-Dec)', () => {
  expect(calcMonthsLeftThisYear()).toEqual(6)
})


/*
 * calcMonthType()
 */
test('calcMonthType() with thisMonth true', () => {
  expect(calcMonthType({ thisMonth: true })).toEqual('this-month')
})
test('calcMonthType() with valSum and thisMonth false', () => {
  expect(calcMonthType({ valSum: 97 })).toEqual(null)
})
test('calcMonthType() with neither thisMonth nor valSum', () => {
  expect(calcMonthType()).toEqual('event-free')
})
test('calcMonthType() with 0 valSum is event-free true', () => {
  expect(calcMonthType({ valSum: 0 })).toEqual('event-free')
})


/*
 * calcRange()
 */
test('calcRange() returns a number between 0 and that supplied', () => {
  expect(calcRange({ num: 3 })).toEqual([0, 1, 2])
})
test('calcRange() returns [] if num is 0 (default)', () => {
  expect(calcRange()).toEqual([])
})


/*
 * calcShownMonthTotal()
 */
test('calcShownMonthTotal() again from the const start date to the fake date', () => {
  expect(calcShownMonthTotal()).toEqual(281)
})


/*
 * calcThisMonthKey()
 */
test('calcThisMonthKey() simply returns the key (for the fake date here)', () => {
  expect(calcThisMonthKey()).toEqual('2023-06')
})


/*
 * extractOutputValsForMonth()
 */
test('extractOutputValsForMonth() with nothing returns null for sum and output', () => {
  expect(extractOutputValsForMonth()).toEqual({ valSum: null, valOutputList: null })
})
test('extractOutputValsForMonth() with empty object returns null for sum and output', () => {
  expect(extractOutputValsForMonth({ dateGroup: {} })).toEqual({ valSum: null, valOutputList: null })
})
test('extractOutputValsForMonth() with values will rteurn them (note, they are not calculated)', () => {
  expect(extractOutputValsForMonth({ dateGroup: { valSum: 45, valOutputList: [1, 13, 31] } })).toEqual({ valSum: 45, valOutputList: [1, 13, 31] })
})
