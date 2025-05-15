import { useState } from "react"
import Acomponent from "./Components/A"
import Bcomponent from "./Components/B"

function App() {

  let [darkbtn, setDarkbtn] = useState([])

  let darkbutton = () => {
    setDarkbtn(!darkbtn)
  }

  return (
    <div align="center" style={{
      backgroundColor: darkbtn ? "#ffffff" : "#121212",
      color: darkbtn ? "#121212" : "#ffffff"
    }}>

      <button onClick={() => darkbutton()}>dark

      </button>

      <Acomponent />
      <Bcomponent />


    </div>
  )
}



export default App
