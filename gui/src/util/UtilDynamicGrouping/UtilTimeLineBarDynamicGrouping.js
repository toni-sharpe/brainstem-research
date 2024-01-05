import {
  ascend,
  filter,
  groupBy,
  map,
  pick,
  pipe,
  pluck,
  prop,
  sort,
  toPairs,
  type,
} from 'ramda'


export function groupByStart({ currentGroupBy, currentResponse }) {
  return pipe(
    map(d => {
      return pick([
        currentGroupBy,
        ...(
          type(currentResponse) === 'Array'
            ? currentResponse
            : [currentResponse]
          )
        ],
        d
      )
    }),
    filter(response => response[currentGroupBy] !== null),
  )
}


export function groupByResponse({ currentGroupBy, currentResponse }) {
  return pipe(
    groupByStart({ currentGroupBy, currentResponse }),
    sort(ascend(prop(currentGroupBy))),
    map(calcGroupsFromCurrentStat({ currentGroupBy })),
    groupBy(prop(currentGroupBy)),
    toPairs,
  )
}


export function calcGroupsFromCurrentStat({ currentGroupBy }) {
  return (response) => {
    let groupByVal = `${response[currentGroupBy]}`
    if (response[currentGroupBy] > 10) {
      const low = Math.floor(parseInt(response[currentGroupBy]) / 10) * 10
      const hi = low + 9
      groupByVal = `${low}-${hi}`
    }
    return {
      ...response,
      [currentGroupBy]: groupByVal
    }
  }
}


export function calcValsForGrouping({ currentResponse, data }) {
  return pipe(
    pluck(currentResponse),
    filter(Boolean)
  )(data)
}
