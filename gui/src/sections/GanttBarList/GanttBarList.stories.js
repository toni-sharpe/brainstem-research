// GanttBarList.story.js
import baseGanttBarListProps from './baseGanttBarListProps'

import GanttBarList from './GanttBarList'

export default {
  component: GanttBarList,
};

export const Primary = {
  render: () => {
    return (
      <GanttBarList {...baseGanttBarListProps({ testContext: 'storybook' })} />
    )
  }
};
