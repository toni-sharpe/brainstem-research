import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import Motivation from './Motivation'

test('Motivation - ', async () => {
  render(
    <Motivation />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Motivation')).toBeTruthy()
  expect(screen.getByText('I have been a bit nerdy about medical things for a long time, since a long family illness saw me in hospitals as a relative while a child, then a book by Ben Goldacre, and a natural curiosity that means it\'s been a base that\'s gradually built for years. This time I really quite casually looked at something that was curious and over a series of notable events and more focused, full-time work, building up to nine months, I may have made the discovery that something not so well understood is more complex than we thought and I can even see useful avenues for this knowledge in society, though, that has been complicated as the nuances emerged (see below). All this possibility of discovery, breakthroughs, connections, visualisations and learning, way outside my professional field, were both exciting and kept that motivation going and going, longer indeed than it should have, give neither wage nor benefit for my efforts.')).toBeTruthy()
})
