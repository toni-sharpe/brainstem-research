export function setLocalStorage({ k, v }) {
  localStorage.setItem(k, v)
}

export function getLocalStorage({ k }) {
  return localStorage.getItem(k)
}

export function setJsonLocalStorage({ k, v }) {
  localStorage.setItem(k, JSON.stringify(v))
}

export function getJsonLocalStorage({ k }) {
  return JSON.parse(localStorage.getItem(k))
}
