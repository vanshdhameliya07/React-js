import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import View from './Pages/View'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Add />} />
          <Route path='/view' element={<View />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
