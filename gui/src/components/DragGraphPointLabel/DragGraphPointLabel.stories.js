// DragGraphPointLabel.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'
import DragGraphPointLabel from './DragGraphPointLabel';

export default {
  component: DragGraphPointLabel,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseDragGraphPointLabelProps = {
  isSelected: true,
  label: 'Sel.',
  onFocus: () => {},
  size: 60,
  title: 'Title',
  value: 51,
  x: 175,
  y: 175,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper scale={400}>
        <DragGraphPointLabel
          {...baseDragGraphPointLabelProps}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const NotSelected = {
  render: () => {
    const props = {
      ...baseDragGraphPointLabelProps,
      isSelected: false,
      label: 'Not sel.'
    }
    return (
      <StoryBookSvgWrapper scale={400}>
        <DragGraphPointLabel
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const DifferentSize = {
  render: () => {
    const props = {
      ...baseDragGraphPointLabelProps,
      size: 100,
    }
    return (
      <StoryBookSvgWrapper scale={400}>
        <DragGraphPointLabel
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const XYChange = {
  render: () => {
    const props = {
      ...baseDragGraphPointLabelProps,
      x: 300,
      y: 100,
    }
    return (
      <StoryBookSvgWrapper scale={400}>
        <DragGraphPointLabel
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const NoLabel = {
  render: () => {
    const props = {
      ...baseDragGraphPointLabelProps,
      label: undefined,
    }
    return (
      <StoryBookSvgWrapper scale={400}>
        <DragGraphPointLabel
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const NoValue = {
  render: () => {
    const props = {
      ...baseDragGraphPointLabelProps,
      value: undefined,
    }
    return (
      <StoryBookSvgWrapper scale={400}>
        <DragGraphPointLabel
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};

export const NoLabelOrValue = {
  render: () => {
    const props = {
      ...baseDragGraphPointLabelProps,
      label: undefined,
      value: undefined,
    }
    return (
      <StoryBookSvgWrapper scale={400}>
        <DragGraphPointLabel
          {...props}
        />
      </StoryBookSvgWrapper>
    )
  }
};
