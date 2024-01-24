export function setLocalStorage({ k, v }) {
  localStorage.setItem(k, v)
}

export function getLocalStorage({ k }) {
  return localStorage.getItem(k)
}

export function setJSONLocalStorage({ k, v }) {
  localStorage.setItem(k, JSON.stringify(v))
}

export function getJSONLocalStorage({ k }) {
  return JSON.parse(localStorage.getItem(k))
}
