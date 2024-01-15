import { isJan, calcMonthTypeClass, calcSeverityClass } from './UtilMonthBlock'


/*
 * isJan()
 */
test('isJan() when 01', () => {
  expect(isJan({ currentMonth: '01' })).toEqual(true)
})
test('isJan() not 01', () => {
  expect(isJan({ currentMonth: '02' })).toEqual(false)
})


/*
 * calcMonthTypeClass()
 */
test('calcMonthTypeClass() both null', () => {
  expect(calcMonthTypeClass({ colorVal: null, monthType: null })).toEqual('')
})
test('calcMonthTypeClass() type null', () => {
  expect(calcMonthTypeClass({ colorVal: 'test', monthType: null })).toEqual('')
})
test('calcMonthTypeClass() type = event-free and color null', () => {
  expect(calcMonthTypeClass({ colorVal: null, monthType: 'event-free' })).toEqual(' month-block--event-free')
})
test('calcMonthTypeClass() type = future and color null', () => {
  expect(calcMonthTypeClass({ colorVal: null, monthType: 'future' })).toEqual(' month-block--future')
})
test('calcMonthTypeClass() type = this-month and color null', () => {
  expect(calcMonthTypeClass({ colorVal: null, monthType: 'this-month' })).toEqual(' month-block--this-month')
})
test('calcMonthTypeClass() type = this-month and color value, still get a month class', () => {
  expect(calcMonthTypeClass({ colorVal: 'test', monthType: 'this-month' })).toEqual(' month-block--this-month')
})


/*
 * calcSeverityClass()
 */
test('calcSeverityClass() <40', () => {
  expect(calcSeverityClass({ colorVal: '39' })).toEqual(' month-block--frightening')
})
test('calcSeverityClass() >=40', () => {
  expect(calcSeverityClass({ colorVal: '41' })).toEqual(' month-block--exceptional')
})
test('calcSeverityClass() <80', () => {
  expect(calcSeverityClass({ colorVal: '79' })).toEqual(' month-block--exceptional')
})
test('calcSeverityClass() >=80', () => {
  expect(calcSeverityClass({ colorVal: '80' })).toEqual(' month-block--very-heavy')
})
test('calcSeverityClass() <120', () => {
  expect(calcSeverityClass({ colorVal: '119' })).toEqual(' month-block--very-heavy')
})
test('calcSeverityClass() >=120', () => {
  expect(calcSeverityClass({ colorVal: '120' })).toEqual(' month-block--heavy')
})
test('calcSeverityClass() <160', () => {
  expect(calcSeverityClass({ colorVal: '159' })).toEqual(' month-block--heavy')
})
test('calcSeverityClass() >=160', () => {
  expect(calcSeverityClass({ colorVal: '160' })).toEqual(' month-block--medium')
})
test('calcSeverityClass() <200', () => {
  expect(calcSeverityClass({ colorVal: '199' })).toEqual(' month-block--medium')
})
test('calcSeverityClass() >200', () => {
  expect(calcSeverityClass({ colorVal: '200' })).toEqual(' month-block--light')
})
