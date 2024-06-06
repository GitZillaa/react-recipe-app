import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../src/components/footer';

test('renders the footer with the correct text', () => {
  render(<Footer />);
  const textElement = screen.getByText(/Omis Rezepte werden nur hier geleakt/i);
  expect(textElement).toBeInTheDocument();
});