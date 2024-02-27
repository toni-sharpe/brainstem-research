// GanttToggleList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'


import { GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'

import GanttToggleList from './GanttToggleList'

export default {
  component: GanttToggleList,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseGanttToggleListProps = {
  setGanttToggleList: () => {},
  ganttDetailToggleListt: GANTT_TOGGLE_LIST,
}

export const Primary = {
  render: () => {
    return (
      <GanttToggleList {...baseGanttToggleListProps} />
    )
  }
};
