import PropTypes from 'prop-types'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import ResponseToneType from 'prop-types/ResponseTone.prop-type'

export const GanttBarDataPropType = PropTypes.shape({
  count: NumberOrStringPropType,
  label: NumberOrStringPropType,
  max: NumberOrStringPropType,
  maxMda: NumberOrStringPropType,
  maxStd: NumberOrStringPropType,
  mean: NumberOrStringPropType,
  median: NumberOrStringPropType,
  min: NumberOrStringPropType,
  minMda: NumberOrStringPropType,
  minStd: NumberOrStringPropType,
  quantile: PropTypes.arrayOf(PropTypes.number),
  skewness: NumberOrStringPropType,
  std: NumberOrStringPropType,
  tone: ResponseToneType,
})
