// FactorToggle.story.js
import FactorToggle from './FactorToggle';

export default {
  component: FactorToggle,
};

const baseFactorToggleProps = {
  currentFactorOn: true,
  setCurrentFactorOn: () => {}
}

export const Primary = {
  render: () => {
    return (<FactorToggle {...baseFactorToggleProps} />)
  }
};
