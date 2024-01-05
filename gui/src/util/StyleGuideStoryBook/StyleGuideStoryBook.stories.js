// StyleGuideStoryBook.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import StyleGuideStoryBook from './StyleGuideStoryBook'

export default {
  component: StyleGuideStoryBook,
};

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper heading='An SB page for showing useful stuff like CSS variables'>
        <StyleGuideStoryBook />
      </StoryBookPaddedWrapper>
    )
  }
};
