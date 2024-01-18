// MenuButton.story.js
import MenuButton from './MenuButton';

export default {
  component: MenuButton,
};

const commonMenuButtonProps = {
  onClick: () => {},
  label: 'Open',
  title: 'Open',
}

export const Primary = {
  render: () => {
    return(
      <div style={{ width: '100px', margin: '0 auto' }}>
        <MenuButton {...commonMenuButtonProps} />
      </div>
    )
  }
}
