// BiasedTimingSim.story.js
import APIPrimeSymptomListData from 'example-data/APIPrimeSymptomList.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import BiasedTimingSim from './BiasedTimingSim';

export default {
  component: BiasedTimingSim,
};

const BiasedTimingSimProps = {
  antiBiasToolKitData: APIPrimeSymptomListData
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <BiasedTimingSim {...BiasedTimingSimProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
