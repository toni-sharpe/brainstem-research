// HistogramBarListLabel.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import HistogramBarListLabel from './HistogramBarListLabel';
import { PRIME_SYMPTOM_HISTOGRAM_BAR_LIST_MAP } from 'util/Constant/BaseConstantList'

export default {
  component: HistogramBarListLabel,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseHistogramBarListLabelProps = {
  allBlocks: PRIME_SYMPTOM_HISTOGRAM_BAR_LIST_MAP,
  barCountPerBlock: 3,
  barMargin: 8,
  blockSize: 6,
  i18nKeyOnly: false,
  i18nKey: 'sb-example',
  label: '50..100',
}

export const Primary = {
  render: () => {
    return (
      <HistogramBarListLabel {...baseHistogramBarListLabelProps} />
    )
  }
};
