import {
  setJSONLocalStorage,
} from './UtilLocalStorage'

import {
  timeLineFilterByLocalStorage,
} from './UtilTimeLineFilteredBy'

test('we can set and get a value from local storage', () => {
  setJSONLocalStorage({ k: 'timeLineFilteredBy', v: [1, 2] })
  expect(timeLineFilterByLocalStorage({ k: 'timeLineFilteredBy' })).toEqual([1, 2])
})

test('and this uses the default too', () => {
  setJSONLocalStorage({ k: 'This', v: 'this-panel' })
  expect(timeLineFilterByLocalStorage({ k: 'timeLineFilteredBy '})).toEqual([null, null])
})
