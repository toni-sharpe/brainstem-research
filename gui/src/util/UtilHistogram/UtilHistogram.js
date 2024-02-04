import {
  HISTOGRAM_BAR_LIST_COUNT,
  HISTOGRAM_BAR_LIST_MARGIN,
  HISTOGRAM_BAR_WIDTH,
  HISTORGRAM_HEIGHT,
} from 'util/Constant/BaseConstantList'
import { theThingListErrorCheck } from 'util/Util/UtilMaxThing'


export function calcHistogramWidth({
  barCountPerBlock = HISTOGRAM_BAR_LIST_COUNT,
  blockSize = HISTOGRAM_BAR_WIDTH,
  barMargin = HISTOGRAM_BAR_LIST_MARGIN,
  histogramBarGroupList,
}) {
  const graphBlockLength = theThingListErrorCheck({
    callingFn: 'calcHistogramWidth',
    theThingList: histogramBarGroupList,
  })

  return (
    (
      barCountPerBlock
      *
      blockSize
      +
      barMargin
    )
    *
    graphBlockLength
  )
  -
  barMargin
}


export function calcHistogramBarPosition({
  height,
  left,
  top,
  width,
}) {
  return {
    height: height || `${HISTORGRAM_HEIGHT}vh`,
    left: left || 0,
    top: top || 0,
    width: width || 'auto'
  }
}
