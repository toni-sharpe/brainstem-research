export function rmMenuClass() {
  document.querySelector('.js-header')?.classList?.remove('open')
}

export function onKeyDownRegionHandler({
  zoom = 1,
} = {}) {
  return function ({ keyCode }) {
    switch(keyCode) {
      case 75: // k - toggle labels
        document.querySelector('.js-key-hint-m').classList.toggle('hide')
        document.querySelector('.js-key-hint-n').classList.toggle('hide')
        document.querySelector('.js-key-hint-s').classList.toggle('hide')
        document.querySelector('.js-key-hint-z').classList.toggle('hide')
        document.querySelector('.js-key-hint-t').classList.toggle('hide')
        document.querySelector('.js-key-hint-r').classList.toggle('hide')
        break;
      case 77: // m - menu
        document.querySelector('.js-header')?.classList.toggle('open')
        document.querySelector('.js-menu-first a')?.focus()
        break;
      case 78: // n - menu2
        document.querySelector('.js-menu-2-first')?.focus()
        rmMenuClass()
        break;
      case 83: // s - scroll
        document.querySelector(`.js-west`)?.focus()
        rmMenuClass()
        break;
      case 90: // z - zoom
        document.querySelector(`.js-zoom-${zoom}`)?.focus()
        rmMenuClass()
        break;
      case 84: // t - time
        document.querySelector('.js-year-slider-main-button')?.focus()
        rmMenuClass()
        break;
      case 82: // r - filter
        document.querySelector('.js-filter')?.focus()
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
