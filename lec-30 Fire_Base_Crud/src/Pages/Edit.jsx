import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../Firebase'

const Edit = () => {
  let [formInput, setFormInput] = useState({
    name: "",
    email: ""
  })

  let location = useLocation()

  let navigate = useNavigate()

  const changeInput = (event) => {
    let { name, value } = event.target;
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  useEffect(() => {
    setFormInput({
      name: location?.state?.data?.name,
      email: location?.state?.data?.email
    })

  }, [location?.state?.data])

  const db = getDatabase(app)

  const handlesubmit = (event) => {
    event.preventDefault()

    let obj = {
      id: location?.state?.data?.id,
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
        console.log(res);
        alert("record successfully updated")
        navigate("/view");
      }).catch((err) => {
        console.log(err);
        return false
      })

    setFormInput({
      name: "",
      email: ""
    })


  }

  return (
    <div align="center">
      <h1>Edit User</h1>


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

export default Edit
