// HistogramBarCount.story.js
import HistogramBar from 'components/HistogramBar/HistogramBar'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import HistogramBarCount from './HistogramBarCount';

export default {
  component: HistogramBarCount,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        info='Hover over the bar to see the number appear'
        widthSetTo100
        wrapperElem='ul'
        wrapperElemProps={{ style: { width: '80%' } }}
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const histogramBarProps = {
  backgroundColor: '#70f',
  blockSize: 10,
  height: 384,
  left: 10,
  extraClass: null,
}

const baseHistogramBarCountProps = {
  barCountPerBlock: 3,
  count: 10,
}

export const Primary = {
  render: () => {
    return (
      <HistogramBar {...histogramBarProps}>
        <HistogramBarCount {...baseHistogramBarCountProps} />
      </HistogramBar>
    )
  }
};

export const BarCountOver4 = {
  render: () => {
    const props = {
      ...baseHistogramBarCountProps,
      barCountPerBlock: 5,
    }
    return (
      <HistogramBar {...histogramBarProps}>
        <HistogramBarCount {...props} />
      </HistogramBar>
    )
  }
};

export const BarCountOver6 = {
  render: () => {
    const props = {
      ...baseHistogramBarCountProps,
      barCountPerBlock: 7,
    }
    return (
      <HistogramBar {...histogramBarProps}>
        <HistogramBarCount {...props} />
      </HistogramBar>
    )
  }
};
