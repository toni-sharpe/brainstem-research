import {
  calcStroke,
  isHighlightLine,
} from './UtilScatter'

/*
 * calcStroke()
 */
test('calcStroke() returns #eee if i is not a number', () => {
  expect(calcStroke({ i: 'b' })).toEqual('#eee')
})
test('calcStroke() returns #eee if i and h are not a highlight pair (% 5 === 0)', () => {
  expect(calcStroke({ i: 9 })).toEqual('#eee')
})
test('calcStroke() returns #80c0fc if i and h are a highlight pair (% 5 === 0)', () => {
  expect(calcStroke({ i: 10 })).toEqual('#80c0fc')
})


/*
 * isHighlightLine()
 */
test('isHighlightLine() returns false if i is not a number', () => {
  expect(isHighlightLine({ i: 'a' })).toEqual(false)
})
test('isHighlightLine() returns false if i does not match the highlight pair (% 5 === 0)', () => {
  expect(isHighlightLine({ i: 9 })).toEqual(false)
})
test('isHighlightLine() returns true if i matches the highlight (% 5 === 0)', () => {
  expect(isHighlightLine({ i: 10 })).toEqual(true)
})


