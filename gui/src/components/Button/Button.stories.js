// Button.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'


import Button from './Button';

export default {
  component: Button,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const commonButtonProps = {
  onClick: null,
  label: 'filter',
  isDisabled: false,
  isSelected: false,
  title: 'Test title',
}

export const Primary = {
  render: () => {
    return(
      <Button {...commonButtonProps} />
    )
  }
}

export const Disabled = {
  render: () => {
    const props = {
      ...commonButtonProps,
      isDisabled: true,
    }
    return(
      <Button {...props} />
    )
  }
}

export const Selected = {
  render: () => {
    const props = {
      ...commonButtonProps,
      isSelected: true,
    }
    return(
      <Button {...props} />
    )
  }
}

export const NoTitleNoHoverText = {
  render: () => {
    const props = {
      ...commonButtonProps,
      title: undefined,
    }
    return(
      <Button {...props} />
    )
  }
}

export const DisabledAndSelected = {
  render: () => {
    const props = {
      ...commonButtonProps,
      isDisabled: true,
      isSelected: true,
    }
    return(
      <Button {...props} />
    )
  }
}

export const LabelAccidentallyNotSet = {
  render: () => {
    const props = {
      ...commonButtonProps,
      label: undefined
    }
    return(
      <Button {...props} />
    )
  }
}

export const SmallPadding = {
  render: () => {
    const props = {
      ...commonButtonProps,
      size: 'small',
    }
    return(
      <Button {...props} />
    )
  }
}

export const SmallestPadding = {
  render: () => {
    const props = {
      ...commonButtonProps,
      size: 'smallest',
    }
    return(
      <Button {...props} />
    )
  }
}

export const WithSomeStyles = {
  render: () => {
    const props = {
      ...commonButtonProps,
      style: {
        backgroundColor: '#118',
        color: '#fff',
        fontSize: 40,
        fontWeight: 900,
        padding: 50,
        textTransform: 'uppercase',
      },
    }
    return(
      <Button {...props} />
    )
  }
}
