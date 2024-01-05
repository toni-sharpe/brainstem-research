// TimeLineBarDetailToggleList.story.js

import { STAT_BAR_DETAIL_LIST } from 'util/Constant/BaseConstantList'

import TimeLineBarDetailToggleList from './TimeLineBarDetailToggleList'

export default {
  component: TimeLineBarDetailToggleList,
};

const baseTimeLineBarDetailToggleListProps = {
  setTimeLineBarDetailList: () => {},
  timeLineBarDetailToggleList: STAT_BAR_DETAIL_LIST,
}

export const Primary = {
  render: () => {
    return (
      <TimeLineBarDetailToggleList {...baseTimeLineBarDetailToggleListProps} />
    )
  }
};
