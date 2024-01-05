// Testing.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import Testing from './Testing';

export default {
  component: Testing,
};

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <Testing />
      </StoryBookPaddedWrapper>
    )
  }
};
