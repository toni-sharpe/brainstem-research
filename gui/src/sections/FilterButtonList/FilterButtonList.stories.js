// FilterButtonList.story.js
import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'

import FilterButtonList from './FilterButtonList';

export default {
  component: FilterButtonList,
};

const baseFilterButtonListProps = {
  currentFilterList: ORDERED_FILTERS,
  currentUrl: 'GanttBarList'
}

export const Primary = {
  render: () => {
    return (<FilterButtonList {...baseFilterButtonListProps} />)
  }
};
