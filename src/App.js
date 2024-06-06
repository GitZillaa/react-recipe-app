import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './recipes/RecipeList'
import RecipeDetail from './recipes/RecipeDetails'
import './index.css'
import Header from './components/header';
import Footer from './components/footer';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <ThemeProvider>
        <Header />
        <main className="flex-grow">
    <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      </main>
      <Footer />
    </ThemeProvider>
    </div>
  );
};

export default App;
