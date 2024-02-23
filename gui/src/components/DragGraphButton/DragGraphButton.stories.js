// DragGraphButton.story.js
import DragGraphButton from './DragGraphButton';

export default {
  component: DragGraphButton,
};

const baseDragGraphButtonProps = {
  k: 'sbZoom',
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
