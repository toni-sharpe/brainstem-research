export function rmZoomClass() {
  document.querySelector('.js-zoom-label')?.classList?.remove('zoom-focus')
}
export function rmMenuClass() {
  document.querySelector('.js-header')?.classList?.remove('open')
}

export function onKeyDownRegionHandler({
  zoom = 1,
} = {}) {
  return function ({ keyCode }) {
    switch(keyCode) {
      case 77: // m - menu
        document.querySelector('.js-header')?.classList.toggle('open')
        document.querySelector('.js-menu-first a')?.focus()
        rmZoomClass()
        break;
      case 78: // n - menu2
        document.querySelector('.js-menu-2-first')?.focus()
        rmZoomClass()
        rmMenuClass()
        break;
      case 83: // s - scroll
        document.querySelector(`.js-west`)?.focus()
        rmZoomClass()
        rmMenuClass()
        break;
      case 90: // z - zoom
        document.querySelector(`.js-zoom-${zoom}`)?.focus()
        document.querySelector('.js-zoom-label')?.classList.add('zoom-focus')
        rmMenuClass()
        break;
      case 84: // t - time
        document.querySelector('.js-year-slider-main-button')?.focus()
        rmZoomClass()
        rmMenuClass()
        break;
      case 82: // r - filter
        document.querySelector('.js-filter')?.focus()
        rmZoomClass()
        break;
      case 88: // x - reset
        rmMenuClass()
        break;
      default:
        break;
    }

    return false
  }
}