import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import onClickHandler from './onClickHandler'

test('onClickHandler()', async () => {
  const setCurrentDisplayedDataPointsMock = jest.fn()

  const onClick = onClickHandler({
    currentDisplayedDataPoints: 10,
    setCurrentDisplayedDataPoints: setCurrentDisplayedDataPointsMock,
    totalAvailableDataPoints: 20,
  })

  onClick({ pointChange: 5 })

  expect(setCurrentDisplayedDataPointsMock).toHaveBeenCalledWith(15)

  onClick({ pointChange: 10 })

  expect(setCurrentDisplayedDataPointsMock).toHaveBeenCalledWith(20)

  onClick({ pointChange: 11 })

  expect(setCurrentDisplayedDataPointsMock).toHaveBeenCalledWith(20)

  onClick({ pointChange: 50 })

  expect(setCurrentDisplayedDataPointsMock).toHaveBeenCalledWith(20)

  onClick({ pointChange: -5 })

  expect(setCurrentDisplayedDataPointsMock).toHaveBeenCalledWith(5)

  onClick({ pointChange: -6 })

  expect(setCurrentDisplayedDataPointsMock).toHaveBeenCalledWith(5)
})
