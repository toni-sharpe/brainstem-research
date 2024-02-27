// HistogramBarLabel.story.js
import HistogramBar from 'components/HistogramBar/HistogramBar'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import HistogramBarLabel from './HistogramBarLabel';

export default {
  component: HistogramBarLabel,
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

const baseHistogramBarLabelProps = {
  blockSize: 10,
}

export const Primary = {
  render: () => {
    return (
      <HistogramBar {...histogramBarProps}>
        <HistogramBarLabel {...baseHistogramBarLabelProps}>
          <span>Label</span>
        </HistogramBarLabel>
      </HistogramBar>
    )
  }
};
