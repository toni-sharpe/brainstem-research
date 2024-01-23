export function setLocalStorage({ k, v }) {
  localStorage.setItem(k, v)
}

export function getLocalStorage({ k }) {
  return localStorage.getItem(k)
}
