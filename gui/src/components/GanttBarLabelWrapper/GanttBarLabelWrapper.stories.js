// GanttBarLabelWrapper.story.js
import GanttBarLabel from 'components/GanttBarLabel/GanttBarLabel'

import GanttBarLabelWrapper from './GanttBarLabelWrapper';

export default {
  component: GanttBarLabelWrapper,
};

const baseGanttBarLabelWrapperProps = {
  labelListPosition: 100,
  scale: {
    stepDivision: 60,
    totalSteps: 5
  },
}

export const Primary = {
  render: () => {
    return (
      <GanttBarLabelWrapper {...baseGanttBarLabelWrapperProps}>
        <GanttBarLabel
          label='Label 1'
          value={47}
          width='100px'
        />
        <GanttBarLabel
          label='Diff. stat.'
          value={31.2}
          width='100px'
        />
        <GanttBarLabel
          label='2nd Label'
          value={79}
          width='100px'
        />
      </GanttBarLabelWrapper>
    )
  }
};
