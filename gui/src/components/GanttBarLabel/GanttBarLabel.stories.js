// GanttBarLabel.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import GanttBarLabel from './GanttBarLabel';

export default {
  component: GanttBarLabel,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseGanttBarLabelProps = {
  label: 'Stddev',
  value: '32.2 .. 39.8',
  width: '100px'
}

export const Primary = {
  render: () => {
    return (<GanttBarLabel {...baseGanttBarLabelProps} />)
  }
};
