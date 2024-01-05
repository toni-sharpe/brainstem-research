import PropTypes from 'prop-types'

const OnClickPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.oneOf([null]),
])

export default OnClickPropType