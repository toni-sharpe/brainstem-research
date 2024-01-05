// TimeLineBarLabel.story.js
import TimeLineBarLabel from './TimeLineBarLabel';

export default {
  component: TimeLineBarLabel,
};

const baseTimeLineBarLabelProps = {
  label: 'Stddev',
  value: '32.2 .. 39.8',
  width: '100px'
}

export const Primary = {
  render: () => {
    return (<TimeLineBarLabel {...baseTimeLineBarLabelProps} />)
  }
};
