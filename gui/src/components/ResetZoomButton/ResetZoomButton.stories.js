// ResetGraphButton.story.js
import ResetGraphButton from './ResetZoomButton';

export default {
  component: ResetGraphButton,
};

const baseResetGraphButtonProps = {
  k: 'zoom',
  stateFn: () => {}
}

export const Primary = {
  render: () => {
    return (
      <ResetGraphButton
        {...baseResetGraphButtonProps}
      />
    )
  }
};
