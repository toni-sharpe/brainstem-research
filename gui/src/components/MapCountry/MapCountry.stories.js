// MapCountry.story.js
import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'
import MapCountry from './MapCountry';

export default {
  component: MapCountry,
};

const baseMapCountryProps = {
  borderCoordList: [[[78, 77],[87, 78],[120, 75],[121, 100],[113, 119],[98, 118],[70, 116],[74, 95]]],
  countryName: 'Test name',
  cx: 25,
  cy: 25,
  isSelected: false,
  zoom: 1
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper scale={200}>
        <MapCountry
          {...baseMapCountryProps}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const ZoomIn = {
  render: () => {
    const props = {
      ...baseMapCountryProps,
      zoom: 2,
    }
    return (
      <StoryBookSvgWrapper offset={[100, 100]} scale={200}>
        <MapCountry
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const ZoomRightIn = {
  render: () => {
    const props = {
      ...baseMapCountryProps,
      zoom: 4,
    }
    return (
      <StoryBookSvgWrapper offset={[300, 300]} scale={200}>
        <MapCountry
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};
