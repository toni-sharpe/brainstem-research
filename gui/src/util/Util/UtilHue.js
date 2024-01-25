import { throwError } from 'util/UtilError/UtilError'

export function calcHue({ i, total }) {
  throwError({
    check: total > 0,
    i18nKey: 'hueTotalError',
  })

  return 360
    /
    total
    *
    i
}
