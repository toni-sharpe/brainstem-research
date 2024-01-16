// PathogenesisGantt.story.js
import APIGanttData from 'example-data/APIGantt.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import PathogenesisGantt from './PathogenesisGantt';

export default {
  component: PathogenesisGantt,
};

const basePathogenesisGanttProps = {
  data: APIGanttData
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <PathogenesisGantt {...basePathogenesisGanttProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
