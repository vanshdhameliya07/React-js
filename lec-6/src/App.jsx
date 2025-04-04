import { useState } from 'react'
import './App.css'
import Todo from './Todo'
function App() {

  let [todolist, setTodolist] = useState([
    { id: 1, name: "john", phone: 1234567891, },
    { id: 2, name: "viba", phone: 8998899999, },
    { id: 3, name: "gg", phone: 23215497978, }
  ])

  return (

    <>
      <h1>hello</h1>
      <Todo todo={todolist} />
    </>

  )
}

export default App
