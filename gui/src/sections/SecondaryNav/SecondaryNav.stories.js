// SecondaryNav.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import Button from 'components/Button/Button'
import SecondaryNav from './SecondaryNav';

export default {
  component: SecondaryNav,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseSecondaryNavProps = {
  ariaLabel: 'Arialabel for nav 1',
  label: 'Nav 1',
  onClick: () => {},
  size: 'medium',
}

export const Primary = {
  render: () => {
    return (
      <SecondaryNav>
        <li>
          <Button {...{
            ...baseSecondaryNavProps,
          }}/>
        </li>
        <li>
          <Button {...{
            ...baseSecondaryNavProps,
            isSelected: true,
            label: 'Nav 2'
          }}/>
        </li>
        <li>
          <Button {...{
            ...baseSecondaryNavProps,
            label: 'Nav 3'
          }}/>
        </li>
      </SecondaryNav>
    )
  }
};
