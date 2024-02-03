// Header.story.js
import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'

import Header from './Header';

export default {
  component: Header,
};

const baseHeaderProps = {
  currentFilterList: ORDERED_FILTERS,
  currentUrl: 'GanttBarList'
}

export const Primary = {
  render: () => {
    return (
      <Header {...baseHeaderProps} />
    )
  }
};
