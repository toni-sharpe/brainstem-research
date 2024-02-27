// DragGraphButton.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'


import DragGraphButton from './DragGraphButton';

export default {
  component: DragGraphButton,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
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
