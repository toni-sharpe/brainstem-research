// MapSvgControlList.story.js

import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'
import { calcAccessibleHue } from 'util/UtilHue/UtilHue'
import { calcMostMaxOfAllTheThings } from 'util/Util/UtilMaxThing'
import { ThreeHistogramData } from 'example-data/Histogram.example-data'

import MapSvgControlList from './MapSvgControlList';

export default {
  component: MapSvgControlList,
};

const baseMapSvgControlListProps = {

}

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <MapSvgControlList {...baseMapSvgControlListProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
