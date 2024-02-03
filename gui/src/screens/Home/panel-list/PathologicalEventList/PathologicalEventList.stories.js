// PathologicalEventList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import RealFullData from 'real-data/RealFull.data'

import PathologicalEventList from './PathologicalEventList';

export default {
  component: PathologicalEventList,
};

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <PathologicalEventList data={RealFullData} />
      </StoryBookPaddedWrapper>
    )
  }
};
