import { useEffect, useState } from 'react';
import './App.css';
import Prouct from './Prouct';

function App() {
  const [getapis, setGetapi] = useState([]);

  const getapi = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        setGetapi(data.products);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getapi();
    }, 1000);
  }, []);

  return (


    <Prouct prod={getapis} />

  )
}

export default App;
