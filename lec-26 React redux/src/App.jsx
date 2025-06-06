import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  let no = useSelector((state) => state.count);
  let dispatch = useDispatch()

  return (
    <div align="center">

      <h1>Counter App </h1>
      <h2>Count : {no}</h2>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dic" })}>-</button>
      <button onClick={() => dispatch({ type: "res" })}>reset</button>

    </div>
  )
}

export default App
