import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [getrecipes, setGetrecipe] = useState([]);

  const getrecipe = () => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        setGetrecipe(data.recipes);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getrecipe();
    });
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Recipe Cards</h2>
      <div className="row">
        {getrecipes.map(recipe => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
                style={{ objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p><strong>Meal Type:</strong> {recipe.mealType.join(', ')}</p>
                <p><strong>Rating:</strong> {recipe.rating}</p>
                <p><strong>Tags:</strong> {recipe.tags.join(', ')}</p>
                <p><strong>Ingredients:</strong><br />{recipe.ingredients.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;
