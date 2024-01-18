// Menu.story.js
import Menu from './Menu';

export default {
  component: Menu,
};

const baseMenuProps = {
  currentUrl: 'GanttBarList'
}

export const Primary = {
  render: () => {
    return (
      <Menu {...baseMenuProps} />
    )
  }
};
