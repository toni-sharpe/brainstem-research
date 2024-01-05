// ScatterStatisticOutput.story.js
import utilKeyPairXY from 'util/UtilKeyPairXY/UtilKeyPairXY'
import { simplifiedScatterData } from 'example-data/ScatterSimpleTest.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import ScatterStatisticOutput from './ScatterStatisticOutput';

export default {
  component: ScatterStatisticOutput,
};

const storyKeys = {
  xKey: 'test',
  yKey: 'chart',
}

const commonScatterStatisticOutputProps = {
  pointList: utilKeyPairXY({
    data: simplifiedScatterData(),
    ...storyKeys,
  }),
  ...storyKeys,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <ScatterStatisticOutput {...commonScatterStatisticOutputProps} />
      </StoryBookPaddedWrapper>
    )
  },
};

export const NotEnoughPoints = {
  render: () => {
    const props = {
      ...commonScatterStatisticOutputProps,
      pointList: [],
    }

    return (
      <StoryBookPaddedWrapper>
        <ScatterStatisticOutput {...props} />
      </StoryBookPaddedWrapper>
    )
  },
};

export const NeedsTwoPoints = {
  render: () => {
    const props = {
      ...commonScatterStatisticOutputProps,
      pointList: [{ a: 1, b: 2 }],
    }

    return (
      <StoryBookPaddedWrapper>
        <ScatterStatisticOutput {...props} />
      </StoryBookPaddedWrapper>
    )
  },
};
