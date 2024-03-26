import PropTypes from 'prop-types'

import NumberOrStringPropType from './NumberOrString.prop-type'

const KeyHintPositionStylePropType = PropTypes.shape({
  top: NumberOrStringPropType,
  right: NumberOrStringPropType,
  bottom: NumberOrStringPropType,
  left: NumberOrStringPropType,
})

export default KeyHintPositionStylePropType
