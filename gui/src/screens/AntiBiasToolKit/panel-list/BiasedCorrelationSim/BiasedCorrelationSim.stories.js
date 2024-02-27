// BiasedCorrelationSim.story.js
import APIScatterData from 'example-data/APIScatter.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import BiasedCorrelationSim from './BiasedCorrelationSim';

export default {
  component: BiasedCorrelationSim,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        heading='Bias in corellation measurement can be explored here'
        isScreenWidth
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const BiasedCorrelationSimProps = {
  antiBiasToolKitData: APIScatterData
}

export const RegularPage = {
  render: () => {
    return (
      <BiasedCorrelationSim {...BiasedCorrelationSimProps} />
    )
  }
};
