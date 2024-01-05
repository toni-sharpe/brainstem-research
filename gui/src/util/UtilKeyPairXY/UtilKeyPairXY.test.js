import '@testing-library/jest-dom'
import utilKeyPairXY from './UtilKeyPairXY'

test('utilKeyPairXY()', () => {
  const args = {
    data: [
      { a: 9,     b: 10   },
      { a: 10,    b: 9    },
      { a: 9,     b: null },
      { a: null,  b: null },
      { a: null,  b: 13   },
    ],
    xKey: 'a',
    yKey: 'b',
  }
  expect(utilKeyPairXY(args)).toEqual([
    { x: 9, y: 10 },
    { x: 10, y: 9 }
  ])
})
