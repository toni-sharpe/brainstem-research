// MapCountry.story.js
import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'
import MapCountry from './MapCountry';

export default {
  component: MapCountry,
};

const baseMapCountryProps = {
  borderCoordList: [[78, 77],[87, 78],[120, 75],[121, 100],[113, 119],[98, 118],[70, 116],[74, 95]],
  countryName: 'Test name',
  c: { x: 25, y: 25 },
  isSelected: false,
  zoom: 1
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper svgScale={'0 0 300 300'}>
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
      c: { x: 50, y: 50 },
      zoom: 2,
    }
    return (
      <StoryBookSvgWrapper svgScale={'0 0 300 300'}>
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
      c: { x: 50, y: 50 },
      zoom: 4,
    }
    return (
      <StoryBookSvgWrapper svgScale={'0 0 500 500'}>
        <MapCountry
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};
