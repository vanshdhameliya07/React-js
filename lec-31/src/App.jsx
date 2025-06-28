import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import View from './Pages/View'
import Edit from './Pages/Edit'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Add />} />
          <Route path='/view' element={<View />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
