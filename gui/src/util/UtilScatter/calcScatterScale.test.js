import { calcScatterScale } from './UtilScatter'

test('calcScatterScale() returns #eee if i is not a number', () => {
  expect(calcScatterScale({
    pointList: [
      { x:  1, y: 30 },
      { x: 31, y:  2 },
      { x: 11, y: 91 },
      { x: 14, y: 20 },
      { x: 28, y: 23 },
    ]
  })).toEqual({
    plotStepSize: 6.9307,
    scatterGuideLine: 34.6535,
    show: 5,
    squ: 700
  })
})
