import { filter, pluck, pipe, type } from 'ramda'

import { throwError } from 'util/Util/Util'
import { GENERAL_RESPONSE_MAP } from 'util/Constant/FullDataPointList'
import { mapToGanttBars } from 'util/UtilGanttBarList/UtilGanttBarList'
import { showBasedOnSevereFilter } from 'util/UtilFilter/UtilFilter'


export function calcPathogenesisGantt({ currentFilterList = [], data }) {
  throwError({
    check: type(data) === 'Array',
    i18nKey: 'generalResponseTimeBarDataIsArray',
  })

  return GENERAL_RESPONSE_MAP.map(([k, barData]) => {
    return pipe(
      pluck(k),
      filter(Boolean),
      filter(statSet => showBasedOnSevereFilter({ currentFilterList, k })),
      mapToGanttBars({ data: [k, barData], i18nBase: 'CommonClinicalResponses' }),
    )(data)
  })
}
