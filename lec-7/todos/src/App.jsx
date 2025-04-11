import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Todos from './Todos'

function App() {

  let [gettodosapis, setGettodosapi] = useState([])

  let gettodosapi = () => {
    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then((data) => {
        setGettodosapi(data.todos)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      gettodosapi()
    })
  }, [])

  return (
    <>
      <Todos todo={gettodosapis} />
    </>
  )
}

export default App
