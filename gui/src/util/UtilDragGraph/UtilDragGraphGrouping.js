import { filter, groupBy, map, pipe, prop, toPairs, type } from 'ramda'

import { numberPrecision } from 'util/Util/Util'

export function groupByAndCountPipe({ k }) {
  return pipe(
    groupBy(
      type(k) === 'Array'
        ? ({
          care_technique_4,
          care_technique_5,
          care_equipment_2,
          care_equipment_3,
          care_technique_6,
          care_technique_7,
        }) => {
          const ct4 = care_technique_4 ? '3rd.' : ''
          const ct5 = care_technique_5 ? 'QR.' : ''
          const ct2 = care_equipment_2 ? 'NP.' : ''
          const ct3 = care_equipment_3 ? 'BP.' : ''
          const ct6 = care_technique_6 ? 'HB.' : ''
          const ct7 = care_technique_7 ? 'OB.' : ''

          return `${ct4}${ct5}${ct2}${ct3}${ct6}${ct7}`
        }
        : prop(k)
    ),
    toPairs,
    filter(([v, _]) => !['', 'null', 'UNK'].includes(v)),
    map(([v, list]) => {
      const length = list.length

      const careLevel = numberPrecision({
        n: list.reduce((acc, {
            overall_patient_rating,
          }) => acc + overall_patient_rating,
          0
        ) / length
      })

      const dcb = list.filter(({ first_prime_symptom }) => !!first_prime_symptom).length
      const nonSevere = list.filter(({ outcome }) => outcome === 'NSV').length
      const severe = list.filter(({ outcome }) => outcome === 'SEV').length

      return [
        v, {
          careLevel,
          dcb,
          dcbPerc: numberPrecision({ n: dcb / length * 100 }),
          length,
          nonSevere,
          nonSeverePerc: numberPrecision({ n: nonSevere / length * 100 }),
          severe,
          severePerc: numberPrecision({ n: severe / length * 100 }),
        }
      ]
    }),
  )
}
