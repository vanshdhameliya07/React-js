import { BrowserRouter, Route, Routes } from "react-router"

import Add from "./Add"
import View from "./View"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/view" element={<View/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
