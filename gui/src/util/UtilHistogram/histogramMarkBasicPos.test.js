import { calcHistogramBarPosition } from './UtilHistogram'

const scale = { totalSteps: 10, stepDivision: 100 }

const baseStyles = {
  height: 11,
  left: 19,
  top: 37,
  width: 101,
}

test('calcHistogramBarPosition() base styles', () => {
  const args = { ...baseStyles, className: null }
  expect(calcHistogramBarPosition(args)).toEqual({
    height: 11,
    left: 19,
    top: 37,
    width: 101,
  })
})

test('calcHistogramBarPosition() class', () => {
  const args = { ...baseStyles, className: 'test' }
  expect(calcHistogramBarPosition(args)).toEqual({
    height: 11,
    left: 19,
    top: 37,
    width: 101,
  })
})

test('calcHistogramBarPosition() background color', () => {
  const args = { ...baseStyles, className: null }
  expect(calcHistogramBarPosition(args)).toEqual({
    height: 11,
    left: 19,
    top: 37,
    width: 101,
  })
})

test('calcHistogramBarPosition() background color over-rides class', () => {
  const args = { ...baseStyles, className: 'test' }
  expect(calcHistogramBarPosition(args)).toEqual({
    height: 11,
    left: 19,
    top: 37,
    width: 101,
  })
})

test('calcHistogramBarPosition() uses defaults', () => {
  const args = {  className: 'test' }
  expect(calcHistogramBarPosition(args)).toEqual({
    height: '74vh',
    left: 0,
    top: 0,
    width: 'auto',
  })
})
