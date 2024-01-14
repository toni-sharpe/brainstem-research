import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'

import Header from './Header'


const setCurrentFilterListMock = jest.fn()


const baseHeaderProps = {
  currentUrl: 'TimeLine',
  currentFilterList: CURRENT_FILTER_LIST,
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
  await userEvent.click(screen.getByText('NF'))
  expect(setCurrentFilterListMock).toHaveBeenCalledWith(
    {
      ...CURRENT_FILTER_LIST,
      nonFatal: true
    }
  )
  await userEvent.click(screen.getByText('Rm Dub.'))
  expect(setCurrentFilterListMock).toHaveBeenCalledWith(
    {
      ...CURRENT_FILTER_LIST,
      rmDubious: false
    }
  )

  expect(screen.getByText('NF', { pressed: true })).toBeTruthy()
  expect(screen.getByText('Rm Dub.', { pressed: false })).toBeTruthy()


  /*
   * Menu items
   */
  expect(screen.getByText('Scatter Plot')).toBeTruthy()
  expect(screen.getByText('Time Line')).toBeTruthy()
})
