// Summary.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import Summary from './Summary';

export default {
  component: Summary,
};

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <Summary />
      </StoryBookPaddedWrapper>
    )
  }
};
