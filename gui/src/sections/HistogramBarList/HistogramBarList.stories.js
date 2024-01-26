// HistogramBarList.story.js

import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'
import { calcHistogramBarHue } from 'util/UtilHistogram/UtilHistogram'
import { calcMostMaxOfAllTheThings } from 'util/Util/UtilMaxThing'
import { ThreeHistogramData } from 'example-data/Histogram.example-data'

import HistogramBarList from './HistogramBarList';

export default {
  component: HistogramBarList,
};

const hueFn = calcHistogramBarHue({
  useHueContrastToggle: true,
  useHueWheel: true,
})

const mostMaxOfAllThings = calcMostMaxOfAllTheThings({ theThingList: ThreeHistogramData })

const baseHistogramBarListProps = {
  barCountPerBlock: 3,
  barMargin: 12,
  blockSize: 30,
  histogramBarGroupList: ThreeHistogramData,
  hueFn,
  i18nKeyOnly: true,
  mostMaxOfAllThings,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <HistogramBarList {...baseHistogramBarListProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
