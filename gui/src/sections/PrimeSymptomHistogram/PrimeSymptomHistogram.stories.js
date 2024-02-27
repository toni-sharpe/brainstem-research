// PrimeSymptomHistogram.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import PrimeSymptomHistogramData from 'example-data/APIPrimeSymptomList.example-data'
import { PRIME_SYMPTOM_BLOCK_SIZE } from 'util/Constant/BaseConstantList'

import PrimeSymptomHistogram from './PrimeSymptomHistogram';

export default {
  component: PrimeSymptomHistogram,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const basePrimeSymptomHistogramProps = {
  biasedTimingError: 0,
  blockSize: PRIME_SYMPTOM_BLOCK_SIZE,
  localStorageFn: () => ({ count: 1, factor: undefined }),
  primeSymptomData: PrimeSymptomHistogramData,
  timingError: 0,
}

export const Primary = {
  render: () => {
    return (
      <PrimeSymptomHistogram {...basePrimeSymptomHistogramProps} />
    )
  }
};

export const TranslationsForAria = {
  render: () => {
    const props = {
      ...basePrimeSymptomHistogramProps,
      translationSet: {
        barData: ['x', 'y']
      }
    }
    return (
      <PrimeSymptomHistogram {...props} />
    )
  }
};
