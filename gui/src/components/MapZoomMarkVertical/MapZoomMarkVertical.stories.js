// MapZoomMarkVertical.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import MapZoomMarkVertical from './MapZoomMarkVertical';

export default {
  component: MapZoomMarkVertical,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseMapZoomMarkVerticalProps = {
  orientation: 'left',
  y: 100,
  zoom: 2,
}

export const Primary = {
  render: () => {
    return (
      <MapZoomMarkVertical {...baseMapZoomMarkVerticalProps} />
    )
  }
};

export const NoShowWhenZoom1 = {
  render: () => {
    const props = {
      ...baseMapZoomMarkVerticalProps,
      zoom: 1,
    }
    return (
      <MapZoomMarkVertical {...props} />
    )
  }
};

export const SmallerWhenZoomHigher = {
  render: () => {
    const props = {
      ...baseMapZoomMarkVerticalProps,
      zoom: 10,
    }
    return (
      <MapZoomMarkVertical {...props} />
    )
  }
};

export const DifferentY = {
  render: () => {
    const props = {
      ...baseMapZoomMarkVerticalProps,
      y: 200,
    }
    return (
      <MapZoomMarkVertical {...props} />
    )
  }
};

export const OnTheRight = {
  render: () => {
    const props = {
      ...baseMapZoomMarkVerticalProps,
      orientation: 'right',
    }
    return (
      <MapZoomMarkVertical {...props} />
    )
  }
};
