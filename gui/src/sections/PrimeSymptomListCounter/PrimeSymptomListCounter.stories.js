// PrimeSymptomListCounter.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import PrimeSymptomListCounter from './PrimeSymptomListCounter';

export default {
  component: PrimeSymptomListCounter,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const basePrimeSymptomListCounterProps = {
  currentGraphPoints: 20,
  setCurrentGraphPoints: () => {},
  totalCount: 50
}

export const Primary = {
  render: () => {
    return (
      <PrimeSymptomListCounter {...basePrimeSymptomListCounterProps} />
    )
  }
};
