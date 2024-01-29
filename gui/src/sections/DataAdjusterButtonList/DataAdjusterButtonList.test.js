import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByRole, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { FULL_DATA_POINT_LIST } from 'util/Constant/FullDataPointList'

import DataAdjusterButtonList from './DataAdjusterButtonList'


const onClickMock = jest.fn()
const selectedFnMock = jest.fn()
const adjusterList = [1, 2, 3, 5, 7, 11]


function baseDataAdjusterButtonListProps() {
  return ({
    adjusterList,
    labelFn: ({ adjustBy }) => `Output ${adjustBy}`,
    listLabel: 'Test List',
    onClickHandler: ({ adjustBy }) => () => onClickMock(adjustBy),
    selectedFn: selectedFnMock,
  })
}


test('DataAdjusterButtonList', async () => {
  render(
    <DataAdjusterButtonList
      {...baseDataAdjusterButtonListProps()}
    />
  )


  /*
   * Basic output
   */
  expect(screen.getByText('Test List')).toBeTruthy()
  expect(screen.getByText('Output 1')).toBeTruthy()
  expect(screen.getByText('Output 11')).toBeTruthy()


  /*
   * Button click functions
   */
  const buttonToClick = screen.getByText('Output 5')
  await userEvent.click(buttonToClick)
  expect(onClickMock).toHaveBeenCalledWith(5)
  expect(screen.getByLabelText('Buttons for Test List interaction')).toBeTruthy()
})


test('DataAdjusterButtonList with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: dataAdjusterButtonList } = render(
    <DataAdjusterButtonList
      {...baseDataAdjusterButtonListProps()}
    />
  )

  expect(await axe(dataAdjusterButtonList)).toHaveNoViolations()
})
