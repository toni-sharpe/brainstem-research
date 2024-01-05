import { render, screen } from '@testing-library/react';
import App from './App';

import { BrowserRouter } from "react-router-dom";

test('renders correctly', () => {
  render(
    <BrowserRouter>
      <App currentUrl='Scatter' />
    </BrowserRouter>
  );

  // Just test the header bit itself here
  expect(screen.findByTestId('ui-header')).toBeTruthy()
  expect(screen.findByRole('navigation')).toBeTruthy()
  expect(screen.findByTestId('filter-button-list')).toBeTruthy()
  expect(screen.findByText('Scatter Plot')).toBeTruthy()
});
