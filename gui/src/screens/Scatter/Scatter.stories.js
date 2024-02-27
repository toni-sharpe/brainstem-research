// Scatter.story.js
import APIScatterData from 'example-data/APIScatter.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import Scatter from './Scatter';

export default {
  component: Scatter,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const ScatterProps = {
  data: APIScatterData
}

export const RegularPage = {
  render: () => {
    return (
      <Scatter {...ScatterProps} />
    )
  }
};
