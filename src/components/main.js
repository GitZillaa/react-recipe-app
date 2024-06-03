import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeList from '../recipes/RecipeList';
import RecipeDetail from '../recipes/RecipeDetails';

const Main = () => {
  return (
    <main>
      <Header>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Header>
    </main>
  );
};

export default Main;
