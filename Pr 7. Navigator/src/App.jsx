import { BrowserRouter, Route, Routes } from "react-router"

import Add from "./Add"
import View from "./View"
import Edit from "./Edit"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit/:editid" element={<Edit />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
