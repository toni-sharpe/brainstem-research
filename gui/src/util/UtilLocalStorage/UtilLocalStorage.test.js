import {
  setLocalStorage,
  setJsonLocalStorage,
  getLocalStorage,
  getJsonLocalStorage,
} from './UtilLocalStorage'

test('we can set and get a value from local storage', () => {
  setLocalStorage({ k: 'a', v: 'b' })
  expect(getLocalStorage({ k: 'a' })).toEqual('b')
})

test('we can set and get a value from local storage when it is an object', () => {
  setJsonLocalStorage({ k: 'a', v: { x: 'y' } })
  expect(getJsonLocalStorage({ k: 'a' })).toEqual({ x: 'y' })
})

test('we can set and get a value from local storage when it is an array', () => {
  setJsonLocalStorage({ k: 'a', v: [1, 2, 3] })
  expect(getJsonLocalStorage({ k: 'a' })).toEqual([1, 2, 3])
})
