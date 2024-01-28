import { theThingListErrorCheck } from './UtilMaxThing'

test('theThingListErrorCheck() with [] throws error', () => {
  const errorMessage = 'theThingList has length 0, there should be something in theThingList for testFn'
  const theThingList = []
  expect(() => theThingListErrorCheck({ callingFn: 'testFn', theThingList })).toThrow(errorMessage)
})

test('theThingListErrorCheck() with null throws error', () => {
  const errorMessage = 'theThingList is not correct in testFn - receiving: Null | null'
  const theThingList = null
  expect(() => theThingListErrorCheck({ callingFn: 'testFn', theThingList })).toThrow(errorMessage)
})
