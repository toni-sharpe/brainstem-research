// MapSvg.story.js

import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'
import { calcAccessibleHue } from 'util/UtilHue/UtilHue'
import { calcMostMaxOfAllTheThings } from 'util/Util/UtilMaxThing'
import { ThreeHistogramData } from 'example-data/Histogram.example-data'

import MapSvg from './MapSvg';

export default {
  component: MapSvg,
};

const baseMapSvgProps = {

}

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <MapSvg {...baseMapSvgProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
