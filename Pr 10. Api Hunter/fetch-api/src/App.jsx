import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";

import './App.css'


const App = () => {

  let [product, setProduct] = useState([])

  const getapi = async () => {
    try {
      let res = await fetch('https://dummyjson.com/products')
      let data = await res.json()
      setProduct(data.products);
      console.log(data.products);


    } catch (error) {
      console.log(error);
      return false

    }
  }

  useEffect(() => {
    getapi()
  }, [])



  const renderStars = (rating) => {

    const stars = [];
    const rounded = Math.round(rating);

    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} style={{ color: i < rounded ? "gold" : "lightgray" }} />
      )
    }
    return stars;
  };

  return (
    <div>
      <h1>Product List</h1>

      <div className='d-flex'>
        {product.map((val) => {
          const { id, images, title, rating, description } = val;
          return (

            <div className="card   mt-4 mx-4" style={{ width: '24rem' }} key={id}>
              <img src={images[0]} alt="" />
              <div className="card-body">
                <p className="card-text">Product name :- {title}</p>
                <span className="card-text">description :-{description} </span>
                <div>
                  rating : ({rating}) {renderStars(rating)}
                </div>

                {/* <div><strong>Tags : </strong>
                  {tags.join(', ')}
                </div> */}

              </div>
            </div>
          );
        })}
      </div>


    </div>
  )
}

export default App
