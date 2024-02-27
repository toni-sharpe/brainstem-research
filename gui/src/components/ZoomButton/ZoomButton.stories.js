// ZoomButton.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import ZoomButton from './ZoomButton';

export default {
  component: ZoomButton,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseZoomButtonProps = {
  k: '1',
  stateFn: () => {}
}

export const Primary = {
  render: () => {
    return (
      <ZoomButton
        {...baseZoomButtonProps}
      />
    )
  }
};

export const DifferentNumber = {
  render: () => {
    const props = {
      ...baseZoomButtonProps,
      k: 10,
    }
    return (
      <ZoomButton
        {...props}
      />
    )
  }
};
