// BiasedCorrelationSim.story.js
import APIScatterData from 'example-data/APIScatter.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import BiasedCorrelationSim from './BiasedCorrelationSim';

export default {
  component: BiasedCorrelationSim,
};

const BiasedCorrelationSimProps = {
  antiBiasToolKitData: APIScatterData
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <BiasedCorrelationSim {...BiasedCorrelationSimProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
