// SvgPolygon.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'

import SvgPolygon from './SvgPolygon';

export default {
  component: SvgPolygon,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const basPolygonProps = {
  fill: '#5c5',
  fillOpacity: 1,
  points: [[100,100], [100,200], [200,200], [200,100], [100,100]],
  stroke: '#090',
  strokeOpacity: 1,
  strokeWidth: 3,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper scale='350'>
        <SvgPolygon {...basPolygonProps}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const NoStroke = {
  render: () => {
    const props = {
      ...basPolygonProps,
      strokeWidth: 0,
    }
    return (
      <StoryBookSvgWrapper scale='350'>
        <SvgPolygon {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const NoFill = {
  render: () => {
    const props = {
      ...basPolygonProps,
      fillOpacity: 0,
    }
    return (
      <StoryBookSvgWrapper scale='350'>
        <SvgPolygon {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};
