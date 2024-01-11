import PropTypes from 'prop-types'

const HistogramTranslationPropType = PropTypes.shape ({
  barList: PropTypes.arrayOf(PropTypes.string),
  groupBy: PropTypes.string,
})

export default HistogramTranslationPropType
