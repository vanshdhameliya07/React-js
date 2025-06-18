import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from './Pages/Add.jsx'
import View from "./Pages/View.jsx"
import Edit from "./Pages/Edit.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
