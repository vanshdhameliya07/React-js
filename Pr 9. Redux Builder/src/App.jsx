import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, DeleteUser } from './redux/Action/action'
import { RiDeleteBin6Fill } from "react-icons/ri";
import './App.css'
import { Bounce, toast, ToastContainer } from 'react-toastify';

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

    if (!notes.title || !notes.content) {
      toast.error("Please fill all fields", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light"
      });
      return false;
    }


    let obj = {
      id: Date.now(),
      ...notes
    }
    dispatch(AddUser(obj))

    setNotes({
      title: '',
      content: ''
    })


  }

  return (

    <div align='center'>
      <div className='dd'>
        <div className=" d-flex align-content-center">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABbUlEQVR4Ae3aAUQEQRQG4OUmwiEAQIQQIAQIAQGCgICQkJAACUAAQkEQAAJEu11cSSldOlWR4hBJp90ozdt53QSgs/e09v70fh4YzPuWmbeYQIMergTGRmapVRc2NJxHva4Hc4UBPsOeWb9pnhWvBcUhRF9eACgMIW5QAJAjAAFyBCBAjgAEyBGAADkCECBHQADkCACAHAEAkJcCFPDnAFEvp1cz7B432SV1du8P7J63mepTfg0bQIdD7OIat4sH0cEgJsA3z5RwVtzbNdtKHx7Avexxp0kbq1gAOhpmUZxlu1vGAaS3CywNHY8AAe6WxYD0choIcDMvBtD5BA6ATkbFZ4D2B8BuobjWef9PW4BzwN9EznJmbJNttR90Ep+NfzfYNh+NrNtHf+YUQKdjfi78WH4NDyAYan5NAXoGFKAABShAAf8NkHQRUP01gMLSRrcAFJYm83hqULaRWaSwdF9g8027Y1Zae5tAA54vA5QFBsesCogAAAAASUVORK5CYII=" alt="" />
          <h3 >Google Keep</h3>

        </div>
      </div>


      <form onSubmit={handleSubmit}>
        <div className="note-box">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={notes.title}
            onChange={notesInput}
          />
          <textarea
            name="content"
            placeholder="Write a note..."
            value={notes.content}
            onChange={notesInput}
          />
          <button type="submit">
            <div className='icon'>
              <FaPlus />
            </div>
          </button>
        </div>
      </form>


      <div className='d-flex  justify-content-center'>
        {
          user.map((val, i) => {
            let { id, title, content } = val
            return (
              <div className='d-flex' key={id}>
                <div className='box ' >
                  <p>{title}</p>
                  <p>{content}</p>
                  <button className='btn' onClick={() => dispatch(DeleteUser(id))}><RiDeleteBin6Fill /></button>
                </div>
              </div>
            );
          })
        }
      </div>


      <div className='footer'>
        <p>Copyrights 2025</p>
      </div>

      <ToastContainer>
      </ToastContainer>
    </div >
  )
}

export default App
