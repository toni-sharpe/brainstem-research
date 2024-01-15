export const currentPathogenesisStepList = ['symp_1', 'symp_2'] // left hand list selection
export const currentGroupBy = 'test_1'
export const maxGroupBy = '20'

export const groupList = [
  [0,  10,  '0-10'],
  [10, 20, '10-20']
]

export const builtGroupList = {
   '0-10': {},
  '10-20': {},
}

export const pathoGenList = [{
  symp_1:  5,
  symp_2: 10,
  symp_3: 10, // no symp_3, it's not in the pathGenList selected by the user
  test_1:  5, // both symptoms appear ...
}, {
  symp_1: 30, // removed, it falls outside the groupby groupList
  symp_2: 15,
  symp_3: 10,
  test_1:  9, // ... in both groupList, because the group by conrtols that
}, {
  symp_1: 11,
  symp_2:  9,
  symp_3: 10,
  test_1: 10,
}, {
  symp_1: 11,
  symp_2:  9,
  symp_3: 10,
  test_1: 20,
}, {
  symp_1:  0,
  symp_2:  2,
  symp_3: 10,
  test_1: 19,
}]

export const groupedPathologicalEventList = [
  { symp_1: {
    '0-10': [
      { symp_1:  5,  test_1:  5 },
      { symp_1: 11,  test_1: 10 },
    ],
    '10-20': [
      { symp_1: 11,  test_1: 20 },
      { symp_1:  0,  test_1: 19 },
    ]
  } },
  { symp_2: {
    '0-10': [
      { symp_2: 10, test_1:  5 },
      { symp_2: 15, test_1:  9 },
      { symp_2:  9, test_1: 10 },
    ],
    '10-20': [
      { symp_2:  9, test_1: 20 },
      { symp_2:  2, test_1: 19 },
    ],
  } }
]

const [{ symp_1 }, { symp_2 }] = groupedPathologicalEventList
export const groupedByCorrectGroupByKey = {
   '0-10': { symp_1:  symp_1['0-10'], symp_2:  symp_2['0-10'] },
  '10-20': { symp_1: symp_1['10-20'], symp_2: symp_2['10-20'] },
}

export const histogramRawData = [
  { test_1:  5, symp_1:    5, symp_2: null },
  { test_1: 10, symp_1:   11, symp_2: null },
  { test_1: 20, symp_1:   11, symp_2: null },
  { test_1: 19, symp_1:    0, symp_2: null },
  { test_1:  5, symp_1: null, symp_2:   10 },
  { test_1:  9, symp_1: null, symp_2:   15 },
  { test_1: 10, symp_1: null, symp_2:    9 },
  { test_1: 20, symp_1: null, symp_2:    9 },
  { test_1: 19, symp_1: null, symp_2:    2 },
]

export const histogramReadyData = [
  [ '0-10', { symp_1:  symp_1['0-10'], symp_2:  symp_2['0-10'] }],
  ['10-20', { symp_1: symp_1['10-20'], symp_2: symp_2['10-20'] }],
]
