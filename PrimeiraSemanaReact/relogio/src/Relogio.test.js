import React from 'react';
import { render, screen } from '@testing-library/react';
import Relogio from './Relogio';


test('renders learn react link', () => {
  render(<Relogio />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
