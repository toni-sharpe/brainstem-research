// HistogramBarGroupLabel.story.js
import HistogramBarGroupLabel from './HistogramBarGroupLabel';
import { PRIME_SYMPTOM_HISTOGRAM_BAR_GROUP_MAP } from 'util/Constant/BaseConstantList'

export default {
  component: HistogramBarGroupLabel,
};

const baseHistogramBarGroupLabelProps = {
  allBlocks: PRIME_SYMPTOM_HISTOGRAM_BAR_GROUP_MAP,
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
      <HistogramBarGroupLabel {...baseHistogramBarGroupLabelProps} />
    )
  }
};

export const Smaller = {
  render: () => {
    const props = {
      ...baseHistogramBarGroupLabelProps,
      barCountPerBlock: 16,
      blockSize: 8,
      label: 50,
    }

    return (
      <HistogramBarGroupLabel {...props} />
    )
  }
};

export const SkipI18n = {
  render: () => {
    const props = {
      ...baseHistogramBarGroupLabelProps,
      i18nKeyOnly: true
    }

    return (
      <HistogramBarGroupLabel {...props} />
    )
  }
};
