import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Iowa JS', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Iowa JS/i);
  expect(welcomeElement).toBeInTheDocument();
});
