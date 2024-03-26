// MapCountry.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import { calcZoomC } from 'util/UtilMapCountry/UtilMapCountry'
import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'
import MapCountry from './MapCountry';

export default {
  component: MapCountry,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const c = { x: 97, y: 98 }

const baseMapCountryProps = {
  borderCoordList: [[78, 77],[87, 78],[120, 75],[121, 100],[113, 119],[98, 118],[70, 116],[74, 95]],
  countryCode: 'TST',
  countryName: 'Test name',
  c,
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
    const zoom = 2;
    const props = {
      ...baseMapCountryProps,
      c: calcZoomC({ c, zoom }),
      zoom,
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
    const zoom = 4;
    const props = {
      ...baseMapCountryProps,
      c: calcZoomC({ c, zoom }),
      zoom,
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

export const IsSelected = {
  render: () => {
    const props = {
      ...baseMapCountryProps,
      isSelected: true,
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

export const IsSelectedAndZoomed = {
  render: () => {
    const zoom = 4;
    const props = {
      ...baseMapCountryProps,
      c: calcZoomC({ c, zoom }),
      isSelected: true,
      zoom,
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

export const IsHovered = {
  render: () => {
    const props = {
      ...baseMapCountryProps,
      isHovered: true,
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

export const IsHoveredAndZoomed = {
  render: () => {
    const zoom = 4;
    const props = {
      ...baseMapCountryProps,
      c: calcZoomC({ c, zoom }),
      isHovered: true,
      zoom,
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

export const TinyIslandIsACircle = {
  render: () => {
    const props = {
      ...baseMapCountryProps,
      borderCoordList: [[9, 9],[10, 9],[10, 10],[9, 10],[9, 9]],
      c: { x: 9.5, y: 9.5 },
    }
    return (
      <StoryBookSvgWrapper svgScale={'0 0 40 40'}>
        <MapCountry
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const TinyIslandIsACircleWithZoom = {
  render: () => {
    const zoom = 3
    const props = {
      ...baseMapCountryProps,
      borderCoordList: [[9, 9],[10, 9],[10, 10],[9, 10],[9, 9]],
      c: calcZoomC({ c: { x: 9.5, y: 9.5 }, zoom }),
      zoom,
    }
    return (
      <StoryBookSvgWrapper svgScale={'0 0 100 100'}>
        <MapCountry
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const TinyIslandIsACircleSelected = {
  render: () => {
    const zoom = 3
    const props = {
      ...baseMapCountryProps,
      borderCoordList: [[9, 9],[10, 9],[10, 10],[9, 10],[9, 9]],
      c: calcZoomC({ c: { x: 9.5, y: 9.5 }, zoom }),
      isSelected: true,
      zoom,
    }
    return (
      <StoryBookSvgWrapper svgScale={'0 0 100 100'}>
        <MapCountry
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};
