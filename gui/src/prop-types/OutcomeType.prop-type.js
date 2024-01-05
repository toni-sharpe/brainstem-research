import PropTypes from 'prop-types'

import { OUTCOME_TYPE } from 'util/Constant/DatabaseFixedValueList'

const OutcomeTypePropType = PropTypes.oneOf(OUTCOME_TYPE)

export default OutcomeTypePropType
