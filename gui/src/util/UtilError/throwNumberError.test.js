import { throwNumberError } from 'util/UtilError/UtilError'

test('throwNumberError() - fails if an array of one is passed and the value is not a number', () => {
  expect(() => throwNumberError({
    caller: 'testFn',
    numberList: [
      ['a-key', '1' ],
    ]
  })).toThrow('testFn must have numbers in all these parameters [a-key]')
})

test('throwNumberError() - fails if an array of more than one is passed and at least one of the values is not a number', () => {
  expect(() => throwNumberError({
    caller: 'testFn',
    numberList: [
      ['a-kay', 1 ],
      ['b-key', '3' ],
    ]
  })).toThrow('testFn must have numbers in all these parameters [a-kay, b-key]')
})

test('throwNumberError() - passes if just one number is provided', () => {
  expect(() => throwNumberError({
    caller: 'testFn',
    numberList: 1
  })).not.toThrow()
})

test('throwNumberError() - passes if an array of one number is passed', () => {
  expect(() => throwNumberError({
    caller: 'testFn',
    numberList: [
      ['a-key', 1 ],
    ]
  })).not.toThrow()
})

test('throwNumberError() - passes if an array with more than one number is passed', () => {
  expect(() => throwNumberError({
    caller: 'testFn',
    numberList: [
      ['a-key', 1 ],
      ['b-key', 3 ],
    ]
  })).not.toThrow()
})
