// BiasedJudgementSim.story.js
import APIAntiBiasToolKitData from 'example-data/APIAntiBiasToolKit.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import BiasedJudgementSim from './BiasedJudgementSim';

export default {
  component: BiasedJudgementSim,
};

const BiasedJudgementSimProps = {
  antiBiasToolKitData: APIAntiBiasToolKitData.biased_test_cases
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <BiasedJudgementSim {...BiasedJudgementSimProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
