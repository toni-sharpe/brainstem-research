// HistogramBarLabel.story.js
import HistogramBar from 'components/HistogramBar/HistogramBar'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import HistogramBarLabel from './HistogramBarLabel';

export default {
  component: HistogramBarLabel,
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
      <StoryBookPaddedWrapper>
        <ul>
          <HistogramBar {...histogramBarProps}>
            <HistogramBarLabel {...baseHistogramBarLabelProps}>
              <span>Label</span>
            </HistogramBarLabel>
          </HistogramBar>
        </ul>
      </StoryBookPaddedWrapper>
    )
  }
};
