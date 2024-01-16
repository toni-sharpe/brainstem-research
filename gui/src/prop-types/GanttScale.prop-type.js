import PropTypes from 'prop-types'

import NumberOrStringPropType from './NumberOrString.prop-type'

const GanttScalePropType = PropTypes.shape({
  stepDivision: NumberOrStringPropType,
  totalSteps: NumberOrStringPropType,
})

export default GanttScalePropType
