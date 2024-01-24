import { getLocalStorage } from './UtilLocalStorage'

export function secondaryNavLocalStorage({ def, k }) {
  return getLocalStorage({ k }) || def
}
