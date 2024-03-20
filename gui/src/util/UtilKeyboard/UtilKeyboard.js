export function onKeyDownRegionHandler({
  zoom,
}) {
  return function ({ keyCode }) {
    console.log(keyCode)
    switch(keyCode) {
      case 77:// m - menu
        console.log('m')
        break;
      case 78:// n - menu2
        console.log('n')
        break;
      case 83:// s - scroll
        console.log('s')
        break;
      case 90:// z - zoom
        document.querySelector(`.js-zoom-${zoom}`).focus()
        break;
      case 84:// t - time
        console.log('t')
        break;
      case 82:// r - filter
        console.log('r')
        break;
      case 88:// x - reset
        console.log('x')
        break;
      default:
        break;
    }

    return false
  }
}