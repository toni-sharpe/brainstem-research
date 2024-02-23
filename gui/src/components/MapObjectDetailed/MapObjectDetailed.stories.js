// MapObjectDetailed.story.js
import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'
import MapObjectDetailed from './MapObjectDetailed';

export default {
  component: MapObjectDetailed,
};

const baseMapObjectDetailedProps = {
  children: (
    <div className='column-layout space-children--column'>
      <span>Some stuff</span>
      <span>Some morestuff</span>
    </div>
  ),
  closeOnClick: () => {},
  countryName: 'Test country',
  size: 'small',
  h: 100,
  w: 100,
  x: 300,
  y: 300,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper svgScale={'0 0 500 500'}>
        <MapObjectDetailed
          {...baseMapObjectDetailedProps}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const DiffPos = {
  render: () => {
    const props = {
      ...baseMapObjectDetailedProps,
      h: 100,
      w: 100,
      x: 200,
      y: 200,
    }
    return (
      <StoryBookSvgWrapper svgScale={'0 0 500 500'}>
        <MapObjectDetailed
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const DiffSize = {
  render: () => {
    const props = {
      ...baseMapObjectDetailedProps,
      h: 300,
      w: 300,
      x: 200,
      y: 200,
    }
    return (
      <StoryBookSvgWrapper svgScale={'0 0 500 500'}>
        <MapObjectDetailed
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};
