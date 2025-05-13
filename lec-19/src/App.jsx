import { use } from "react"
import { useState } from "react"

const App = () => {

  let [forminput, setFormInput] = useState({
    username: '',
    useremail: '',
    courses: []

  })

  let [error, setError] = useState({
    username: '',
    useremail: '',
  })




  let changeinput = (event) => {
    let { name, value, type, checked } = event.target

    if (type == "checkbox") {
      if (checked) {
        setFormInput({
          ...forminput,
          courses: [...forminput.courses, value]
        })
      }
      else {
        setFormInput({
          ...forminput,
          courses: [...forminput.courses].filter(val => val != value)
        })
      }
    } else {
      setFormInput({
        ...forminput,
        [name]: value
      })
    }




  }


  let formvalidation = () => {
    let error = { username: '', useremail: '' }
    let check = true

    if (!forminput.username) {
      error.username = "Name is required"
      check = false
    }
    if (!forminput.useremail) {
      error.useremail = "Email is required"
      check = false
    }
    setError(error);
    return true

  }


  let handlesubmit = (event) => {
    event.preventDefault()
    if (formvalidation()) {
      console.log(forminput);
      setFormInput({
        username: '',
        useremail: '',
        courses: []

      })
    }

  }

  return (
    <div align="center">
      <h1>form</h1>

      <form onSubmit={handlesubmit}>

        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <td>name</td>
              <td><input type="text" name="username" onChange={changeinput} value={forminput.username} />
                <span style={{ color: "red" }}>{error.username}</span>

              </td>
            </tr>
            <tr>
              <td>email</td>
              <td><input type="text" name="useremail" onChange={changeinput} value={forminput.useremail} />
                <span style={{ color: "red" }}>{error.useremail}</span>

              </td>
            </tr>
            <tr>
              <td>courses</td>
              <td>
                <input type="checkbox" name="courses" checked={forminput.courses.includes("html")} onChange={changeinput} value="html" />html
                <input type="checkbox" name="courses" checked={forminput.courses.includes("css")} onChange={changeinput} value="css" />css
                <input type="checkbox" name="courses" checked={forminput.courses.includes("bootstrap")} onChange={changeinput} value="bootstrap" />bootstrap
                <input type="checkbox" name="courses" checked={forminput.courses.includes("java")} onChange={changeinput} value="java" />Java
              </td>
            </tr>
            <tr>
              <td></td>
              <td><input type="Submit" /></td>
            </tr>
          </thead>
        </table>




      </form>
    </div>
  )
}

export default App
