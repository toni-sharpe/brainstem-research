import { getJSONLocalStorage } from './UtilLocalStorage'
import { GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'

export function ganttToggleListLocalStorage() {
  return getJSONLocalStorage({ k: 'ganttToggleList' }) || GANTT_TOGGLE_LIST
}
