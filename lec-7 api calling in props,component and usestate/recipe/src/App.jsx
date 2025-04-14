import { useEffect, useState } from 'react';
import './index.css';
import Recipe from './Recipe';

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
    <>
      <Recipe recipe={getrecipes} />
    </>
  );
}


export default App;
