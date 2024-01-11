// HistogramBarListLabel.story.js
import HistogramBarListLabel from './HistogramBarListLabel';
import { PRIME_SYMPTOM_HISTOGRAM_BAR_LIST_MAP } from 'util/Constant/BaseConstantList'

export default {
  component: HistogramBarListLabel,
};

const baseHistogramBarListLabelProps = {
  allBlocks: PRIME_SYMPTOM_HISTOGRAM_BAR_LIST_MAP,
  barCountPerBlock: 3,
  barMargin: 8,
  blockSize: 64,
  i18nKeyOnly: false,
  i18nKey: 'sb-example',
  label: '50..100',
}

export const Primary = {
  render: () => {
    return (
      <HistogramBarListLabel {...baseHistogramBarListLabelProps} />
    )
  }
};

export const Smaller = {
  render: () => {
    const props = {
      ...baseHistogramBarListLabelProps,
      barCountPerBlock: 16,
      blockSize: 8,
      label: 50,
    }

    return (
      <HistogramBarListLabel {...props} />
    )
  }
};

export const SkipI18n = {
  render: () => {
    const props = {
      ...baseHistogramBarListLabelProps,
      i18nKeyOnly: true
    }

    return (
      <HistogramBarListLabel {...props} />
    )
  }
};
