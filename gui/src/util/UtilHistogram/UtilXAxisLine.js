export function calcMaxBasedDisplay({ mostMaxOfAllThings }) {
  if (mostMaxOfAllThings < 10) {
    return { highlight: false, show: true }
  }

  if (mostMaxOfAllThings < 50) {
    return { highlight: 5, show: true }
  }

  if (mostMaxOfAllThings < 100) {
    return { highlight: 10, show: 2 }
  }

  if (mostMaxOfAllThings < 200) {
    return { highlight: 20, show: 5 }
  }

  if (mostMaxOfAllThings < 500) {
    return { highlight: 50, show: 10 }
  }

  if (mostMaxOfAllThings < 1000) {
    return { highlight: 100, show: 20 }
  }

  if (mostMaxOfAllThings < 1500) {
    return { highlight: 100, show: 50 }
  }

  if (mostMaxOfAllThings < 2500) {
    return { highlight: 200, show: 50 }
  }

  if (mostMaxOfAllThings < 5000) {
    return { highlight: 500, show: 100 }
  }

  if (mostMaxOfAllThings < 10000) {
    return { highlight: 1000, show: 200 }
  }

  return { highlight: 2000, show: 500 }
}


export function calcLineHighlight({ lineNumber, maxBasedDisplay }) {
  return (
    lineNumber > 0
    &&
    lineNumber % maxBasedDisplay.highlight === 0
  )
}


export function hasLine({ lineNumber, maxBasedDisplay }) {
  return (
    maxBasedDisplay.show === true
    ||
    lineNumber % maxBasedDisplay.show === 0
  )
}


export function hasNumber({
  lineHighlight,
  maxBasedDisplay,
  showNumberList,
}) {
  return (
    showNumberList
    &&
    (
      lineHighlight
      ||
      !maxBasedDisplay.highlight
    )
  )
}
