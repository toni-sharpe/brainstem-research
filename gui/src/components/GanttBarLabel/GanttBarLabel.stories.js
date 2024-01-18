// GanttBarLabel.story.js
import GanttBarLabel from './GanttBarLabel';

export default {
  component: GanttBarLabel,
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
