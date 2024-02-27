// PathogenesisGantt.story.js
import APIGanttData from 'example-data/APIGantt.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import PathogenesisGantt from './PathogenesisGantt';

export default {
  component: PathogenesisGantt,
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

const basePathogenesisGanttProps = {
  data: APIGanttData
}

export const RegularPage = {
  render: () => {
    return (
      <PathogenesisGantt {...basePathogenesisGanttProps} />
    )
  }
};
