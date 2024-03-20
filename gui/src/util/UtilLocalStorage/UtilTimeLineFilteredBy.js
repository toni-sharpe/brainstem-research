import { getJsonLocalStorage } from './UtilLocalStorage'

export function timeLineFilterByLocalStorage({ k }) {
  return getJsonLocalStorage({ k }) || [null, null]
}
