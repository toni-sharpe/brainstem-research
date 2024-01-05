import PropTypes from 'prop-types'

const CurrentFilterListPropType = PropTypes.shape({
  confirmedActors: PropTypes.bool,
  fatal: PropTypes.bool,
  primeSymptomType: PropTypes.bool,
  fjp: PropTypes.bool,
  hardPrimeSymptom: PropTypes.bool,
  incDubdious: PropTypes.bool,
  longTime: PropTypes.bool,
  moderateTime: PropTypes.bool,
  nonFatal: PropTypes.bool,
  secondOrMore: PropTypes.bool,
  thirdOrMore: PropTypes.bool,
})

export default CurrentFilterListPropType