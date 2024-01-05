import { getByRole, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'

import FilterButtonList from './FilterButtonList'

function renderFilterButtonList({ currentUrl = 'TimeLineStatChart', mock = () => {} } = {}) {
  return render(
    <FilterButtonList
      currentUrl={currentUrl}
      currentFilterList={CURRENT_FILTER_LIST}
      setCurrentFilterList={mock}
    />
  )
}

test('FilterButtonList', async () => {
  const setCurrentFilterListMock = jest.fn()
  renderFilterButtonList({ mock: setCurrentFilterListMock })

  await userEvent.click(screen.getByText('NF'))
  expect(setCurrentFilterListMock).toHaveBeenCalledWith(
    {
      ...CURRENT_FILTER_LIST,
      nonFatal: true
    }
  )

  expect(screen.getByText('NF', { pressed: true })).toBeTruthy()
})

test('FilterButtonList - scatter page enables remove dubious', async () => {
  renderFilterButtonList({ currentUrl: 'time-line' })

  expect(screen.getByText('Rm Dub.', { selected: true })).toBeTruthy()
})

test('FilterButtonList - prime-symptom page enables remove dubious', async () => {
  renderFilterButtonList({ currentUrl: 'time-line' })

  expect(screen.getByText('Rm Dub.', { selected: true })).toBeTruthy()
})

test('FilterButtonList - TimeLineStatChart page enables remove dubious', async () => {
  renderFilterButtonList({ currentUrl: 'TimeLineStatChart' })

  expect(screen.getByText('Rm Dub.', { selected: true })).toBeTruthy()
})

test('FilterButtonList - PrimeSymptomList page disables correct button', async () => {
  renderFilterButtonList({ currentUrl: 'PrimeSymptomList' })

  expect(screen.getByText('Rm Dub.', { selected: true })).toBeTruthy()
})

test('FilterButtonList - HistogramMaker page enables remove dubious', async () => {
  renderFilterButtonList({ currentUrl: 'HistogramMaker' })

  expect(screen.getByText('Rm Dub.', { selected: true })).toBeTruthy()
})
