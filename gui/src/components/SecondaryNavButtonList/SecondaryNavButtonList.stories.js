// SecondaryNavButtonList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import SecondaryNav from 'sections/SecondaryNav/SecondaryNav';

import SecondaryNavButtonList from './SecondaryNavButtonList';

export default {
  component: SecondaryNavButtonList,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
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
