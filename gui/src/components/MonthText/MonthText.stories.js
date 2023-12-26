// MonthText.story.js
import MonthText from './MonthText';

export default {
  component: MonthText,
};

const baseMonthTextProps = {
  crossover: 70,
  month: '06',
  valOutput: [59, 37, 143, 167, 31, 87, 101, 13, 107, 93, 11, 19],
  valSum: 726,
}

export const Primary = {
  render: () => {
    return (
      <MonthText {...baseMonthTextProps} />
    )
  }
};

export const HighCrossover = {
  render: () => {
    const props = {
      ...baseMonthTextProps,
      crossover: 110,
    }
    return (
      <MonthText {...props} />
    )
  }
};

export const NoCrossoverUsesDefault = {
  render: () => {
    const props = {
      ...baseMonthTextProps,
      crossover: undefined,
    }
    return (
      <MonthText {...props} />
    )
  }
};
