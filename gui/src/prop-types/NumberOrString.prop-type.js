import PropTypes from 'prop-types'

const NumberOrStringPropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
])

export default NumberOrStringPropType