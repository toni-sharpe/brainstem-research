// InteractiveGantt.story.js
import APIGanttData from 'example-data/APIGantt.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import InteractiveGantt from './InteractiveGantt';

export default {
  component: InteractiveGantt,
};

const baseInteractiveGanttProps = {
  statisticList: APIGanttData
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <InteractiveGantt {...baseInteractiveGanttProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
