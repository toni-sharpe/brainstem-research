// InteractiveGantt.story.js
import APIGanttData from 'example-data/APIGantt.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import InteractiveGantt from './InteractiveGantt';

export default {
  component: InteractiveGantt,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        height={716}
        isScreenWidth
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseInteractiveGanttProps = {
  statisticList: APIGanttData
}

export const RegularPage = {
  render: () => {
    return (
      <InteractiveGantt {...baseInteractiveGanttProps} />
    )
  }
};
