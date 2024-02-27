// DragGraphSelectedLine.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'
import { DRAG_GRAPH_SVG_SCALE_RADIUS } from 'util/Constant/BaseConstantList'
import DragGraphSelectedLine from './DragGraphSelectedLine';

export default {
  component: DragGraphSelectedLine,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseDragGraphSelectedLineProps = {
  c: { x: 40, y: 40 },
  isSelected: true,
  labelX: 40,
  labelY: 40,
  r: DRAG_GRAPH_SVG_SCALE_RADIUS,
  zoom: 1,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper scale={400}>
        <DragGraphSelectedLine
          {...baseDragGraphSelectedLineProps}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const ActualCenterIsDifferent = {
  render: () => {
    const props = {
      ...baseDragGraphSelectedLineProps,
      c: { x: 100, y: 100 },
      labelX: 100,
      labelY: 100,
    }
    return (
      <StoryBookSvgWrapper scale={400}>
        <DragGraphSelectedLine
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const GreaterZoomButLessThanMinSixRadiusForSelected = {
  render: () => {
    const props = {
      ...baseDragGraphSelectedLineProps,
      c: { x: 250, y: 200 },
      labelX: 250,
      labelY: 200,
      zoom: 3
    }
    return (
      <StoryBookSvgWrapper scale={400}>
        <DragGraphSelectedLine
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};


export const ZoomGreaterThanMinSix = {
  render: () => {
    const props = {
      ...baseDragGraphSelectedLineProps,
      c: { x: 250, y: 200 },
      labelX: 250,
      labelY: 200,
      zoom: 50
    }
    return (
      <StoryBookSvgWrapper scale={400}>
        <DragGraphSelectedLine
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};
