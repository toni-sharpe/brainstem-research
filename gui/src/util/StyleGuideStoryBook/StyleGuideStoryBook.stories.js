// StyleGuideStoryBook.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'



import StyleGuideStoryBook from './StyleGuideStoryBook'

export default {
  component: StyleGuideStoryBook,
};

export const Primary = {
  render: () => {
    return (
      <div style={{ padding: '4%' }}>
        <StyleGuideStoryBook />
      </div>
    )
  }
};
