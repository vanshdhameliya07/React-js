
import { useState } from 'react'
import './App.css'

function App() {

  let [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    Availability: "",
    EventInterest: ""
  })

  let [editId, setEditid] = useState("")

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


    if (editId != "") {

      let update = data.map((val, i) => {
        if (val.id == editId) {
          {
            val.id = formInputs.id
            val.name = formInputs.name
            val.email = formInputs.email
            val.Availability = formInputs.Availability
            val.EventInterest = formInputs.EventInterest
          }
        }
        return val
      })
      setData(update)
      setEditid("")


    } else {
      let obj = {
        id: Math.floor(Math.random() * 100),
        ...formInputs
      }
      setData([...data, obj])
    }



    setFormInput({
      name: "",
      email: "",
      Availability: [],
      EventInterest: ""
    })

  }

  let userDelete = (id) => {
    let deleteuser = data.filter((val, i) => {
      return val.id != id
    })
    setData(deleteuser);

  }


  let useredit = (id) => {
    let edit = data.find((val, i) => {
      return val.id == id
    })
    setFormInput(edit)
    setEditid(id)
  }



  return (

    <div class="container">
      <h1>Volunteer Sign-Up</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td><label for="name">Name:</label></td>
            <td><input type="text" name='name' onChange={formInput} value={formInputs.name} /></td>
          </tr>
          <tr>
            <td><label for="email">Email:</label></td>
            <td><input type="text" name='email' onChange={formInput} value={formInputs.email} /></td>
          </tr>
          <tr>
            <td><label for="availability">Availability:</label></td>
            <td>
              <select name="Availability" onChange={formInput} value={formInputs.Availability} >
                <option value="">-- Select Availability --</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Evenings">Evenings</option>
                <option value="Anytime">Anytime</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label for="interest">Event Interest:</label></td>
            <td><input type="text" name='EventInterest' onChange={formInput} value={formInputs.EventInterest} /></td>
          </tr>
          <tr>
            <td></td>
            <td><input type="submit" value="Submit" /></td>
          </tr>
        </table>
      </form>

      <br /><br />

      <table class="data-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Availability</th>
            <th>Event Interest</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((val, i) => {
              let { id, name, email, Availability, EventInterest } = val
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{Availability}</td>
                  <td>{EventInterest}</td>
                  <td>
                    <button onClick={() => userDelete(id)}>Delete</button>
                    <button onClick={() => useredit(id)}>Edit</button>
                  </td>

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
