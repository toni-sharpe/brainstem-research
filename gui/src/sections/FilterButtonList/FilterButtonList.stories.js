// FilterButtonList.story.js
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'

import FilterButtonList from './FilterButtonList';

export default {
  component: FilterButtonList,
};

const baseFilterButtonListProps = {
  currentFilterList: CURRENT_FILTER_LIST,
  currentUrl: 'TimeLineBarList'
}

export const Primary = {
  render: () => {
    return (<FilterButtonList {...baseFilterButtonListProps} />)
  }
};
