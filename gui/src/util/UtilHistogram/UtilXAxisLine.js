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
