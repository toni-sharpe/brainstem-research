import {
  setLocalStorage,
  setJSONLocalStorage,
  getLocalStorage,
  getJSONLocalStorage,
} from './UtilLocalStorage'

test('we can set and get a value from local storage', () => {
  setLocalStorage({ k: 'a', v: 'b' })
  expect(getLocalStorage({ k: 'a' })).toEqual('b')
})

test('we can set and get a value from local storage when it is an object', () => {
  setJSONLocalStorage({ k: 'a', v: { x: 'y' } })
  expect(getJSONLocalStorage({ k: 'a' })).toEqual({ x: 'y' })
})

test('we can set and get a value from local storage when it is an array', () => {
  setJSONLocalStorage({ k: 'a', v: [1, 2, 3] })
  expect(getJSONLocalStorage({ k: 'a' })).toEqual([1, 2, 3])
})
