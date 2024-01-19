// SVG.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import SVG from './SVG';

export default {
  component: SVG,
};

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <SVG />
      </StoryBookPaddedWrapper>
    )
  }
};
