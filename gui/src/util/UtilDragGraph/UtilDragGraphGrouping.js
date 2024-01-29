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
      }
    ]),
  )
}