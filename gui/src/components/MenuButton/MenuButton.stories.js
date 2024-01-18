// MenuButton.story.js
import MenuButton from './MenuButton';

export default {
  component: MenuButton,
};

const commonMenuButtonProps = {
  onClick: null,
  label: 'Open',
  title: 'Open',
}

export const Primary = {
  render: () => {
    return(
      <MenuButton {...commonMenuButtonProps} />
    )
  }
}
