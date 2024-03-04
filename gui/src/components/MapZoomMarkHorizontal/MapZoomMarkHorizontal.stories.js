// MapZoomMarkHorizontal.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import MapZoomMarkHorizontal from './MapZoomMarkHorizontal';

export default {
  component: MapZoomMarkHorizontal,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseMapZoomMarkHorizontalProps = {
  orientation: 'top',
  x: 100,
  zoom: 2,
}

export const Primary = {
  render: () => {
    return (
      <MapZoomMarkHorizontal {...baseMapZoomMarkHorizontalProps} />
    )
  }
};

export const NoShowWhenZoom1 = {
  render: () => {
    const props = {
      ...baseMapZoomMarkHorizontalProps,
      zoom: 1,
    }
    return (
      <MapZoomMarkHorizontal {...props} />
    )
  }
};

export const SmallerWhenZoomHigher = {
  render: () => {
    const props = {
      ...baseMapZoomMarkHorizontalProps,
      zoom: 10,
    }
    return (
      <MapZoomMarkHorizontal {...props} />
    )
  }
};

export const DifferentX = {
  render: () => {
    const props = {
      ...baseMapZoomMarkHorizontalProps,
      x: -200,
    }
    return (
      <MapZoomMarkHorizontal {...props} />
    )
  }
};

export const OnTheBottom = {
  render: () => {
    const props = {
      ...baseMapZoomMarkHorizontalProps,
      orientation: 'bottom',
    }
    return (
      <MapZoomMarkHorizontal {...props} />
    )
  }
};

