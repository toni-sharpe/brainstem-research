// WorldMap.story.js
// import APIWorldMapData from 'example-data/APIWorldMap.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import WorldMap from './WorldMap';

export default {
  component: WorldMap,
};

const baseWorldMapProps = {
  data: [1]
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <WorldMap {...baseWorldMapProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
