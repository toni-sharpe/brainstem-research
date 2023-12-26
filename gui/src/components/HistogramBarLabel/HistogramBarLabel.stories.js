// HistogramBarLabel.story.js
import HistogramBar from 'components/HistogramBar/HistogramBar'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import HistogramBarLabel from './HistogramBarLabel';

export default {
  component: HistogramBarLabel,
};

const graphBarProps = {
  blockSize: 64,
  height: 384,
  left: 100,
  extraClass: null,
}

const baseHistogramBarLabelProps = {
  ariaLabel: 'SB aria-label',
  blockSize: 64,
  count: 17
}

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <ul>
          <HistogramBar {...graphBarProps}>
            <HistogramBarLabel {...baseHistogramBarLabelProps}>
              <span>Label</span>
            </HistogramBarLabel>
          </HistogramBar>
        </ul>
      </StoryBookPaddedWrapper>
    )
  }
};
