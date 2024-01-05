// TimeLineBarList.story.js
import baseTimeLineBarListProps from './baseTimeLineBarListProps'

import TimeLineBarList from './TimeLineBarList'

export default {
  component: TimeLineBarList,
};

export const Primary = {
  render: () => {
    return (
      <TimeLineBarList {...baseTimeLineBarListProps({ testContext: 'storybook' })} />
    )
  }
};
