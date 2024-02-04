import { CONTRAST_TOGGLE_MINIMUM } from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'
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


function calcContrastToggle({ i, total, useHueContrastToggle }) {
  if (!useHueContrastToggle) {
    return 0
  }

  if (total <= CONTRAST_TOGGLE_MINIMUM) {
    return 0
  }

  return (i % 2) * 180
}


export function calcAccessibleHue({
  useHueContrastToggle = true,
  useHueWheel = true,
} = {}) {
  if (!useHueWheel) {
    return null
  }

  return function({ i, total, aLevel = 1 }) {
    const hueCalced = calcHue({ i, total })
    const contractToggleCalced = calcContrastToggle({ i, total, useHueContrastToggle })

    const hue = numberPrecision({
      n: hueCalced + contractToggleCalced,
      lessPrecise: 2,
    })
    const hueCircled = hue > 360 ? hue % 360 : hue
    return `hsla(${hueCircled} 80% 50% / ${aLevel})`
  }
}
