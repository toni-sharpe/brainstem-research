// BiasedJudgementSim.story.js
import APIAntiBiasToolKitData from 'example-data/APIAntiBiasToolKit.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import BiasedJudgementSim from './BiasedJudgementSim';

export default {
  component: BiasedJudgementSim,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const BiasedJudgementSimProps = {
  antiBiasToolKitData: APIAntiBiasToolKitData.biased_test_cases
}

export const RegularPage = {
  render: () => {
    return (
      <BiasedJudgementSim {...BiasedJudgementSimProps} />
    )
  }
};
