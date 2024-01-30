// DragGraphButton.story.js
import DragGraphButton from './DragGraphButton';

export default {
  component: DragGraphButton,
};

const baseDragGraphButtonProps = {
  k: 'zoom',
  stateFn: () => {}
}

export const Primary = {
  render: () => {
    return (
      <DragGraphButton
        {...baseDragGraphButtonProps}
      />
    )
  }
};
