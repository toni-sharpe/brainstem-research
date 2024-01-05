import PropTypes from 'prop-types'

import OutcomePropType from './Outcome.prop-type'
import PrimeSymptomAbbrevPropType from './PrimeSymptomAbbrev.prop-type'

const BiasedTimingSimPropType = PropTypes.arrayOf(
  PropTypes.shape({
    consultant_doctor: PropTypes.string,
    first_prime_symptom: PropTypes.number,
    first_prime_symptom_type: PrimeSymptomAbbrevPropType,
    outcome: OutcomePropType,
    outlier: PropTypes.bool,
    pathological_event_duration: PropTypes.number,
  })
)

export default BiasedTimingSimPropType