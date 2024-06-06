import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../src/components/header'
import { ThemeProvider, useTheme } from '../context/ThemeContext';

const MockHeader = () => (
  <ThemeProvider>
    <Router>
      <Header />
    </Router>
  </ThemeProvider>
);

test('renders the header with the correct text', () => {
  render(<MockHeader />);
  const headerElement = screen.getByText(/Omis beste Rezepte/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders the link to the overview page', () => {
  render(<MockHeader />);
  const linkElement = screen.getByText(/Rezepte Übersicht/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.closest('a')).toHaveAttribute('href', '/');
});

test('toggles the theme when the button is clicked', () => {
  render(<MockHeader />);
  const toggleButton = screen.getByRole('button');
  expect(toggleButton).toBeInTheDocument();

  fireEvent.click(toggleButton);
  const sunIcon = screen.getByRole('img', { hidden: true });
  expect(sunIcon).toBeInTheDocument();
});
