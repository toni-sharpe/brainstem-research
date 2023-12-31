// HeadingAndTextPanel.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import HeadingAndTextPanel from './HeadingAndTextPanel';

export default {
  component: HeadingAndTextPanel,
};

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <HeadingAndTextPanel text='test' />
      </StoryBookPaddedWrapper>
    )
  }
};
