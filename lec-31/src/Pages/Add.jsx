import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'


const Add = () => {

  let [forminput, setForminput] = useState({
    name: '',
    email: ''
  })

  let changeInput = (event) => {
    let { name, value } = event.target;
    setForminput({
      ...forminput,
      [name]: value
    })
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    setForminput({
      name: '',
      email: ''
    })
    toast.success("Form Submitted Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  }


  return (
    <div align="center">
      <h1>Add Page</h1>


      <form onSubmit={handleSubmit}>
        <table border={1}>
          <thead>
            <tr>
              <td>Name</td>
              <td><input type="text" name='name' onChange={changeInput} value={forminput.name} /></td>
            </tr>
            <tr>
              <td>email</td>
              <td><input type="text" name='email' onChange={changeInput} value={forminput.email} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" /></td>
            </tr>
          </thead>
        </table>
      </form>
      <ToastContainer>

      </ToastContainer>

      <Link to={'/view'}>View</Link>
    </div>
  )
}

export default Add
