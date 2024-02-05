import { calcMaxBasedDisplay } from './UtilScaleGranularity'


/*
 * calcMaxBasedDisplay()
 */
test('               <2', () => {
  const result = {
    highlight:    0.5,
         show:    0.1
  }
  expect(calcMaxBasedDisplay({ max:     1.9 })).toEqual(result)
})

test('        >=2 && <3', () => {
  const result = {
    highlight:    1,
         show:    0.5
  }
  expect(calcMaxBasedDisplay({ max:     2   })).toEqual(result)
  expect(calcMaxBasedDisplay({ max:     2.9 })).toEqual(result)
})

test('        >=3 && <4', () => {
  const result = {
    highlight:    2,
         show:    1
  }
  expect(calcMaxBasedDisplay({ max:     3   })).toEqual(result)
  expect(calcMaxBasedDisplay({ max:     3.9 })).toEqual(result)
})

test('        >=4 && <10', () => {
  const result = {
    highlight:    5,
         show:    1
  }
  expect(calcMaxBasedDisplay({ max:     4   })).toEqual(result)
  expect(calcMaxBasedDisplay({ max:     9   })).toEqual(result)
})

test('       >=10 && <50', () => {
  const result = {
    highlight:   10,
         show:    1
  }
  expect(calcMaxBasedDisplay({ max:    10   })).toEqual(result)
  expect(calcMaxBasedDisplay({ max:    49   })).toEqual(result)
})

test('       >=50 && <100', () => {
  const result = {
    highlight:   10,
         show:    2
  }
  expect(calcMaxBasedDisplay({ max:    50   })).toEqual(result)
  expect(calcMaxBasedDisplay({ max:    99   })).toEqual(result)
})

test('      >=100 && <200', () => {
  const result = {
    highlight:   20,
         show:    5
  }
  expect(calcMaxBasedDisplay({ max:   100   })).toEqual(result)
  expect(calcMaxBasedDisplay({ max:   199   })).toEqual(result)
})

test('      >=200 && <500', () => {
  const result = {
    highlight:   50,
         show:   10
  }
  expect(calcMaxBasedDisplay({ max:   200   })).toEqual(result)
  expect(calcMaxBasedDisplay({ max:   499   })).toEqual(result)
})

test('      >=500 && <1000', () => {
  const result = {
    highlight:  100,
         show:   20
  }
  expect(calcMaxBasedDisplay({ max:   500   })).toEqual(result)
  expect(calcMaxBasedDisplay({ max:   999   })).toEqual(result)
})

test('     >=1000 && <1500', () => {
  const result = {
    highlight:  100,
         show:   50
  }
  expect(calcMaxBasedDisplay({ max:  1000   })).toEqual(result)
  expect(calcMaxBasedDisplay({ max:  1499   })).toEqual(result)
})

test('     >=1500 && <2500', () => {
  const result = {
    highlight:  200,
         show:   50
  }
  expect(calcMaxBasedDisplay({ max:  1500   })).toEqual(result)
  expect(calcMaxBasedDisplay({ max:  2499   })).toEqual(result)
})

test('     >=2500 && <5000', () => {
  const result = {
    highlight:  500,
         show:  100
  }
  expect(calcMaxBasedDisplay({ max:  2500   })).toEqual(result)
  expect(calcMaxBasedDisplay({ max:  4999   })).toEqual(result)
})

test('     >=5000 && <10000', () => {
  const result = {
    highlight: 1000,
         show:  200
  }
  expect(calcMaxBasedDisplay({ max:  5000   })).toEqual(result)
  expect(calcMaxBasedDisplay({ max:  9999   })).toEqual(result)
})

test('    >=10000', () => {
  const result = {
    highlight: 2000,
         show:  500
  }
  expect(calcMaxBasedDisplay({ max: 10000   })).toEqual(result)
})
