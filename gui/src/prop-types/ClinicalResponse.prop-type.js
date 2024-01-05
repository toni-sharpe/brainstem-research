import { pluck } from 'ramda'
import PropTypes from 'prop-types'

import { FULL_DATA_POINT_LIST } from 'util/Constant/FullDataPointList'

const ClinicalResponsePropType = PropTypes.oneOf(pluck(0, FULL_DATA_POINT_LIST))

export default ClinicalResponsePropType
