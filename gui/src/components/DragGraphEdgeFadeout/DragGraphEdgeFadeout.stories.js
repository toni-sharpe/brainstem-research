// DragGraphEdgeFadeout.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'
import DragGraphEdgeFadeout from './DragGraphEdgeFadeout';

export default {
  component: DragGraphEdgeFadeout,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseDragGraphPointLabelProps = {
  c: { x: 320, y: 320 },
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper scale={640}>
        <DragGraphEdgeFadeout
          {...baseDragGraphPointLabelProps}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const CenterCanBeDifferent = {
  render: () => {
    const props = {
      ...baseDragGraphPointLabelProps,
      c: { x: 250, y: 250 },
    }
    return (
      <StoryBookSvgWrapper scale={640}>
        <DragGraphEdgeFadeout
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};
