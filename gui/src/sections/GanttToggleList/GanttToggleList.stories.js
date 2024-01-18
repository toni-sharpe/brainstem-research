// GanttToggleList.story.js

import { GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'

import GanttToggleList from './GanttToggleList'

export default {
  component: GanttToggleList,
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
