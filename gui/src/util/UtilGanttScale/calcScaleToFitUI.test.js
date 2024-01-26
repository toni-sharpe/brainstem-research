import { calcScaleToFitUI } from './UtilGanttScale'

test('calcScaleToFitUI() with stepDivision less or equal to than 30 does nothing', () => {
  expect(calcScaleToFitUI({ scale: { stepDivision: 20, totalSteps: 5 } })).toEqual({ stepDivision: 20, totalSteps: 5 })
})
test('calcScaleToFitUI() with 21 converts stepCount to 1/10th (rounded up) and divisions to *10 ', () => {
  expect(calcScaleToFitUI({ scale: { stepDivision: 5, totalSteps: 21 } })).toEqual({ stepDivision: 50, totalSteps: 3 })
})
test('calcScaleToFitUI() with 200 converts stepCount to 1/10th (rounded up) and divisions to *10 ', () => {
  expect(calcScaleToFitUI({ scale: { stepDivision: 5, totalSteps: 200 } })).toEqual({ stepDivision: 50, totalSteps: 20 })
})
test('calcScaleToFitUI() with 201 converts stepCount to 1/100th (rounded up) and divisions to *100 ', () => {
  expect(calcScaleToFitUI({ scale: { stepDivision: 5, totalSteps: 201 } })).toEqual({ stepDivision: 500, totalSteps: 3 })
})
test('calcScaleToFitUI() with 2000 converts stepCount to 1/100th (rounded up) and divisions to *100 ', () => {
  expect(calcScaleToFitUI({ scale: { stepDivision: 5, totalSteps: 2000 } })).toEqual({ stepDivision: 500, totalSteps: 20 })
})
test('calcScaleToFitUI() with 2001 converts stepCount to 1/100th (rounded up) and divisions to *100 ', () => {
  expect(calcScaleToFitUI({ scale: { stepDivision: 5, totalSteps: 2001 } })).toEqual({ stepDivision: 5000, totalSteps: 3 })
})
test('calcScaleToFitUI() with 20000 converts stepCount to 1/100th (rounded up) and divisions to *100 ', () => {
  expect(calcScaleToFitUI({ scale: { stepDivision: 5, totalSteps: 20000 } })).toEqual({ stepDivision: 5000, totalSteps: 20 })
})
test('calcScaleToFitUI() with 20001 converts stepCount to 1/100th (rounded up) and divisions to *100 ', () => {
  expect(calcScaleToFitUI({ scale: { stepDivision: 5, totalSteps: 20001 } })).toEqual({ stepDivision: 50000, totalSteps: 3 })
})
test('calcScaleToFitUI() with 200000 converts stepCount to 1/100th (rounded up) and divisions to *100 ', () => {
  expect(calcScaleToFitUI({ scale: { stepDivision: 5, totalSteps: 200000 } })).toEqual({ stepDivision: 50000, totalSteps: 20 })
})
test('calcScaleToFitUI() with 2000001 converts stepCount to 1/100th (rounded up) and divisions to *100 ', () => {
  expect(calcScaleToFitUI({ scale: { stepDivision: 5, totalSteps: 200001 } })).toEqual({ stepDivision: 500000, totalSteps: 3 })
})
test('calcScaleToFitUI() with 20000000 converts stepCount to 1/100th (rounded up) and divisions to *100 ', () => {
  expect(calcScaleToFitUI({ scale: { stepDivision: 5, totalSteps: 2000000 } })).toEqual({ stepDivision: 500000, totalSteps: 20 })
})
