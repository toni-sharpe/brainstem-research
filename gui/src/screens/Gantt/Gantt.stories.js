// Gantt.story.js
import APIGanttData from 'example-data/APIGantt.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import Gantt from './Gantt';

export default {
  component: Gantt,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        height={740}
        isScreenWidth
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseGanttProps = {
  data: APIGanttData
}

export const RegularPage = {
  render: () => {
    return (
      <Gantt {...baseGanttProps} />
    )
  }
};
