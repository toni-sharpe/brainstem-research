// MonthText.story.js
import MonthBlock from 'components/MonthBlock/MonthBlock'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'
import MonthText from './MonthText';

export default {
  component: MonthText,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper widthSetTo100>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseMonthTextProps = {
  crossover: 70,
  month: '06',
  valOutputList: [59, 37, 143, 167, 31, 87, 101, 13, 107, 93, 11, 19],
  valSum: 726,
}

const monthBlockProps = {
  currentMonth: '06',
  currentYear: '2023',
  monthType: 'this-month',
}

export const Primary = {
  render: () => {
    return (
      <MonthBlock
        {...monthBlockProps}
        monthText={<MonthText {...baseMonthTextProps} />}
      />
    )
  }
};

export const JustValSum = {
  render: () => {
    const props = {
      ...baseMonthTextProps,
      valOutputList: [],
    }
    return (
      <MonthBlock
        {...monthBlockProps}
        monthText={<MonthText {...props} />}
      />
    )
  }
};

export const JustOneVal = {
  render: () => {
    const props = {
      ...baseMonthTextProps,
      valOutputList: [50],
    }
    return (
      <MonthBlock
        {...monthBlockProps}
        monthText={<MonthText {...props} />}
      />
    )
  }
};

export const JustOneValAboveCrossover = {
  render: () => {
    const props = {
      ...baseMonthTextProps,
      crossover: 47,
      valOutputList: [53],
    }
    return (
      <MonthBlock
        {...monthBlockProps}
        monthText={<MonthText {...props} />}
      />
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
      <MonthBlock
        {...monthBlockProps}
        monthText={<MonthText {...props} />}
      />
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
      <MonthBlock
        {...monthBlockProps}
        monthText={<MonthText {...props} />}
      />
    )
  }
};

export const NoValsSumZero = {
  render: () => {
    const props = {
      ...baseMonthTextProps,
      valOutputList: [],
      valSum: 0,
    }
    return (
      <MonthBlock
        {...monthBlockProps}
        monthText={<MonthText {...props} />}
      />
    )
  }
};

export const NoValsOrSum = {
  render: () => {
    const props = {
      ...baseMonthTextProps,
      valOutputList: undefined,
      valSum: undefined,
    }
    return (
      <MonthBlock
        {...monthBlockProps}
        monthText={<MonthText {...props} />}
      />
    )
  }
};
