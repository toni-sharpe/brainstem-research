import { calcBarSegmentAlpha, writeHistogramBarListAriaLabel } from './UtilHistogramBarList'

/*
  Aria label tests
*/
test('writeHistogramBarListAriaLabel() - error thrown if theres no histogramBarListLabel', () => {
  expect(() => writeHistogramBarListAriaLabel({
    histogramBarListLabel: undefined,
    translationSet: {},
    i18nBaseOverride: 'test'
  })).toThrow('writeHistogramBarListAriaLabel requires histogramBarListLabel param')
})

test('writeHistogramBarListAriaLabel() - if translation set is malformed, an error is thrown', () => {
  expect(() => writeHistogramBarListAriaLabel({
    histogramBarListLabel: 'test',
    translationSet: { barList: true, groupBy: ['d'] },
    i18nBaseOverride: undefined,
  })).toThrow('if translationSet is used, it must be an object where barList is an array and groupBy a string')
})

test('writeHistogramBarListAriaLabel() - translation set is used if available and correctly formed', () => {
  expect(writeHistogramBarListAriaLabel({
    histogramBarListLabel: 'test',
    translationSet: { barList: ['a', 'b', 'c'], groupBy: 'd' },
    i18nBaseOverride: undefined,
  })).toEqual('d values test with bars for a, b, c')
})

test('writeHistogramBarListAriaLabel() - fallback onto prime symptom graph parlance with no translation', () => {
  expect(writeHistogramBarListAriaLabel({
    histogramBarListLabel: '35',
    i18nBaseOverride: 'PrimeSymptomHistogram',
  })).toEqual('Time values 35-40 d with bars for fatal, non fatal')
})


/*
  Calc alpha level tests
*/
/* 1 segment, regular bars */
test('calcBarSegmentAlpha() - returns 1.0 if theres just one segment', () => {
  expect(calcBarSegmentAlpha({
    barSegmentCount: 1,
  })).toEqual(1.0)
})
/* 2 segments, like range */
test('calcBarSegmentAlpha() - returns 1.0 if theres just one segment', () => {
  expect(calcBarSegmentAlpha({
    barSegmentCount: 2,
    i: 0,
  })).toEqual(0.5)
})
test('calcBarSegmentAlpha() - returns 1.0 if theres just one segment', () => {
  expect(calcBarSegmentAlpha({
    barSegmentCount: 2,
    i: 1,
  })).toEqual(1)
})
/* 3 segments, like deviation */
test('calcBarSegmentAlpha() - returns 1.0 if theres just one segment', () => {
  expect(calcBarSegmentAlpha({
    barSegmentCount: 3,
    i: 0,
  })).toEqual(0.33)
})
test('calcBarSegmentAlpha() - returns 1.0 if theres just one segment', () => {
  expect(calcBarSegmentAlpha({
    barSegmentCount: 3,
    i: 1,
  })).toEqual(0.33)
})
test('calcBarSegmentAlpha() - returns 1.0 if theres just one segment', () => {
  expect(calcBarSegmentAlpha({
    barSegmentCount: 3,
    i: 2,
  })).toEqual(1)
})

