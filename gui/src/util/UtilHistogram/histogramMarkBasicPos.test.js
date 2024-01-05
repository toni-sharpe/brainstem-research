import '@testing-library/jest-dom'
import { calcHistogramBarPos } from './UtilHistogram'

const scale = { totalSteps: 10, stepDivision: 100 }

const baseStyles = {
  height: 11,
  left: 19,
  top: 37,
  width: 101,
}

test('calcHistogramBarPos() base styles', () => {
  const args = { ...baseStyles, className: null }
  expect(calcHistogramBarPos(args)).toEqual({
    height: 11,
    left: 19,
    top: 37,
    width: 101,
  })
})

test('calcHistogramBarPos() class', () => {
  const args = { ...baseStyles, className: 'test' }
  expect(calcHistogramBarPos(args)).toEqual({
    height: 11,
    left: 19,
    top: 37,
    width: 101,
  })
})

test('calcHistogramBarPos() background color', () => {
  const args = { ...baseStyles, className: null }
  expect(calcHistogramBarPos(args)).toEqual({
    height: 11,
    left: 19,
    top: 37,
    width: 101,
  })
})

test('calcHistogramBarPos() background color over-rides class', () => {
  const args = { ...baseStyles, className: 'test' }
  expect(calcHistogramBarPos(args)).toEqual({
    height: 11,
    left: 19,
    top: 37,
    width: 101,
  })
})

test('calcHistogramBarPos() uses defaults', () => {
  const args = {  className: 'test' }
  expect(calcHistogramBarPos(args)).toEqual({
    height: '70vh',
    left: 0,
    top: 0,
    width: 'auto',
  })
})
