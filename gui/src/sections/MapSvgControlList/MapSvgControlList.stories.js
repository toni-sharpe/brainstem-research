// MapSvgControlList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'


import { calcAccessibleHue } from 'util/UtilHue/UtilHue'
import { calcMostMaxOfAllTheThings } from 'util/Util/UtilMaxThing'
import { ThreeHistogramData } from 'example-data/Histogram.example-data'

import MapSvgControlList from './MapSvgControlList';

export default {
  component: MapSvgControlList,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseMapSvgControlListProps = {
  graphKey: 'test-sb',
  graphOffset: [0, 0],
  setGraphOffset: () => {},
  setZoom: () => {},
  zoom: 1,
}

export const Zoom1IeNoZoomDisabledThings = {
  render: () => {
    return (
      <MapSvgControlList {...baseMapSvgControlListProps} />
    )
  }
};

export const WithOffsetAndZoomRestable= {
  render: () => {
    const props = {
      ...baseMapSvgControlListProps,
      zoom: 5,
    }
    return (
      <MapSvgControlList {...props} />
    )
  }
};
