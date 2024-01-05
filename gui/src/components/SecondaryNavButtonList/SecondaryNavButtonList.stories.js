// SecondaryNavButtonList.story.js
import Button from 'components/Button/Button'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav';

import SecondaryNavButtonList from './SecondaryNavButtonList';

export default {
  component: SecondaryNavButtonList,
};

const baseSecondaryNavButtonListProps = {
  currentPanel: 'test-a',
  i18nBase: 'StoryBook',
  panelList: ['test-a', 'test-b', 'test-c', 'test-d', 'test-e'],
  setCurrentPanel: () => {},
}

export const Primary = {
  render: () => {
    return (
      <SecondaryNav>
        <SecondaryNavButtonList {...baseSecondaryNavButtonListProps} />
      </SecondaryNav>
    )
  }
};
