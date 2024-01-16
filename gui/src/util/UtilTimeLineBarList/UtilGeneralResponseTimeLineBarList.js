import { filter, pluck, pipe, type } from 'ramda'

import { throwError } from 'util/Util/Util'
import { GENERAL_RESPONSE_MAP } from 'util/Constant/FullDataPointList'
import { mapToTimeLineBars } from 'util/UtilTimeLineBarList/UtilTimeLineBarList'
import { showBasedOnSevereFilter } from 'util/UtilFilter/UtilFilter'


export function calcGeneralResponseTimeLineBarStatList({ currentFilterList = [], data }) {
  throwError({
    check: type(data) === 'Array',
    i18nKey: 'generalResponseTimeBarDataIsArray',
  })

  return GENERAL_RESPONSE_MAP.map(([k, barData]) => {
    return pipe(
      pluck(k),
      filter(Boolean),
      filter(statSet => showBasedOnSevereFilter({ currentFilterList, k })),
      mapToTimeLineBars({ data: [k, barData], i18nBase: 'CommonClinicalResponses' }),
    )(data)
  })
}
