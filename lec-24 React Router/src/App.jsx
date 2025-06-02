import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
