import PropTypes from 'prop-types'

import NumberOrStringPropType from './NumberOrString.prop-type'

const TimeLineBarListScalePropType = PropTypes.shape({
  stepDivision: NumberOrStringPropType,
  totalSteps: NumberOrStringPropType,
})

export default TimeLineBarListScalePropType
