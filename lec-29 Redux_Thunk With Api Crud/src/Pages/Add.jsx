import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Add_user } from '../redux/Action/Action'

const Add = () => {


  let [formInput, setFormInput] = useState({
    name: "",
    email: "",
  })
  let dispatch = useDispatch()

  let navigator = useNavigate()

  let changeInput = (event) => {
    let { name, value } = event.target
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  let handleSubmit = (event) => {
    event.preventDefault()

    dispatch(Add_user(formInput))
    navigator('/view')

  }

  return (
    <div align="center">
      <h1>Add user</h1>


      <form onSubmit={handleSubmit}>
        <table border={1}>
          <thead>
            <tr>
              <td>name</td>
              <td><input type="text" name='name' onChange={changeInput} value={formInput.name} /></td>
            </tr>
            <tr>
              <td>email</td>
              <td><input type="text" name='email' onChange={changeInput} value={formInput.email} /></td>
            </tr>

            <tr>
              <td></td>
              <td><input type="Submit" /></td>
            </tr>
          </thead>
        </table>
      </form>



      <Link to={'/view'}>View</Link>
    </div>
  )
}

export default Add
