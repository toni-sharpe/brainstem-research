// Motivation.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import Motivation from './Motivation';

export default {
  component: Motivation,
};

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <Motivation />
      </StoryBookPaddedWrapper>
    )
  }
};
