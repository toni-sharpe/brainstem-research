// SVG.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'
import RealFullData from 'real-data/RealFull.data'

import SVG from './SVG';

export default {
  component: SVG,
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
      <SVG data={RealFullData} />
    )
  }
};
