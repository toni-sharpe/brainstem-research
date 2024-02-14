// ResetGraphButton.story.js
import ResetGraphButton from './ResetGraphButton';

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
