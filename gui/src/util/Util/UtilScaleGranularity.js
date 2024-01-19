export function calcMaxBasedDisplay({ max }) {
  if (max < 10) {
    return { highlight: false, show: true }
  }

  if (max < 50) {
    return { highlight: 5, show: true }
  }

  if (max < 100) {
    return { highlight: 10, show: 2 }
  }

  if (max < 200) {
    return { highlight: 20, show: 5 }
  }

  if (max < 500) {
    return { highlight: 50, show: 10 }
  }

  if (max < 1000) {
    return { highlight: 100, show: 20 }
  }

  if (max < 1500) {
    return { highlight: 100, show: 50 }
  }

  if (max < 2500) {
    return { highlight: 200, show: 50 }
  }

  if (max < 5000) {
    return { highlight: 500, show: 100 }
  }

  if (max < 10000) {
    return { highlight: 1000, show: 200 }
  }

  return { highlight: 2000, show: 500 }
}
