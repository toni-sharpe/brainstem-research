import { getJsonLocalStorage } from './UtilLocalStorage'
import { GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'

export function ganttToggleListLocalStorage() {
  return getJsonLocalStorage({ k: 'ganttToggleList' }) || GANTT_TOGGLE_LIST
}
