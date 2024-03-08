// CurrentWIP.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import CurrentWIP from './CurrentWIP';

export default {
  component: CurrentWIP,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

export const Primary = {
  render: () => {
    return (
      <CurrentWIP />
    )
  }
};
