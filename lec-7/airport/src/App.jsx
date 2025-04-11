import { useEffect } from 'react'
import { useState } from "react";
import './App.css'
import Airports from './Airports'

function App() {


  let [airports, serAirports] = useState([]);

  let getairport = () => {
    fetch('https://www.freetestapi.com/api/v1/airports')
      .then(res => res.json())
      .then((data) => {
        serAirports(data)
      })

  }

  useEffect(() => {
    getairport()
  }, [])

  return (
    <>
      <Airports airport={airports} />
    </>
  )

}

export default App
