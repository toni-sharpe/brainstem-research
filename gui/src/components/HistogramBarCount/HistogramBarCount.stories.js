// HistogramBarCount.story.js
import HistogramBar from 'components/HistogramBar/HistogramBar'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import HistogramBarCount from './HistogramBarCount';

export default {
  component: HistogramBarCount,
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
      <StoryBookPaddedWrapper>
        <ul>
          <HistogramBar {...histogramBarProps}>
            <HistogramBarCount {...baseHistogramBarCountProps} />
          </HistogramBar>
        </ul>
      </StoryBookPaddedWrapper>
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
      <StoryBookPaddedWrapper>
        <ul>
          <HistogramBar {...histogramBarProps}>
            <HistogramBarCount {...props} />
          </HistogramBar>
        </ul>
      </StoryBookPaddedWrapper>
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
      <StoryBookPaddedWrapper>
        <ul>
          <HistogramBar {...histogramBarProps}>
            <HistogramBarCount {...props} />
          </HistogramBar>
        </ul>
      </StoryBookPaddedWrapper>
    )
  }
};
