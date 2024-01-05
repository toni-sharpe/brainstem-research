import PropTypes from 'prop-types'

import { OUTCOME } from 'util/Constant/DatabaseFixedValueList'

const OutcomeTypePropType = PropTypes.oneOf(OUTCOME)

export default OutcomeTypePropType
