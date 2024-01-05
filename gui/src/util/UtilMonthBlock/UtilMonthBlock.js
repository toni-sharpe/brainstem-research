function monthWeight({ colorVal }) {
  if (colorVal < 40) {
    return 'frightening'
  }
  if (colorVal >= 40 && colorVal < 80) {
    return 'exceptional'
  }
  if (colorVal >= 80 && colorVal < 120) {
    return 'very-heavy'
  }
  if (colorVal >= 120 && colorVal < 160) {
    return 'heavy'
  }
  if (colorVal >= 160 && colorVal < 200) {
    return 'medium'
  }
  return 'light'
}


export function isJan({ currentMonth = null }) {
  return currentMonth === '01'
}


export function calcSeverityClass({ colorVal = null }) {
  return colorVal !== null
    ? ` month-block--${monthWeight({ colorVal })}`
    : ''
}


export function calcMonthTypeClass({ colorVal = null, monthType = null }) {
  return (
    monthType !== null
    &&
    colorVal === null
  )
  ||
  monthType === 'this-month'
    ? ` month-block--${monthType}`
    : ''
}
