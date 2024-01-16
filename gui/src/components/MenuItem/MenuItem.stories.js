// MenuItem.story.js
import MenuItem from './MenuItem';

export default {
  component: MenuItem,
};

const baseMenuItemProps = {
  currentUrl: 'GanttBarList',
  label: 'Statistics',
  url: 'GanttBarList',
}

export const Selected = {
  render: () => {
    return (
      <nav role='menu'>
        <MenuItem {...baseMenuItemProps} />
      </nav>
    )
  }
};

export const Unselected = {
  render: () => {
    const props = {
      ...baseMenuItemProps,
      currentUrl: 'anti-bias-tool-kit',
    }
    return (
      <nav role='menu'>
        <MenuItem {...props} />
      </nav>
    )
  }
};
