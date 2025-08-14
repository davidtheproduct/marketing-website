import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom');

test('renders header brand', () => {
  render(<App />);
  const header = screen.getByRole('banner');
  expect(within(header).getByText(/AppName/i)).toBeInTheDocument();
});
