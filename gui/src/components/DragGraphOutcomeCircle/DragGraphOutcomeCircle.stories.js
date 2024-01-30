// DragGraphOutcomeCircle.story.js
import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'

import DragGraphOutcomeCircle from './DragGraphOutcomeCircle';

export default {
  component: DragGraphOutcomeCircle,
};

const baseDragGraphOutcomeCircleProps = {
  c: { x: 50, y: 50 },
  fill: 'blue',
  r: 10,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper>
        <DragGraphOutcomeCircle {...baseDragGraphOutcomeCircleProps}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const NotCentered = {
  render: () => {
    const props = {
      ...baseDragGraphOutcomeCircleProps,
      c: { x: 0, y: 0 },
    }
    return (
      <StoryBookSvgWrapper>
        <DragGraphOutcomeCircle {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const DifferentColorAndOpacity = {
  render: () => {
    const props = {
      ...baseDragGraphOutcomeCircleProps,
      fill: 'purple',
      fillOpacity: 0.3,
    }
    return (
      <StoryBookSvgWrapper>
        <DragGraphOutcomeCircle {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};

export const DifferentSize = {
  render: () => {
    const props = {
      ...baseDragGraphOutcomeCircleProps,
      r: 3
    }
    return (
      <StoryBookSvgWrapper>
        <DragGraphOutcomeCircle {...props}/>
      </StoryBookSvgWrapper>
    )
  }
};
