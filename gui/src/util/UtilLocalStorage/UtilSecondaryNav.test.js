import {
  setLocalStorage,
} from './UtilLocalStorage'

import {
  secondaryNavLocalStorage,
} from './UtilSecondaryNav'

test('we can set and get a value from local storage', () => {
  setLocalStorage({ k: 'Test', v: 'this-panel' })
  expect(secondaryNavLocalStorage({ k: 'Test' })).toEqual('this-panel')
})

test('and this uses the default too', () => {
  setLocalStorage({ k: 'This', v: 'this-panel' })
  expect(secondaryNavLocalStorage({ def: 'default-test', k: 'That '})).toEqual('default-test')
})
