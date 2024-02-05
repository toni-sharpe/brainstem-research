export function calcMaxBasedDisplay({ max }) {
  if (max < 2) {
    return { highlight: 0.5, show: 0.1 }
  }

  if (max < 3) {
    return { highlight: 1, show: 0.5 }
  }

  if (max < 4) {
    return { highlight: 2, show: 1 }
  }

  if (max < 10) {
    return { highlight: 5, show: 1 }
  }

  if (max < 50) {
    return { highlight: 10, show: 1 }
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
