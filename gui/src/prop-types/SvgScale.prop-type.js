import PropTypes from 'prop-types'

import { DRAG_GRAPH_SVG_SCALE, SCATTER_SVG_SCALE } from 'util/Constant/BaseConstantList'

const SvgScalePropType = PropTypes.oneOf([DRAG_GRAPH_SVG_SCALE, SCATTER_SVG_SCALE])

export default SvgScalePropType
