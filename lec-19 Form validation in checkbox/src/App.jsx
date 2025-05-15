import React, { useState } from 'react'

const App = () => {

  let [formInput, setFormInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    courses: []

  })


  let [error, setError] = useState({
    username: "",
    useremail: "",
    userpassword: ""
  })


  let formvalidation = () => {
    let error = { username: '', useremail: '', userpassword: '' }
    let check = true

    if (!formInput.username) {
      error.username = "name is required"
      check = false
    }
    if (!formInput.useremail) {
      error.useremail = "email is required"
      check = false
    }
    else if (formInput.userpassword.length <= 8) {
      error.userpassword = "password  at list 8 digit require"
      check = false
    }
    setError(error)
    return check

  }


  let inputchange = (event) => {
    let { name, value, type, checked } = event.target;
    if (type == "checkbox") {
      if (checked) {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses, value]

        })

      } else {
        setFormInput({
          ...formInput,
          courses: [...formInput.courses.filter(c => c != value)]
        })
      }

    } else {
      setFormInput({
        ...formInput,
        [name]: value
      })
    }


  }

  let handlesubmit = (event) => {
    event.preventDefault()
    if (formvalidation()) {
      console.warn(formInput);

      setFormInput({
        username: '',
        useremail: '',
        userpassword: '',
        courses: []
      })
    }


  }

  return (
    <div align="center">
      <h1>form validation</h1>

      <form onSubmit={handlesubmit}>
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <td>name</td>
              <td><input type="text" onChange={inputchange} name='username' value={formInput.username} />
                <span style={{ color: "red" }}>{error.username}</span>
              </td>
            </tr>
            <tr>
              <td>email</td>
              <td><input type="text" onChange={inputchange} name='useremail' value={formInput.useremail} />
                <span style={{ color: "red" }}>{error.useremail}</span>

              </td>
            </tr>
            <tr>
              <td>password</td>
              <td><input type="text" onChange={inputchange} name='userpassword' value={formInput.userpassword} />
                <span style={{ color: "red" }}>{error.userpassword}</span>
              </td>
            </tr>
            <tr>
              <td>courses</td>
              <td>
                <input type="checkbox" checked={formInput.courses.includes('html')} onChange={inputchange} name='courses' value="html" />html
                <input type="checkbox" checked={formInput.courses.includes('css')} onChange={inputchange} name='courses' value="css" />css
                <input type="checkbox" checked={formInput.courses.includes('java')} onChange={inputchange} name='courses' value="java" />java
                <input type="checkbox" checked={formInput.courses.includes('pyton')} onChange={inputchange} name='courses' value="pyton" />pyton
              </td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" /></td>
            </tr>
          </thead>
        </table>
      </form>

    </div>
  )
}

export default App
