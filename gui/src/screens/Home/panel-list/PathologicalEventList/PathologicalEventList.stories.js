// PathologicalEventList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'



import RealFullData from 'real-data/RealFull.data'

import PathologicalEventList from './PathologicalEventList';

export default {
  component: PathologicalEventList,
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
      <PathologicalEventList data={RealFullData} />
    )
  }
};
