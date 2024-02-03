import { getByRole, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'

import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'

import FilterButtonList from './FilterButtonList'

function renderFilterButtonList({ currentUrl = 'TimeLine', mock = () => {} } = {}) {
  return render(
    <FilterButtonList
      currentUrl={currentUrl}
      currentFilterList={ORDERED_FILTERS}
      setCurrentFilterList={mock}
    />
  )
}

test('FilterButtonList', async () => {
  const setCurrentFilterListMock = jest.fn()
  renderFilterButtonList({ mock: setCurrentFilterListMock })

  await userEvent.click(screen.getByText('NS'))
  expect(setCurrentFilterListMock).toHaveBeenCalledWith(
    {
      ...ORDERED_FILTERS,
      nonSevere: true
    }
  )

  expect(screen.getByText('NS', { pressed: true })).toBeTruthy()
})

test('FilterButtonList - scatter page enables remove dubious', async () => {
  renderFilterButtonList({ currentUrl: 'TimeLine' })

  expect(screen.getByText('Rm Dub.', { selected: true })).toBeTruthy()
})

test('FilterButtonList - prime-symptom page enables remove dubious', async () => {
  renderFilterButtonList({ currentUrl: 'TimeLine' })

  expect(screen.getByText('Rm Dub.', { selected: true })).toBeTruthy()
})

test('FilterButtonList - TimeLineStatChart page enables remove dubious', async () => {
  renderFilterButtonList({ currentUrl: 'TimeLine' })

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


test('FilterButtonList with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: filterButtonList } = renderFilterButtonList({ currentUrl: 'TimeLine' })

  expect(await axe(filterButtonList)).toHaveNoViolations()
})
