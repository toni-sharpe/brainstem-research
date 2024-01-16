// SecondaryNavSumAndFilterList.story.js
import SecondaryNavSumAndFilterList from './SecondaryNavSumAndFilterList';

export default {
  component: SecondaryNavSumAndFilterList,
};

const baseSecondaryNavSumAndFilterListProps = {
  dataPointSumList: ['a', 'b', 'c', 'd', 'e'],
  dataPointSumPerMonth: 'c',
  filterBy: ['test', 'X'],
  i18nBase: 'StoryBook',
  setDataPointSumPerMonth: () => {},
  setFilterBy: () => {},
  timeLineFilterList: {
    X: ['test', 'X'],
    Y: ['test', 'Y'],
    Z: ['test', 'Z'],
  }
}

export const Primary = {
  render: () => {
    return (
      <SecondaryNavSumAndFilterList
        {...baseSecondaryNavSumAndFilterListProps}
      />
    )
  }
};
