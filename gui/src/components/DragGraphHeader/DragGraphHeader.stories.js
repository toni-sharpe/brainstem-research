// DragGraphHeader.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import DragGraphHeader from './DragGraphHeader';

export default {
  component: DragGraphHeader,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

export const Primary = {
  render: () => {
    return (
      <DragGraphHeader heading='Test graph heading' />
    )
  }
};
