// TimeLineBarLabelWrapper.story.js
import TimeLineBarLabel from 'components/TimeLineBarLabel/TimeLineBarLabel'

import TimeLineBarLabelWrapper from './TimeLineBarLabelWrapper';

export default {
  component: TimeLineBarLabelWrapper,
};

const baseTimeLineBarLabelWrapperProps = {
  labelListPosition: 100,
  scale: {
    stepDivision: 60,
    totalSteps: 5
  },
}

export const Primary = {
  render: () => {
    return (
      <TimeLineBarLabelWrapper {...baseTimeLineBarLabelWrapperProps}>
        <TimeLineBarLabel
          label='Label 1'
          value={47}
          width='100px'
        />
        <TimeLineBarLabel
          label='Diff. stat.'
          value={31.2}
          width='100px'
        />
        <TimeLineBarLabel
          label='2nd Label'
          value={79}
          width='100px'
        />
      </TimeLineBarLabelWrapper>
    )
  }
};
