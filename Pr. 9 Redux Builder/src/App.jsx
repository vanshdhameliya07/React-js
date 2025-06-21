import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";

const App = () => {

  let [notes, setNotes] = useState({
    title: '',
    content: ''
  })

  let notesInput = (event) => {
    let { name, value } = event.target
    setNotes({
      ...notes,
      [name]: value
    })

  }

  let handleSubmit = (event) => {
    event.preventDefault()
    console.log(notes);

  }

  return (
    <div align="center">
      <h1>Google Keep </h1>

      <form onSubmit={handleSubmit}>
        <table border={1}>
          <thead>
            <tr>
              <td>Title</td>
              <td><input type="text" name='title' onChange={notesInput} value={notes.title} /></td>
            </tr>
            <tr>
              <td>Write a note...</td>
              <td><input type="text" name='content' onChange={notesInput} value={notes.content} /></td>
            </tr>
            <tr>
              <td></td>
              <td><button ><FaPlus /></button></td>

            </tr>
          </thead>
        </table>
      </form>
    </div>
  )
}

export default App
