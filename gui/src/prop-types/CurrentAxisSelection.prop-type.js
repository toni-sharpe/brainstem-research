import PropTypes from 'prop-types'

import ClinicalResponsePropType from './ClinicalResponse.prop-type'

const CurrentAxisSelectionPropType = PropTypes.oneOfType([ClinicalResponsePropType, PropTypes.arrayOf(ClinicalResponsePropType)])

export default CurrentAxisSelectionPropType
