import '@testing-library/jest-dom'
import {
  calcLineHighlight,
  calcMaxBasedDisplay,
  hasLine,
  hasNumber,
} from './UtilXAxisLine'


/*
 * calcLineHighlight()
 */
const maxBasedDisplay = { highlight: 5 }

test('calcLineHighlight() returns false for 0', () => {
  expect(calcLineHighlight({ lineNumber: 0, maxBasedDisplay })).toBeFalsy()
})

test('calcLineHighlight() returns false if % !== 0 from the highlight number', () => {
  expect(calcLineHighlight({ lineNumber: 19, maxBasedDisplay })).toBeFalsy()
})

test('calcLineHighlight() returns true if % === 0 from the highlight number', () => {
  expect(calcLineHighlight({ lineNumber: 30, maxBasedDisplay })).toBeTruthy()
})

test('calcLineHighlight() returns false if highlight is false and lineNumber is above 0', () => {
  expect(calcLineHighlight({ lineNumber: 1, maxBasedDisplay: { highlight: false } })).toBeFalsy()
})


/*
 * calcMaxBasedDisplay()
 */
test('calcMaxBasedDisplay() <10', () => {
  const result = { highlight: false, show: true }
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 9 })).toEqual(result)
})

test('calcMaxBasedDisplay() >=10 && <50', () => {
  const result = { highlight: 5, show: true }
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 10 })).toEqual(result)
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 49 })).toEqual(result)
})

test('calcMaxBasedDisplay() >=50 && <100', () => {
  const result = { highlight: 10, show: 2 }
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 50 })).toEqual(result)
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 99 })).toEqual(result)
})

test('calcMaxBasedDisplay() >=100 && <200', () => {
  const result = { highlight: 20, show: 5 }
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 100 })).toEqual(result)
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 199 })).toEqual(result)
})

test('calcMaxBasedDisplay() >=200 && <500', () => {
  const result = { highlight: 50, show: 10 }
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 200 })).toEqual(result)
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 499 })).toEqual(result)
})

test('calcMaxBasedDisplay() >=500 && <1000', () => {
  const result = { highlight: 100, show: 20 }
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 500 })).toEqual(result)
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 999 })).toEqual(result)
})

test('calcMaxBasedDisplay() >=1000 && <1500', () => {
  const result = { highlight: 100, show: 50 }
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 1000 })).toEqual(result)
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 1499 })).toEqual(result)
})

test('calcMaxBasedDisplay() >=1500 && <2500', () => {
  const result = { highlight: 200, show: 50 }
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 1500 })).toEqual(result)
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 2499 })).toEqual(result)
})

test('calcMaxBasedDisplay() >=2500 && <5000', () => {
  const result = { highlight: 500, show: 100 }
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 2500 })).toEqual(result)
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 4999 })).toEqual(result)
})

test('calcMaxBasedDisplay() >=5000 && <10000', () => {
  const result = { highlight: 1000, show: 200 }
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 5000 })).toEqual(result)
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 9999 })).toEqual(result)
})

test('calcMaxBasedDisplay() >=10000', () => {
  const result = { highlight: 2000, show: 500 }
  expect(calcMaxBasedDisplay({ mostMaxOfAllThings: 10000 })).toEqual(result)
})


/*
 * hasLine()
 */
test('hasLine() returns true for maxBasedDisplay show true', () => {
  expect(hasLine({ maxBasedDisplay: { show: true } })).toBeTruthy()
})

test('hasLine() returns true if lineNumber % show === 0', () => {
  expect(hasLine({ lineNumber: 20, maxBasedDisplay: { show: 10 } })).toBeTruthy()
})

test('hasLine() returns false if lineNumber % show !== 0', () => {
  expect(hasLine({ lineNumber: 21, maxBasedDisplay: { show: 10 } })).toBeFalsy()
})


/*
 * hasNumber()
 */
test('hasNumber() returns false when showNumberList is false', () => {
  expect(hasNumber({ showNumberList: false })).toBeFalsy()
})

test('hasNumber() returns false when highlight is truthy (bigger numbers) [lineHighlight is false] [showNumberList is true]', () => {
  expect(hasNumber({
    lineHighlight: false,
    maxBasedDisplay: { highlight: 10 },
    showNumberList: true,
  })).toBeFalsy()
})

test('hasNumber() returns true when highlight is false (smallest numbers, all lines numbered) [lineHighlight is false] [showNumberList is true]', () => {
  expect(hasNumber({
    lineHighlight: false,
    maxBasedDisplay: { highlight: false },
    showNumberList: true,
  })).toBeTruthy()
})

test('hasNumber() returns true when highlight is truthy (bigger numbers) but lineHighlight over-rides [showNumberList is true]', () => {
  expect(hasNumber({
    lineHighlight: true,
    maxBasedDisplay: { highlight: 10 },
    showNumberList: true,
  })).toBeTruthy()
})
