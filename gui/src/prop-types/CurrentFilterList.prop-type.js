import PropTypes from 'prop-types'

const CurrentFilterListPropType = PropTypes.shape({
  confirmedActors: PropTypes.bool,
  fjp: PropTypes.bool,
  hardPrimeSymptom: PropTypes.bool,
  incDubdious: PropTypes.bool,
  longTime: PropTypes.bool,
  moderateTime: PropTypes.bool,
  nonSevere: PropTypes.bool,
  primeSymptomType: PropTypes.bool,
  secondOrMore: PropTypes.bool,
  severe: PropTypes.bool,
  thirdOrMore: PropTypes.bool,
})

export default CurrentFilterListPropType