import { useEffect } from 'react'
import './App.css'
import Cart from './Cart'
import { useState } from 'react'

function App() {


  let [getapis, setGetapis] = useState([])

  let getapi = () => {
    fetch('https://dummyjson.com/carts')
      .then(res => res.json())
      .then((data) => {
        setGetapis(data.carts)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      getapi()
    })
  }, [])

  return (
    <>
      <Cart cart={getapis} />
    </>
  )

}

export default App
