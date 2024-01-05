import PropTypes from 'prop-types'

const AxisPropType = PropTypes.oneOf([
  'groupBy', 'GROUPBY',
  'stats',   'STATS',
  'x',       'X',
  'y',       'Y'
])

export default AxisPropType
