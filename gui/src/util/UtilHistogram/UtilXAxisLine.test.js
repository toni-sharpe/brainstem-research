import '@testing-library/jest-dom'
import {
  calcLineHighlight,
  hasLine,
  hasNumber,
} from './UtilXAxisLine'


/*
 * calcLineHighlight()
 */
const maxBasedDisplay = { highlight: 5 }

test('calcLineHighlight() returns false for 0', () => {
  expect(calcLineHighlight({ lineNumber: 0, maxBasedDisplay })).toEqual(false)
})

test('calcLineHighlight() returns false if % !== 0 from the highlight number', () => {
  expect(calcLineHighlight({ lineNumber: 19, maxBasedDisplay })).toEqual(false)
})

test('calcLineHighlight() returns true if % === 0 from the highlight number', () => {
  expect(calcLineHighlight({ lineNumber: 30, maxBasedDisplay })).toEqual(true)
})

test('calcLineHighlight() returns false if highlight is false and lineNumber is above 0', () => {
  expect(calcLineHighlight({ lineNumber: 1, maxBasedDisplay: { highlight: false } })).toEqual(false)
})


/*
 * hasLine()
 */
test('hasLine() returns true for maxBasedDisplay show true', () => {
  expect(hasLine({ maxBasedDisplay: { show: true } })).toEqual(true)
})

test('hasLine() returns true if lineNumber % show === 0', () => {
  expect(hasLine({ lineNumber: 20, maxBasedDisplay: { show: 10 } })).toEqual(true)
})

test('hasLine() returns false if lineNumber % show !== 0', () => {
  expect(hasLine({ lineNumber: 21, maxBasedDisplay: { show: 10 } })).toEqual(false)
})


/*
 * hasNumber()
 */
test('hasNumber() returns false when showNumberList is false', () => {
  expect(hasNumber({ showNumberList: false })).toEqual(false)
})

test('hasNumber() returns false when highlight is truthy (bigger numbers) [lineHighlight is false] [showNumberList is true]', () => {
  expect(hasNumber({
    lineHighlight: false,
    maxBasedDisplay: { highlight: 10 },
    showNumberList: true,
  })).toEqual(false)
})

test('hasNumber() returns true when highlight is false (smallest numbers, all lines numbered) [lineHighlight is false] [showNumberList is true]', () => {
  expect(hasNumber({
    lineHighlight: false,
    maxBasedDisplay: { highlight: false },
    showNumberList: true,
  })).toEqual(true)
})

test('hasNumber() returns true when highlight is truthy (bigger numbers) but lineHighlight over-rides [showNumberList is true]', () => {
  expect(hasNumber({
    lineHighlight: true,
    maxBasedDisplay: { highlight: 10 },
    showNumberList: true,
  })).toEqual(true)
})
