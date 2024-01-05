// Home.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import Home from './Home';

export default {
  component: Home,
};

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <Home />
      </StoryBookPaddedWrapper>
    )
  }
};
