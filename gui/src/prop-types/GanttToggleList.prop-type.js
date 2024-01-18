import PropTypes from 'prop-types'

const GanttToggleListPropType = PropTypes.shape({
  deviation: PropTypes.bool,
  fatLines: PropTypes.bool,
  label: PropTypes.bool,
  mean: PropTypes.bool,
  median: PropTypes.bool,
  quantile: PropTypes.bool,
  quantileNumber: PropTypes.bool,
  range: PropTypes.bool,
  statList: PropTypes.bool,
})

export default GanttToggleListPropType
