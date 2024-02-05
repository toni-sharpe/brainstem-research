import { calcScatterScale } from './UtilScatter'

test('calcScatterScale() returns numbers when given numbers', () => {
  expect(calcScatterScale({
    pointList: [
      { x:  1, y: 30 },
      { x: 31, y:  2 },
      { x: 11, y: 91 },
      { x: 14, y: 20 },
      { x: 28, y: 23 },
    ]
  })).toEqual({
        plotStepSize:   6.93069,
       rangeTopBound:  21,
    scatterGuideLine:  34.65345,
                show:   5,
                 squ: 750,
  })
})

test('calcScatterScale() is not thrown by nulls or undefined', () => {
  expect(calcScatterScale({
    pointList: [
      { x:    1, y: undefined },
      { x:   31, y:         2 },
      { x:   11, y:        91 },
      { x: null, y:        20 },
      { x:   28, y:        23 },
    ]
  })).toEqual({
        plotStepSize:  6.93069,
       rangeTopBound:  21,
    scatterGuideLine:  34.65345,
                show:   5,
                 squ: 750,
  })
})

test('calcScatterScale() handles one', () => {
  expect(calcScatterScale({
    pointList: [
      { x:  1, y: 1 },
    ]
  })).toEqual({
        plotStepSize: 350,
       rangeTopBound:   4,
    scatterGuideLine: 175,
                show:   0.5,
                 squ: 750,
  })
})

test('calcScatterScale() throws an error if empty', () => {
  expect(() => calcScatterScale({
    pointList: []
  })).toThrow('theThingList has length 0, there should be something in theThingList for calcMostMaxOfAllTheThings')
})

test('calcScatterScale() ignores extra data', () => {
  expect(calcScatterScale({
    pointList: [
      { x:  1, y: 1, d: 'a' },
      { x:  2, y: 3, d: 'a' },
      { x:  4, y: 8, d: 'a' },
    ]
  })).toEqual({
        plotStepSize:   77.7778,
       rangeTopBound:    9,
    scatterGuideLine:   77.7778,
                show:    1,
                 squ:  750,
  })
})
