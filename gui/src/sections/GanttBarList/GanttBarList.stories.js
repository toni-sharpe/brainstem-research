// GanttBarList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

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
