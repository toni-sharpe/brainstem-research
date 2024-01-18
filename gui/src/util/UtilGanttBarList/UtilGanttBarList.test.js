import {
  calcGanttListHeight,
  calcScale,
  fullStatBase,
  getStatBase,
  mapToGanttBars,
} from './UtilGanttBarList'

import { GANTT_BAR_HEIGHT, GANTT_BAR_SPACER } from 'util/Constant/BaseConstantList'

const quantile = [1, 5, 5, 9, 30, 51, 53, 53, 58]

const statBase = {
  max: 58,
  mean: 29.5,
  median: 30,
  min: 1,
}

const statBaseZeroes = { max: 0, mean: 0, median: 0, min: 0 }

const vals = [1, 5, 9, 53, 58, 51]

const i18nBase = 'ReactTestLibrary'


/*
 * calcGanttListHeight()
 */
test('calcGanttListHeight() with nothing', () => {
  expect(calcGanttListHeight()).toEqual(GANTT_BAR_HEIGHT + GANTT_BAR_SPACER)
})
test('calcGanttListHeight() with empty array', () => {
  expect(calcGanttListHeight({ statDataList: [] })).toEqual(GANTT_BAR_HEIGHT + GANTT_BAR_SPACER)
})
test('calcGanttListHeight() with array with contents', () => {
  const statDataList = [1, 2, 3]
  const result = (GANTT_BAR_HEIGHT + GANTT_BAR_SPACER) * (statDataList.length + 1)

  expect(calcGanttListHeight({ statDataList })).toEqual(result)
})



/*
 * calcScale()
 */
test('calcScale() with nothing ([])', () => {
  expect(calcScale()).toEqual({
    maxOfAll: 0,
    scale: {
      stepDivision: 0,
      totalSteps: 4,
    }
  })
})

test('calcScale() will build scale using max provided', () => {
  expect(calcScale({
    statDataList: [{
      key1: { max: 5 },
    }, {
      key1: { max: 15 },
    }, {
      key1: { max: 14 },
    }]
  })).toEqual({
    maxOfAll: 15,
    scale: {
      stepDivision: 5,
      totalSteps: 4,
    }
  })
})


/*
 * getStatBase()
 */
test('getStatBase()', () => {
  const args = { count: 6, vals }
  expect(getStatBase(args)).toEqual(statBase)
})

test('getStatBase() with count 0', () => {
  const args = { count: 0, vals: [] }
  expect(getStatBase(args)).toEqual(statBaseZeroes)
})


/*
 * fullStatBase()
 */
test('fullStatBase()', () => {
  const args = {
    count: 6,
    i18nBase,
    k: 'key1',
    statBase,
    tone: 'good',
    vals,
  }
  const result = fullStatBase(args)
  expect(result.key1).toBeTruthy()
  const key1Stats = result.key1
  expect({
    ...statBase,
    count: 6,
    label: 'Test the label',
    mda: 24,
    quantile,
    skewness: -0.0061362,
    std: 24.696,
    tone: 'good',
  }).toEqual(key1Stats)
})

test('fullStatBase() with count 0', () => {
  const args = {
    count: 0,
    i18nBase,
    k: 'key1',
    statBase: statBaseZeroes,
    tone: 'good',
    vals: [],
  }

  const result = fullStatBase(args)
  expect({
    ...statBaseZeroes,
    count: 0,
    mda: 0,
    quantile: null,
    skewness: 0,
    std: 0,
    label: 'Test the label',
    tone: 'good',
  }).toEqual({ ...result.key1 })

  expect(() => fullStatBase({ i18nBase: 'test' })).toThrow('fullStatBase needs a k')
})


/*
 * mapToGanttBars()
 */
test('mapToGanttBars()', () => {
  const expected = {
    key1: {
      count: 6,
      label: "Test the label",
      max: 58,
      mda: 24,
      mean: 29.5,
      median: 30,
      min: 1,
      quantile: [1, 5, 5, 9, 30, 51, 53, 53, 58],
      skewness: -0.0061362,
      std: 24.696,
      tone: 'neutral',
    },
  }
  const mapper = mapToGanttBars({ data: ['key1', 'good'], i18nBase })
  const result = mapper(vals)
  expect(result).toEqual(expected)
  expect(() => mapToGanttBars({ data: [], i18nBase })).toThrow('mapToGanttBars needs data with length and an i18nBase')
  expect(() => mapToGanttBars({ i18nBase })).toThrow('mapToGanttBars needs data with length and an i18nBase')
})
