// Scatter.story.js
import APIScatterData from 'example-data/APIScatter.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import Scatter from './Scatter';

export default {
  component: Scatter,
};

const ScatterProps = {
  data: APIScatterData
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <Scatter {...ScatterProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
