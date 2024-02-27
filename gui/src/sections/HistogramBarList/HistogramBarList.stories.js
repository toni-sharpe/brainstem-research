// HistogramBarList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'


import { calcAccessibleHue } from 'util/UtilHue/UtilHue'
import { calcMostMaxOfAllTheThings } from 'util/Util/UtilMaxThing'
import { ThreeHistogramData } from 'example-data/Histogram.example-data'

import HistogramBarList from './HistogramBarList';

export default {
  component: HistogramBarList,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper forceAbsolute isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const hueFn = calcAccessibleHue({
  useHueContrastToggle: true,
  useHueWheel: true,
})

const mostMaxOfAllThings = calcMostMaxOfAllTheThings({ theThingList: ThreeHistogramData })

const baseHistogramBarListProps = {
  barCountPerBlock: 3,
  barMargin: 0.5,
  blockSize: 5,
  histogramBarGroupList: ThreeHistogramData,
  hueFn,
  i18nKeyOnly: true,
  mostMaxOfAllThings,
  translationSet: { barList: ['a', 'b'], groupBy: 'c' },
}

export const Primary = {
  render: () => {
    return (
      <HistogramBarList {...baseHistogramBarListProps} />
    )
  }
};
