// SumOutput.story.js
import SumOutput from './SumOutput';

export default {
  component: SumOutput,
};

const baseSumOutputProps = {
  crossover: 40,
  fullSum: false,
  key: 'test',
  v: 39,
}

export const BelowCrossover = {
  render: () => {
    return (
      <SumOutput {...baseSumOutputProps} />
    )
  }
};

export const AtCrossover = {
  render: () => {
    const props = {
      ...baseSumOutputProps,
      v: 40,
    }
    return (
      <SumOutput {...props} />
    )
  }
};

export const AboveCrossover = {
  render: () => {
    const props = {
      ...baseSumOutputProps,
      v: 41,
    }
    return (
      <SumOutput {...props} />
    )
  }
};

export const FullSum = {
  render: () => {
    const props = {
      ...baseSumOutputProps,
      fullSum: true,
      v: 240
    }
    return (
      <SumOutput {...props} />
    )
  }
};

export const NoVal = {
  render: () => {
    const props = {
      ...baseSumOutputProps,
      fullSum: true,
      v: null
    }
    return (
      <SumOutput {...props} />
    )
  }
};
