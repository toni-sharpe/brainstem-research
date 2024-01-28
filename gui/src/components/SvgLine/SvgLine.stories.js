// SvgLine.story.js
import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'

import SvgLine from './SvgLine';

export default {
  component: SvgLine,
};

const baseSvgLineProps = {
  stroke: '#13a',
  x: [10, 10],
  y: [90, 90],
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper>
        <SvgLine {...baseSvgLineProps}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const XIsTheStartCoords = {
  render: () => {
    const props = {
      ...baseSvgLineProps,
      x: [10, 90],
    }
    return (
      <StoryBookSvgWrapper>
        <SvgLine {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const YIsTheEndCoords = {
  render: () => {
    const props = {
      ...baseSvgLineProps,
      y: [10, 90],
    }
    return (
      <StoryBookSvgWrapper>
        <SvgLine {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const ManyLines = {
  render: () => {
    return (
      <StoryBookSvgWrapper>
        <SvgLine {...{ stroke: 'hsl(  0 80% 50%)', x: [10, 10], y: [90, 10] }}/>
        <SvgLine {...{ stroke: 'hsl( 20 80% 50%)', x: [10, 20], y: [90, 20] }}/>
        <SvgLine {...{ stroke: 'hsl( 40 80% 50%)', x: [10, 30], y: [90, 30] }}/>
        <SvgLine {...{ stroke: 'hsl( 60 80% 50%)', x: [10, 40], y: [90, 40] }}/>
        <SvgLine {...{ stroke: 'hsl( 80 80% 50%)', x: [10, 50], y: [90, 50] }}/>
        <SvgLine {...{ stroke: 'hsl(100 80% 50%)', x: [10, 60], y: [90, 60] }}/>
        <SvgLine {...{ stroke: 'hsl(120 80% 50%)', x: [10, 70], y: [90, 70] }}/>
        <SvgLine {...{ stroke: 'hsl(140 80% 50%)', x: [10, 80], y: [90, 80] }}/>
        <SvgLine {...{ stroke: 'hsl(160 80% 50%)', x: [10, 90], y: [90, 90] }}/>

        <SvgLine {...{ stroke: 'hsl(180 80% 50%)', x: [10, 10], y: [10, 90] }}/>
        <SvgLine {...{ stroke: 'hsl(200 80% 50%)', x: [20, 10], y: [20, 90] }}/>
        <SvgLine {...{ stroke: 'hsl(220 80% 50%)', x: [30, 10], y: [30, 90] }}/>
        <SvgLine {...{ stroke: 'hsl(240 80% 50%)', x: [40, 10], y: [40, 90] }}/>
        <SvgLine {...{ stroke: 'hsl(260 80% 50%)', x: [50, 10], y: [50, 90] }}/>
        <SvgLine {...{ stroke: 'hsl(280 80% 50%)', x: [60, 10], y: [60, 90] }}/>
        <SvgLine {...{ stroke: 'hsl(300 80% 50%)', x: [70, 10], y: [70, 90] }}/>
        <SvgLine {...{ stroke: 'hsl(320 80% 50%)', x: [80, 10], y: [80, 90] }}/>
        <SvgLine {...{ stroke: 'hsl(340 80% 50%)', x: [90, 10], y: [90, 90] }}/>
      </StoryBookSvgWrapper>
    )
  }
};
