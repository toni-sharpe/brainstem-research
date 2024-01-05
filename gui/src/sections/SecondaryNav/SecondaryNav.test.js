import {render, screen} from '@testing-library/react'
import i18next from 'util/i18next/i18next'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { secondaryNavProps } from 'util/UtilNav/UtilNav'
import Button from 'components/Button/Button'

import SecondaryNav from './SecondaryNav'


const i18nBase = 'StoryBook'


const user = userEvent.setup()
const setCurrentPanelMock = jest.fn()


const commonNavProps = {
  currentPanel: 'test-a',
  i18nBase,
  setCurrentPanel: setCurrentPanelMock,
}


test('SecondaryNav', async () => {
  render(
    <SecondaryNav ariaLabel={i18next.t(`${i18nBase}.secondaryNav`)}>
      <Button {...secondaryNavProps({ ...commonNavProps, k: 'test-a' })} />
      <Button {...secondaryNavProps({ ...commonNavProps, k: 'test-b' })} />
    </SecondaryNav>
  )

  const ariaOther = { current: false }
  const ariaCurrent = { current: 'page' }

  expect(screen.getByLabelText('Storybook secondary nav')).toBeTruthy()
  expect(screen.getByText('Test Panel A', ariaCurrent)).toBeTruthy()
  const panelBButton = screen.getByText('Test Panel B', ariaOther)
  expect(panelBButton).toBeTruthy()

  await user.click(panelBButton)

  expect(screen.getByLabelText('Storybook secondary nav')).toBeTruthy()
  expect(screen.getByText('Test Panel A', ariaOther)).toBeTruthy()
  expect(screen.getByText('Test Panel B', ariaCurrent)).toBeTruthy()
})
