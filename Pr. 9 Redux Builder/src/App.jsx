import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, DeleteUser } from './redux/Action/action'
import { MdDelete } from "react-icons/md";
import './App.css'

const App = () => {

  let user = useSelector((state => state.crud.user))



  let [notes, setNotes] = useState({
    title: '',
    content: ''
  })


  let dispatch = useDispatch()

  let notesInput = (event) => {
    let { name, value } = event.target
    setNotes({
      ...notes,
      [name]: value
    })

  }



  let handleSubmit = (event) => {
    event.preventDefault()

    let obj = {
      id: Date.now(),
      ...notes
    }
    dispatch(AddUser(obj))
  }

  return (
    <div align="center">
      <br />
      <br />
      <br />
      <br />
      <br />
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


      <br />
      <br />


      <h1>View Notes</h1>
      {
        user.map((val, i) => {
          let { id, title, content } = val
          return (
            <div className='d-flex ' key={id}>
              <div className='box' >
                <p>{title}</p>
                <p>{content}</p>
                <button onClick={() => dispatch(DeleteUser(id))}><MdDelete /></button>
              </div>
            </div>
          );
        })
      }


    </div >
  )
}

export default App
