import {
  setLocalStorage,
  getLocalStorage,
} from './UtilLocalStorage'

test('we can set and get a value from local storage', () => {
  setLocalStorage({ k: 'a', v: 'b' })
  expect(getLocalStorage({ k: 'a' })).toEqual('b')
})