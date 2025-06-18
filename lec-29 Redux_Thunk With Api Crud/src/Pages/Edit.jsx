import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Add_user, Edit_user } from '../redux/Action/Action'

const Add = () => {

  let { id } = useParams()

  let [formInput, setFormInput] = useState({
    name: "",
    email: "",
  })

  let single = useSelector((state) => state.crud.users)

  let dispatch = useDispatch()

  let navigator = useNavigate()

  useEffect(() => {
    dispatch(Edit_user(id))
  }, [id])


  useEffect(() => {
    console.log(single);

    setFormInput(single)
  }, [single])



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
      <h1>Edit user</h1>


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
