import PropTypes from 'prop-types'

import {
  DRAG_GRAPH_SVG_SCALE,
  SCATTER_SVG_SCALE,
  SCATTER_SCALE_LABEL_OFFSET,
} from 'util/Constant/BaseConstantList'

const SvgScalePropType = PropTypes.oneOf([
  DRAG_GRAPH_SVG_SCALE,
  SCATTER_SVG_SCALE,
  SCATTER_SVG_SCALE + SCATTER_SCALE_LABEL_OFFSET,
])

export default SvgScalePropType
