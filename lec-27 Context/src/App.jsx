import React, { useContext } from 'react'
import { Myprovider } from './Context/Context'

const App = () => {
  let { no, INcrement, Decrement, reset } = useContext(Myprovider)

  return (
    <div align="center">
      <h1>Counter App with Context</h1>
      <h2>Count :- {no}</h2>
      <button onClick={() => INcrement()}>+</button>
      <button onClick={() => Decrement()}>-</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  )
}

export default App
