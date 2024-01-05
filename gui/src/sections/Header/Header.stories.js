// Header.story.js
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'

import Header from './Header';

export default {
  component: Header,
};

const baseHeaderProps = {
  currentFilterList: CURRENT_FILTER_LIST,
  currentUrl: 'TimeLineBarList'
}

export const Primary = {
  render: () => {
    return (
      <Header {...baseHeaderProps} />
    )
  }
};
