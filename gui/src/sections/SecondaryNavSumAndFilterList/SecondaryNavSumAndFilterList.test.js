import {render, screen} from '@testing-library/react'
import i18next from 'util/i18next/i18next'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { secondaryNavProps } from 'util/UtilNav/UtilNav'
import Button from 'components/Button/Button'

import SecondaryNavSumAndFilterList from './SecondaryNavSumAndFilterList'

const i18nBase = 'StoryBook'


const user = userEvent.setup()
const setDataPointSumPerMonthMock = jest.fn()
const setFilterByMock = jest.fn()


const secondaryNavSumAndFilterListProps = {
  dataPointSumList: ['a', 'b', 'c', 'd', 'e'],
  dataPointSumPerMonth: 'c',
  filterBy: 'X',
  i18nBase: 'StoryBook',
  setDataPointSumPerMonth: setDataPointSumPerMonthMock,
  setFilterBy: setFilterByMock,
  timeLineFilterList: {
    X: ['test', 'X'],
    Y: ['test', 'Y'],
    Z: ['test', 'Z'],
  }
}


test('SecondaryNavSumAndFilterList', async () => {
  render(
    <SecondaryNavSumAndFilterList
      {...secondaryNavSumAndFilterListProps}
    />
  )

  const ariaOther = { current: false }
  const ariaCurrent = { current: 'page' }

  expect(screen.getByLabelText('Storybook secondary nav sum and filter list')).toBeTruthy()
  expect(screen.getByText('C', ariaCurrent)).toBeTruthy()
  const panelBButton = screen.getByText('B', ariaOther)
  expect(panelBButton).toBeTruthy()

  await user.click(panelBButton)

  expect(screen.getByLabelText('Storybook secondary nav sum and filter list')).toBeTruthy()
  expect(screen.getByText('A', ariaOther)).toBeTruthy()
  expect(screen.getByText('B', ariaCurrent)).toBeTruthy()
})
