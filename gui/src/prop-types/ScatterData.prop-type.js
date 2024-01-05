import * as ramda from 'ramda'
import PropTypes from 'prop-types'

import { KEY_ORDER_MAP } from 'util/Constant/FullDataPointList'

export default PropTypes.arrayOf(
  PropTypes.shape(
    ramda.mergeAll(
      KEY_ORDER_MAP.map(
        ([k,_]) => (
          {
            [k]: PropTypes.number
          }
        )
      )
    )
  )
)
