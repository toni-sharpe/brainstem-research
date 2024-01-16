// DataAdjusterButtonList.story.js
import DataAdjusterButtonList from './DataAdjusterButtonList';

export default {
  component: DataAdjusterButtonList,
};

function DataAdjusterStoryWidthSim({ children }) {
  return (<div style={{ width: '80px' }}>{children}</div>)
}

const baseDataAdjusterButtonListProps = {
  adjusterList: [1, 2, 3, 5, 7, 11],
  labelFn: ({ adjustBy }) => `±${adjustBy}`,
  listLabel: 'List',
  onClickHandler: () => {},
  selectedFn: () => {},
}

export const Primary = {
  render: () => {
    return (
      <DataAdjusterStoryWidthSim><DataAdjusterButtonList {...baseDataAdjusterButtonListProps} /></DataAdjusterStoryWidthSim>
    )
  }
};