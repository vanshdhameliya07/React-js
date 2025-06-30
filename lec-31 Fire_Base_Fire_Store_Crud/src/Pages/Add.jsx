import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../../FirebaseConfig'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
const Add = () => {

  let [forminput, setForminput] = useState({
    name: '',
    email: ''
  })
  let navigate = useNavigate()

  let changeInput = (event) => {
    let { name, value } = event.target;
    setForminput({
      ...forminput,
      [name]: value
    })
  }

  const db = getFirestore(app)


  let handleSubmit = async (event) => {
    event.preventDefault();

    try {

      let record = await addDoc(collection(db, 'users'), {
        userid: Math.floor(Math.random() * 1000),
        name: forminput.name,
        email: forminput.email
      })
      navigate("/view")

    } catch (err) {
      console.log(err);
      return false

    }

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


      <Link to={'/view'}>View</Link>
    </div>
  )
}

export default Add
