
import { useState } from 'react'
import './App.css'

function App() {

  let [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    Availability: "",
    EventInterest: ""
  })

  let [data, setData] = useState([])

  let formInput = (event) => {
    let { name, value } = event.target
    setFormInput({
      ...formInputs,
      [name]: value
    })
  }


  let handleSubmit = (event) => {
    event.preventDefault()
    console.log(formInputs);
    setData([...data, formInputs])

  }
  return (

    <div align="center">
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <thead>
            <tr>
              <td>Name :</td>
              <td><input type="text" name='name' onChange={formInput} /></td>
            </tr>
            <tr>
              <td>Email :</td>
              <td><input type="text" name='email' onChange={formInput} /></td>
            </tr>
            <tr>
              <td>Availability</td>
              <td>
                <select name="Availability" onChange={formInput} >
                  <option value="">----select Availability----</option>
                  <option value="Weekdays">Weekdays</option>
                  <option value="Weekends">Weekends</option>
                  <option value="Evenings">Evenings</option>
                  <option value="Anytime">Anytime</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Event Interest :</td>
              <td><input type="text" name='EventInterest' onChange={formInput} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="Submit" /></td>
            </tr>
          </thead>
        </table>
      </form>

      <br />
      <br />

      <table border={1}>
        <thead>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>Availability</td>
            <td>EventInterest</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((val, i) => {
              let { name, email, Availability, EventInterest } = val
              return (
                <tr>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{Availability}</td>
                  <td>{EventInterest}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>

  )
}

export default App
