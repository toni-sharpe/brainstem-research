import i18next from 'util/i18next/i18next'
import { type } from 'ramda'
import PropTypes from 'prop-types'

const LabelValPropType = PropTypes.arrayOf(function(propValue){
  if (type(propValue[0]) === 'String' && type(propValue[1]) === 'Object') {
    return true
  }
  return new Error(i18next.t('ErrorList.dragGraphLabelValProp'))
})

export default LabelValPropType
