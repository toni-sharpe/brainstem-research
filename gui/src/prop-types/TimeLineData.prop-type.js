import PropTypes from 'prop-types'

import ConsultantDoctorPropType from 'prop-types/ConsultantDoctor.prop-type'
import OutcomePropType from 'prop-types/Outcome.prop-type'
import OutcomeTypePropType from 'prop-types/OutcomeType.prop-type'

export default PropTypes.arrayOf(
  PropTypes.shape({
    consultant_doctor: ConsultantDoctorPropType,
    overall_patient_rating: PropTypes.number,
    pathological_severity: PropTypes.number,
    care_error_level: PropTypes.number,
    outcome_type: OutcomeTypePropType ,
    outcome: OutcomePropType,
  })
)
