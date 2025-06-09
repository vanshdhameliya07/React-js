import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './Page/Counter'
import Add from './Page/Add'
import View from './Page/View'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/count' element={<Counter />} />
        <Route path='/add' element={<Add />} />
        <Route path='/view' element={<View />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
