// ZoomButton.story.js
import ZoomButton from './ZoomButton';

export default {
  component: ZoomButton,
};

const baseZoomButtonProps = {
  k: 'zoom',
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
