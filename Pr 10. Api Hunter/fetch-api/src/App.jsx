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
    <div align="center" >
      <h1>Product List</h1>

      <div className="product-container">

        {product.map((val) => {
          const { id, images, title, rating, description, brand, category } = val;
          return (
            <div className="product-card" key={id}>
              <img src={images[0]} alt={title} className="product-image" />
              <div className="card-body">
                <h3 className="product-title">{title}</h3>
                <p className="product-description">{description}</p>
                <div className="product-rating align-items-center">
                  Rating:  {renderStars(rating)} ({rating})
                </div>
                <div className="product-meta">
                  <span>Brand :- {brand}</span>
                  <span>Category: {category}</span>
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
