import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import './App.css'
import { useState } from "react";

function App() {

  let [cnt, setCnt] = useState(0)

  let plus = () => {
    setCnt(cnt + 1)
  }
  let minus = () => {
    setCnt(cnt - 1)
  }
  let reset = () => {
    setCnt(0)
  }

  return (
    <>
      <h1>Counter app</h1>
      <h2>Count :{cnt}</h2>
      <button onClick={() => plus()}><FaPlus /></button>
      <button disabled={cnt == 0} onClick={() => minus()}><FaMinus /></button>
      <button onClick={() => reset()}>Reset</button>
    </>
  )
}

export default App
