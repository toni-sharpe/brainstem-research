// SvgCircle.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'

import SvgCircle from './SvgCircle';

export default {
  component: SvgCircle,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseSvgCircleProps = {
  c: { x: 50, y: 50 },
  r: 20,
  fill: '#13a',
  fillOpacity: 0.0,
  k: 'unique',
  stroke: '#13a',
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper>
        <SvgCircle {...baseSvgCircleProps}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const HalfOpacity = {
  render: () => {
    const props = {
      ...baseSvgCircleProps,
      fillOpacity: 0.5,
    }
    return (
      <StoryBookSvgWrapper>
        <SvgCircle {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const SolidFilled = {
  render: () => {
    const props = {
      ...baseSvgCircleProps,
      fillOpacity: 1,
    }
    return (
      <StoryBookSvgWrapper>
        <SvgCircle {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const FullSizeInSvgWith100Grid = {
  render: () => {
    const props = {
      ...baseSvgCircleProps,
      r: 50,
    }
    return (
      <StoryBookSvgWrapper>
        <SvgCircle {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const NotCentred = {
  render: () => {
    const props = {
      ...baseSvgCircleProps,
      c: { x: 25, y: 25 },
    }
    return (
      <StoryBookSvgWrapper>
        <SvgCircle {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const OffTheEdge = {
  render: () => {
    const props = {
      ...baseSvgCircleProps,
      c: { x: 90, y: 90 },
    }
    return (
      <StoryBookSvgWrapper>
        <SvgCircle {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const ManyCircles = {
  render: () => {
    const props = {
      ...baseSvgCircleProps,
      fillOpacity: 0.4,
    }
    return (
      <StoryBookSvgWrapper>
        <SvgCircle {...{ ...props, c: { x: 10, y: 10 }, r: 13, fill: 'hsl(  0.0 80% 50%)', stroke: 'hsl(  0.0 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 32, y:  8 }, r: 15, fill: 'hsl( 14.4 80% 50%)', stroke: 'hsl( 14.4 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 54, y:  6 }, r: 17, fill: 'hsl( 28.8 80% 50%)', stroke: 'hsl( 28.8 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 76, y:  4 }, r: 19, fill: 'hsl( 43.2 80% 50%)', stroke: 'hsl( 43.2 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 88, y:  6 }, r: 21, fill: 'hsl( 57.6 80% 50%)', stroke: 'hsl( 57.6 90% 40%)' }}/>

        <SvgCircle {...{ ...props, c: { x:  6, y: 28 }, r: 23, fill: 'hsl( 72.0 80% 50%)', stroke: 'hsl( 72.0 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 24, y: 30 }, r: 26, fill: 'hsl( 86.4 80% 50%)', stroke: 'hsl( 86.4 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 46, y: 32 }, r: 23, fill: 'hsl(100.8 80% 50%)', stroke: 'hsl(100.8 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 68, y: 34 }, r: 19, fill: 'hsl(115.2 80% 50%)', stroke: 'hsl(115.2 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 90, y: 36 }, r: 17, fill: 'hsl(129.6 80% 50%)', stroke: 'hsl(129.6 90% 40%)' }}/>

        <SvgCircle {...{ ...props, c: { x: 12, y: 54 }, r: 16, fill: 'hsl(144.0 80% 50%)', stroke: 'hsl(144.0 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 34, y: 52 }, r: 15, fill: 'hsl(158.4 80% 50%)', stroke: 'hsl(158.4 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 56, y: 48 }, r: 16, fill: 'hsl(172.8 80% 50%)', stroke: 'hsl(172.8 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 66, y: 46 }, r: 17, fill: 'hsl(187.2 80% 50%)', stroke: 'hsl(187.2 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 88, y: 44 }, r: 19, fill: 'hsl(201.6 80% 50%)', stroke: 'hsl(201.6 90% 40%)' }}/>

        <SvgCircle {...{ ...props, c: { x: 10, y: 66 }, r: 23, fill: 'hsl(216.0 80% 50%)', stroke: 'hsl(216.0 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 32, y: 68 }, r: 24, fill: 'hsl(230.4 80% 50%)', stroke: 'hsl(230.4 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 54, y: 70 }, r: 23, fill: 'hsl(244.8 80% 50%)', stroke: 'hsl(244.8 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 76, y: 72 }, r: 19, fill: 'hsl(259.2 80% 50%)', stroke: 'hsl(259.2 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 86, y: 74 }, r: 17, fill: 'hsl(273.6 80% 50%)', stroke: 'hsl(273.6 90% 40%)' }}/>

        <SvgCircle {...{ ...props, c: { x:  8, y: 96 }, r: 13, fill: 'hsl(288.0 80% 50%)', stroke: 'hsl(288.0 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 30, y: 94 }, r: 11, fill: 'hsl(302.4 80% 50%)', stroke: 'hsl(302.4 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 48, y: 92 }, r: 13, fill: 'hsl(316.8 80% 50%)', stroke: 'hsl(316.8 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 66, y: 88 }, r: 17, fill: 'hsl(331.2 80% 50%)', stroke: 'hsl(331.2 90% 40%)' }}/>
        <SvgCircle {...{ ...props, c: { x: 84, y: 86 }, r: 19, fill: 'hsl(345.6 80% 50%)', stroke: 'hsl(345.6 90% 40%)' }}/>
      </StoryBookSvgWrapper>
    )
  }
};
