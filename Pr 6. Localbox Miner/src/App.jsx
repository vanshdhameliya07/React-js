
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

    <div align="center">
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <thead>


            <tr>
              <td>Name :</td>
              <td><input type="text" name='name' onChange={formInput} value={formInputs.name} /></td>
            </tr>
            <tr>
              <td>Email :</td>
              <td><input type="text" name='email' onChange={formInput} value={formInputs.email} /></td>
            </tr>
            <tr>
              <td>Availability</td>
              <td>
                <select name="Availability" onChange={formInput} value={formInputs.Availability} >
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
              <td><input type="text" name='EventInterest' onChange={formInput} value={formInputs.EventInterest} /></td>
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
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>Availability</td>
            <td>EventInterest</td>
            <td>Action</td>
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
