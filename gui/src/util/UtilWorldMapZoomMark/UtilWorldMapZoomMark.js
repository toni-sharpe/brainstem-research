import {
  WORLD_MAP_ON_SCREEN_HEIGHT,
  WORLD_MAP_ON_SCREEN_WIDTH,
  WORLD_MAP_SVG_SCALE_HEIGHT,
  WORLD_MAP_SVG_SCALE_WIDTH,
} from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'

export function calcVerticalZoomMarkHeight({ zoom }) {
  return (WORLD_MAP_ON_SCREEN_HEIGHT / zoom).toFixed(1)
}

export function calcVerticalZoomMarkTop({
  y,
  zoom,
}) {
  return numberPrecision({
    n: (
      (Math.abs(y))
      /
      (
        WORLD_MAP_SVG_SCALE_HEIGHT
        *
        zoom
      )
      *
      WORLD_MAP_ON_SCREEN_HEIGHT
    )
  })
}

export function calcHorizontalZoomMarkWidth({ zoom }) {
  return (WORLD_MAP_ON_SCREEN_WIDTH / zoom).toFixed(1)
}

export function calcHorizontalZoomMarkLeft({
  x,
  zoom,
}) {
  const fullScreenWidthPerc = 100

  return numberPrecision({
    n: (
      Math.abs(x)
      /
      (
        WORLD_MAP_SVG_SCALE_WIDTH
        *
        zoom
      )
      *
      WORLD_MAP_ON_SCREEN_WIDTH
    )
    +
    (
      fullScreenWidthPerc
      -
      WORLD_MAP_ON_SCREEN_WIDTH
    )
    /
    2
  })
}