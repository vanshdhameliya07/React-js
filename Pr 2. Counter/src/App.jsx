import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {

  let [cnt, Setcnt] = useState(0)

  let plus = () => {
    Setcnt(cnt + 1)
  }
  let minus = () => {
    Setcnt(cnt - 1)
  }

  let reset = () => {
    Setcnt(0)
  }

  return (
    <>
      <Counter cnt={cnt} plus={plus} minus={minus} reset={reset} />
    </>
  )
}

export default App
