import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Pages/Register'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import View from './Pages/View'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
