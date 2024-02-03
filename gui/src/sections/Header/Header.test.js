import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'

import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'

import Header from './Header'


const setCurrentFilterListMock = jest.fn()


const baseHeaderProps = {
  currentUrl: 'TimeLine',
  currentFilterList: ORDERED_FILTERS,
  setCurrentFilterList: setCurrentFilterListMock,
}


test('Header', async () => {
  render(
    <Header
      {...baseHeaderProps}
    />
  )


  /*
   * Filter items
   */
  await userEvent.click(screen.getByText('NS'))
  expect(setCurrentFilterListMock).toHaveBeenCalledWith(
    {
      ...ORDERED_FILTERS,
      nonSevere: true
    }
  )
  await userEvent.click(screen.getByText('Rm Dub.'))
  expect(setCurrentFilterListMock).toHaveBeenCalledWith(
    {
      ...ORDERED_FILTERS,
      rmDubious: true
    }
  )

  expect(screen.getByText('NS', { pressed: true })).toBeTruthy()
  expect(screen.getByText('Rm Dub.', { pressed: false })).toBeTruthy()


  /*
   * Menu items
   */
  expect(screen.getByText('Scatter Plot')).toBeTruthy()
  expect(screen.getByText('Time Line')).toBeTruthy()
})


test('Header with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: header } = render(
    <Header
      {...baseHeaderProps}
    />
  )

  expect(await axe(header)).toHaveNoViolations()
})
