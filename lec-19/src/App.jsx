import { useState } from "react"

function App() {

  const [forminput, setFormInput] = useState({
    username: '',
    useremail: '',
    userpassword: '',
    usergender: ''
  })

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...forminput,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(forminput);
    alert("form submit")

    setFormInput({
      username: '',
      useremail: '',
      userpassword: '',
      usergender: ''
    })

  }

  return (
    <div align="center">


      <form onSubmit={handleSubmit}>
        <h1>form validation</h1>
        <table border={1} cellPadding={5} cellSpacing={3}>
          <thead>
            <tr>
              <td>name :</td>
              <td><input type="text" name="username" onChange={changeInput} value={forminput.username} /></td>
            </tr>
            <tr>
              <td>email :</td>
              <td><input type="text" name="useremail" onChange={changeInput} value={forminput.useremail} /></td>
            </tr>
            <tr>
              <td>password :</td>
              <td><input type="text" name="userpassword" onChange={changeInput} value={forminput.userpassword} /></td>
            </tr>
            <tr>
              <td>gender :</td>
              <td>
                <input type="radio" checked={forminput.usergender == "male"} name="usergender" onChange={changeInput} value="male" />male
                <input type="radio" checked={forminput.usergender == "female"} name="usergender" onChange={changeInput} value="female" />Female
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
