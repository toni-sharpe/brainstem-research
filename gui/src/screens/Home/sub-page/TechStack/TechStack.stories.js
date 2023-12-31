// TechStack.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import TechStack from './TechStack';

export default {
  component: TechStack,
};

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <TechStack />
      </StoryBookPaddedWrapper>
    )
  }
};
