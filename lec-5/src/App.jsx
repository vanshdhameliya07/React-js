import { Counter } from './Counter'
import { useState } from 'react'

import './App.css'

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
      <Counter cnt={cnt} plus={plus} minus={minus} reset={reset} />
    </>
  )
}

export default App
