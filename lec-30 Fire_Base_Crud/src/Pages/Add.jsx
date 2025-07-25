import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../Firebase'
import { ref, set, getDatabase } from 'firebase/database'

const Add = () => {

  let navigate = useNavigate()

  let [formInput, setFormInput] = useState({
    name: "",
    email: ""
  })

  const changeInput = (event) => {
    let { name, value } = event.target;
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  const db = getDatabase(app)

  const handlesubmit = (event) => {
    event.preventDefault()
    let obj = {
      id: Math.floor(Math.random() * 1000),
      ...formInput
    }
    setFormInput({
      name: "",
      email: ""
    })

    set(ref(db, `users/${obj.id}`), {
      name: formInput.name,
      email: formInput.email
    })
      .then((res) => {
        alert("User Added Successfully")
        navigate("/view")

      })
      .catch((err) => {
        console.log(err)
        return false
      })




  }

  return (
    <div align="center">
      <h1>Add User</h1>

      <form onSubmit={handlesubmit}>
        <table border="1">
          <thead>
            <tr>
              <td>Name</td>
              <td><input type="text" name='name' onChange={changeInput} value={formInput.name} /></td>
            </tr>
            <tr>
              <td>email</td>
              <td><input type="text" name='email' onChange={changeInput} value={formInput.email} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" /></td>
            </tr>
          </thead>
        </table>
      </form>

      <Link to={"/view"} >View</Link>

    </div >
  )
}

export default Add
