import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { app } from '../../FirebaseConfig'
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
const Edit = () => {

  let [forminput, setForminput] = useState({
    name: '',
    email: ''
  })
  let navigate = useNavigate()
  let location = useLocation()


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
      const updaterecord = doc(db, `users/${location.state.id}`)
      await updateDoc(updaterecord, {
        name: forminput.name,
        email: forminput.email
      })
      alert("updated successfully")
      navigate('/view')


    } catch (err) {
      console.log(err);
      return false
    }
  }

  useEffect(() => {
    setForminput({
      ...forminput,
      name: location.state.name,
      email: location.state.email
    })
  }, [location.state])


  return (
    <div align="center">
      <h1>Edit Page</h1>


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

export default Edit
