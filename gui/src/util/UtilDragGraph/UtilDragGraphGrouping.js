import { filter, groupBy, map, pipe, prop, toPairs } from 'ramda'


export function groupByAndCountPipe({ k }) {
  return pipe(
    groupBy(prop(k)),
    toPairs,
    filter(([v, _]) => !['', 'null', 'UNK'].includes(v)),
    map(([v, list]) => [
      v, {
        length: list.length,
        severe: list.filter(({ outcome }) => outcome === 'SEV').length,
        nonSevere: list.filter(({ outcome }) => outcome === 'NSV').length,
        // careLevel: list.reduce((
        //   acc, {
        //     overall_patient_rating
        //   }
        // ) => {
        //   return ([
        //     acc[0] + overall_patient_rating,
        //     overall_patient_rating && overall_patient_rating > 0
        //       ? acc[1] + 1
        //       : acc[1]
        //     ])
        //   },
        //   [0, 0]
        // ),
      }
    ]),
  )
}