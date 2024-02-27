// BiasedTimingSim.story.js
import APIPrimeSymptomListData from 'example-data/APIPrimeSymptomList.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import BiasedTimingSim from './BiasedTimingSim';

export default {
  component: BiasedTimingSim,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        height={780}
        heading='Allows bias in the prime symptom measurements to be altered to see how badly that could affect the results'
        isScreenWidth
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const BiasedTimingSimProps = {
  antiBiasToolKitData: APIPrimeSymptomListData
}

export const RegularPage = {
  render: () => {
    return (
      <BiasedTimingSim {...BiasedTimingSimProps} />
    )
  }
};
