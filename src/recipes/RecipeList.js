import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {recipes.map(recipe => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block p-4 border border-gray-200 rounded hover:shadow-lg">
          <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover rounded" />
          <h3 className="mt-2 font-bold">{recipe.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
