// Background.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import Background from './Background';

export default {
  component: Background,
};

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <Background />
      </StoryBookPaddedWrapper>
    )
  }
};
