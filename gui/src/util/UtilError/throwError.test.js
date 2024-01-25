import { throwError } from 'util/UtilError/UtilError'

const throwErrorArgs = {
  check: false,
  dynamicErrorData: {
    addToError: 'add me',
    alsoAddToError: 'i am here too',
  },
  i18nKey: 'testError',
}

test('throwError throws the correct error when the check fails', () => {
  expect(() => throwError(throwErrorArgs)).toThrow('Test add me i am here too')
})

test('throwError does nothing when the check passes', () => {
  const dontThrowError = {
    ...throwErrorArgs,
    check: true,
  }
  expect(() => throwError(dontThrowError)).not.toThrow()
})
