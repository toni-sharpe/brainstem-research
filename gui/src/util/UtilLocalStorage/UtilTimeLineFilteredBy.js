import { getJSONLocalStorage } from './UtilLocalStorage'

export function timeLineFilterByLocalStorage({ k }) {
  return getJSONLocalStorage({ k }) || [null, null]
}
