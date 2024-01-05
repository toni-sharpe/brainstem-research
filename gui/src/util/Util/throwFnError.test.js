import '@testing-library/jest-dom'

import { throwFnError } from './Util'

const throwFnErrorArgs = {
  caller: 'testCallerFn',
  fn: 'not a function',
  fnName: 'fnNameForTest',
}

test('throwFnError throws the correct error when the check fails', () => {
  expect(() => throwFnError(throwFnErrorArgs)).toThrow('fnNameForTest must be provided to testCallerFn and must be a function')
})

test('throwFnError does nothing when the check passes', () => {
  const dontThrowError = {
    ...throwFnErrorArgs,
    fn: () => {},
  }
  expect(() => throwFnError(dontThrowError)).not.toThrow()
})
