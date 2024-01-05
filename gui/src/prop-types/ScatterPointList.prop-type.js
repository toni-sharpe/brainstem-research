import PropTypes from 'prop-types'

export default PropTypes.arrayOf(
  PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired
)