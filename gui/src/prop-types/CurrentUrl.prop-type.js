import PropTypes from 'prop-types'

import { ROOT_MENU_SLUGS } from 'util/Constant/BaseConstantList'

const CurrentUrlPropType = PropTypes.oneOf([...ROOT_MENU_SLUGS, 'time-line']).isRequired

export default CurrentUrlPropType
