import { useContext } from "react"
import { MyContext } from "./Context/Context";


function App() {

  let { no, Increment } = useContext(MyContext)
  console.log(no);


  return (
    <div align="center">
      <h1>Counter :- {no}</h1>
      
      <h2>Count</h2>
      <button onClick={()=>Increment()}>+</button>
    </div>
  )
}

export default App
