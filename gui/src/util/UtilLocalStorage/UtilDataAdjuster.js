import { getLocalStorage } from './UtilLocalStorage'

export function dataAdjusterLocalStorage({ k }) {
  const result = getLocalStorage({ k })
  return (
    result
    &&
    result !== 'undefined'
  )
    ? Number(result)
    : Number('0')
}
