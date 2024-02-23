// ZoomButton.story.js
import ZoomButton from './ZoomButton';

export default {
  component: ZoomButton,
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
