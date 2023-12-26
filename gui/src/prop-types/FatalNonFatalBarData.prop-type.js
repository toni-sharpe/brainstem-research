import PropTypes from 'prop-types'

const FatalNonFatalBarDataPropType = PropTypes.exact({
  fatal: PropTypes.number,
  nonFatal: PropTypes.number,
})

export default FatalNonFatalBarDataPropType
