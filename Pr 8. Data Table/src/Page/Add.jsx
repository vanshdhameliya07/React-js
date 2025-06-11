import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './add.css'

const Add = () => {

  let [formInput, setFormInput] = useState({
    name: "",
    email: "",
    Availability: "",
    EventInterest: ""

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

    let obj = {
      id: Math.floor(Math.random() * 100),
      ...formInput
    }

    let oldrecord = [...allrecord, obj]
    setAllrecord(oldrecord)
    localStorage.setItem('users', JSON.stringify(oldrecord))
    alert("form submitted")
    setFormInput({
      name: "",
      email: "",
      Availability: "",
      EventInterest: ""
    })
    navigator('/view')

  }

  return (

    <>


      <div align="center" className='card' >
        <h1>Add user</h1>

        <form onSubmit={handleSubmit} >
          <table style={{ width: "300px", height: "100px" }} cellPadding={5} cellSpacing={2}>
            <thead>
              <tr>
                <td style={{ textTransform: "capitalize" }}>name</td>
                <td><input type="text" name='name' onChange={changeInput} value={formInput.name} /></td>
              </tr>
              <tr>
                <td style={{ textTransform: "capitalize" }}>email</td>
                <td><input type="text" name='email' onChange={changeInput} value={formInput.email} /></td>
              </tr>
              <tr>
                <td style={{ textTransform: "capitalize" }}>Availability</td>

                <td>
                  <select name="Availability" onChange={changeInput} value={formInput.Availability}>
                    <option value="">-- Select Availability --</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Evenings">Evenings</option>
                    <option value="Anytime">Anytime</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td style={{ textTransform: "capitalize" }}>Availability</td>
                <td><input type="text" name='EventInterest' onChange={changeInput} value={formInput.EventInterest} /></td>
              </tr>


              <tr>
                <td></td>
                <td><input type="Submit" /></td>
              </tr>
            </thead>
          </table>
        </form>

        <Link to={"/view"} style={{
          backgroundColor: "#007BFF", textDecoration: "none", color: 'white',
          border: 'none',
          padding: '8px 12px',
          marginRight: '8px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>view</Link>
      </div>
    </>



  )
}

export default Add
