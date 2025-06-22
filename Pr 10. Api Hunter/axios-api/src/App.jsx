import axios from 'axios';
import './App.css'
import { FaStar } from "react-icons/fa6";

import { useEffect, useState } from 'react';

function App() {

  let [getapi, setGetapi] = useState([])


  let getuser = async () => {
    try {
      let res = await axios.get('https://dummyjson.com/recipes')
      console.log(res.data.recipes);
      setGetapi(res.data.recipes)



    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    getuser()
  }, [])

  return (
    <div align="center">
      <h1>Axios api</h1>


      <div className='d-flex align-items-center justify-content-center'>
        {getapi.map((val) => {
          const { id, image, name, instructions, rating, tags } = val;
          return (

            <div className="card   mt-4 mx-4" style={{ width: '25rem' }} key={id}>
              <img src={image} alt="" />
              <div className="card-body">
                <p className="card-text">Dish name :- {name}</p>
                <span className="card-text">instructions :- {instructions}</span>
                <div>
                  rating :  {rating}

                  (  <FaStar style={{ color: 'gold' }} />
                  <FaStar style={{ color: 'gold' }} />
                  <FaStar style={{ color: 'gold' }} />
                  <FaStar style={{ color: 'gold' }} />
                  <FaStar style={{ color: 'gold' }} />)
                </div>

                <div><strong>Tags : </strong>
                  {tags.join(', ')}
                </div>

              </div>
            </div>
          );
        })}
      </div>


    </div>


  )
}

export default App
