import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { AddUser } from './redux/Action/action'
import { toast, ToastContainer } from 'react-toastify';

const App = () => {

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


    if (notes.title.trim() === "" || notes.content.trim() === "") {
      toast.error("Please fill all the fields", {
        style: {
          borderLeft: "5px solidrgb(179, 61, 61)",
          backgroundColor: "#FF0000",
          color: "#ffff"

        },
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
      return;
    }

    let obj = {
      id: Date.now(),
      ...notes
    }




    dispatch(AddUser(obj))
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
      <ToastContainer position="top-center" autoClose={2000} />

    </div>
  )
}

export default App
