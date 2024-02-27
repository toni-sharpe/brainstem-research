// MapObjectSimple.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'
import MapObjectSimple from './MapObjectSimple';

export default {
  component: MapObjectSimple,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseMapObjectSimpleProps = {
  closeOnClick: () => {},
  countryName: 'Test country',
  size: 'medium',
  h: 100,
  w: 100,
  x: 300,
  y: 300,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper scale={500}>
        <MapObjectSimple
          {...baseMapObjectSimpleProps}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const DiffPos = {
  render: () => {
    const props = {
      ...baseMapObjectSimpleProps,
      h: 100,
      w: 100,
      x: 200,
      y: 200,
    }
    return (
      <StoryBookSvgWrapper scale={500}>
        <MapObjectSimple
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const DiffSize = {
  render: () => {
    const props = {
      ...baseMapObjectSimpleProps,
      size: 'small',
    }
    return (
      <StoryBookSvgWrapper scale={500}>
        <MapObjectSimple
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};
