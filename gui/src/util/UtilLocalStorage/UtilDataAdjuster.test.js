import {
  setLocalStorage,
} from './UtilLocalStorage'

import {
  dataAdjusterLocalStorage,
} from './UtilDataAdjuster'

test('we can set and get a value from local storage', () => {
  setLocalStorage({ k: 'testKey', v: 5 })
  expect(dataAdjusterLocalStorage({ k: 'testKey' })).toEqual(5)
})

test('and it uses the default', () => {
  setLocalStorage({ k: 'testKey' })
  expect(dataAdjusterLocalStorage({ k: 'testKey' })).toEqual(0)
})
