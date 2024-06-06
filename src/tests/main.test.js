import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../../src/components/main';
import RecipeList from '../recipes/RecipeList';
import RecipeDetail from '../recipes/RecipeDetail';
import { ThemeProvider } from '../context/ThemeContext';

jest.mock('../recipes/RecipeList');
jest.mock('../recipes/RecipeDetail');

RecipeList.mockImplementation(() => <div>Recipe List Component</div>);
RecipeDetail.mockImplementation(() => <div>Recipe Detail Component</div>);

const renderWithProviders = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <ThemeProvider>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </ThemeProvider>
  );
};

test('renders RecipeList component for the default route', () => {
  renderWithProviders(<Main />);
  expect(screen.getByText(/Recipe List Component/i)).toBeInTheDocument();
});

test('renders RecipeDetail component for the /recipe/:id route', () => {
  renderWithProviders(<Main />, { route: '/recipe/1' });
  expect(screen.getByText(/Recipe Detail Component/i)).toBeInTheDocument();
});
