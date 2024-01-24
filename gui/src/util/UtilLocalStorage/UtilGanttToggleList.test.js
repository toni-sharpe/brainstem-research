import {
  setJSONLocalStorage,
} from './UtilLocalStorage'

import {
  ganttToggleListLocalStorage,
} from './UtilGanttToggleList'

test('we can set and get a value from local storage', () => {
  setJSONLocalStorage({ k: 'ganttToggleList', v: { x: 'y', a: 'b' } })
  expect(ganttToggleListLocalStorage()).toEqual({ x: 'y', a: 'b' })
})
