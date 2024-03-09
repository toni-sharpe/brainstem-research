// MapSvg.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import blankMapData from 'example-data/WorldMap.example-data'

import MapSvg from './MapSvg';

export default {
  component: MapSvg,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseMapSvgProps = {
  currentYear: 2024,
  mapDetailData: blankMapData,
  selectedCountryMapFn: (args) => { return function() {} },
  showLabelList: true,
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
