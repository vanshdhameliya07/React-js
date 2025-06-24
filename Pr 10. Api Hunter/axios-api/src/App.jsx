import axios from 'axios';
import './App.css'
import { FaStar } from "react-icons/fa6";

import { useEffect, useState } from 'react';

function App() {

  let [getapi, setGetapi] = useState([])


  let getuser = async () => {
    try {
      let res = await axios.get('https://dummyjson.com/recipes')
      setGetapi(res.data.recipes)

    } catch (error) {
      console.log(error);
      return false;
    }
  }

  let rate = (rating) => {
    let star = []
    let rounded = Math.round(rating)

    for (let i = 0; i < 5; i++) {
      star.push(
        <FaStar key={i} style={{ color: i < rounded ? "gold" : "lightgray" }} />
      )
    }
    return star

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
                  rating : {rate(rating)} ({rating})
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
