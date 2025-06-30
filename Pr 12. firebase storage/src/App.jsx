import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./Pages/Add"

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Add />} />

        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App
