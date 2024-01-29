import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByRole, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { FULL_DATA_POINT_LIST } from 'util/Constant/FullDataPointList'

import AxisSelector from './AxisSelector'


const setCurrentAxisSelectionMock = jest.fn()


function baseAxisSelectorProps() {
  return ({
    align: 'right',
    axis: 'x',
    axisOptions: FULL_DATA_POINT_LIST,
    disabledSelection: 'prime_symptom_3',
    currentAxisSelection: 'mild_symptom_1',
    primaryMark: 'prime_symptom_1',
    setCurrentAxisSelection: setCurrentAxisSelectionMock,
    showDurationOptions: false,
  })
}


test('AxisSelector', async () => {
  render(
    <AxisSelector
      {...baseAxisSelectorProps()}
    />
  )

  expect(screen.getByText('X Axis')).toBeTruthy()
  expect(screen.getByRole(
    'button', {
      pressed: true,
      text: 'Mld symp 1'
    }
  )).toBeTruthy()

  const nextButton = screen.getByText('Mld symp 1 dur')
  await userEvent.click(nextButton)
  expect(setCurrentAxisSelectionMock).toHaveBeenCalledWith('mild_symptom_1_duration')

  expect(screen.getByLabelText('Prime symptom 1 shown on X axis, this selection for the axis conveys the primary information'))
})


test('AxisSelector array button always has one', async () => {
  const props = {
    ...baseAxisSelectorProps(),
    currentAxisSelection: ['mild_symptom_1']
  }
  render(
    <AxisSelector
      {...baseAxisSelectorProps()}
    />
  )

  expect(screen.getByText('X Axis')).toBeTruthy()
  const currentButton = screen.getByRole(
    'button', {
      pressed: true,
      text: 'Mld symp 1'
    }
  )
  expect(currentButton).toBeTruthy()
  await userEvent.click(currentButton)
  const onlyButtonSelectedStaysPressed = screen.getByRole(
    'button', {
      pressed: true,
      text: 'Mld symp 1'
    }
  )
  expect(onlyButtonSelectedStaysPressed).toBeTruthy()
})


test('AxisSelector with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: axisSelector } = render(
    <AxisSelector
      {...baseAxisSelectorProps()}
    />
  )

  expect(await axe(axisSelector)).toHaveNoViolations()
})
