// SvgPath.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'

import SvgPath from './SvgPath';

export default {
  component: SvgPath,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseSvgPathProps = {
  fill: '#55c',
  fillOpacity: 1,
  d: 'M100,100 L100,200 L200,200 L200,100 100,100Z',
  stroke: '#009',
  strokeOpacity: 1,
  strokeWidth: 3,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper scale='300'>
        <SvgPath {...baseSvgPathProps}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const NoStroke = {
  render: () => {
    const props = {
      ...baseSvgPathProps,
      strokeWidth: 0,
    }
    return (
      <StoryBookSvgWrapper scale='300'>
        <SvgPath {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const NoFill = {
  render: () => {
    const props = {
      ...baseSvgPathProps,
      fillOpacity: 0,
    }
    return (
      <StoryBookSvgWrapper scale='300'>
        <SvgPath {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};
