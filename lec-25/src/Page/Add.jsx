import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Add = () => {

  let [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    courses: [],
    city: "",
    date: ""

  })

  let navigator = useNavigate()

  let [allrecord, setAllrecord] = useState(JSON.parse(localStorage.getItem('users')) || [])

  let changeInput = (event) => {
    let { name, value, type, checked } = event.target

    if (type == "checkbox") {
      if (checked) {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses, value]
        })
      } else {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses].filter(val => val != value)
        })
      }

    } else {
      setFormInput({
        ...formInput,
        [name]: value
      })
    }


  }

  let handleSubmit = (event) => {
    event.preventDefault()
    console.log(formInput);

    let oldrecord = [...allrecord, formInput]
    setAllrecord(oldrecord)
    localStorage.setItem('users', JSON.stringify(oldrecord))
    alert("form submitted")
    setFormInput({
      name: "",
      email: ""
    })
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
              <td>password</td>
              <td><input type="password" name='password' onChange={changeInput} value={formInput.password} /></td>
            </tr>
            <tr>
              <td>Gender</td>
              <td><input type="radio" name='gender' value="male" onChange={changeInput} />Male
                <input type="radio" name='gender' value="female" onChange={changeInput} />Female
              </td>
            </tr>
            <tr>
              <td>Courses</td>
              <td>
                <input type="checkbox" name="courses" value="c" onChange={changeInput} />c
                <input type="checkbox" name="courses" value="c++" onChange={changeInput} />c++
                <input type="checkbox" name="courses" value="python" onChange={changeInput} />python

              </td>

            </tr>
            <tr>
              <td>City</td>
              <td>
                <select name="city" onChange={changeInput} value={formInput.city}>
                  <option value="">--select city----</option>
                  <option value="Surat">Surat</option>
                  <option value="Vapi">Vapi</option>
                  <option value="Tapi">Tapi</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Date</td>
              <td><input type="date" name="date" onChange={changeInput} value={formInput.date} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="Submit" /></td>
            </tr>
          </thead>
        </table>
      </form>

      <Link to={"/view"}>view</Link>
    </div>

  )
}

export default Add
