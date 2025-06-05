import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const Add = () => {

    let navigate = useNavigate()
    let [formInput, setFormInput] = useState({
        name: "",
        email: "",
        Availability: "",
        EventInterest: ""

    })

    let [allrecord, setAllrecord] = useState(JSON.parse(localStorage.getItem('user')) || [])

    let changeInput = (event) => {
        let { name, value } = event.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    let userDelete = (id) => {
        let deleteuser = allrecord.map(val => val.id != id)
        setAllrecord(deleteuser);
        localStorage.setItem('user', JSON.stringify(deleteuser))

    }

    let handleSubmit = (event) => {
        event.preventDefault()

        let obj = {
            id: Math.floor(Math.random() * 100),
            ...formInput
        }
        let oldrecord = [...allrecord, obj]
        localStorage.setItem('user', JSON.stringify(oldrecord))
        setAllrecord(oldrecord)
        setFormInput({
            name: "",
            email: "",
            Availability: "",
            EventInterest: ""
        })
        navigate("/view")

    }

    return (
        <div align="center">
            <h1>Volunteer Sign-Up</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" name='name' onChange={changeInput} value={formInput.name} /></td>
                        </tr>
                        <tr>
                            <td><label >Email:</label></td>
                            <td><input type="text" name='email' onChange={changeInput} value={formInput.email} /></td>
                        </tr>
                        <tr>
                            <td><label>Availability:</label></td>
                            <td>
                                <select name="Availability" onChange={changeInput} value={formInput.Availability} >
                                    <option value="">-- Select Availability --</option>
                                    <option value="Weekdays">Weekdays</option>
                                    <option value="Weekends">Weekends</option>
                                    <option value="Evenings">Evenings</option>
                                    <option value="Anytime">Anytime</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Event Interest:</label></td>
                            <td><input type="text" name='EventInterest' onChange={changeInput} value={formInput.EventInterest} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Submit" /></td>
                        </tr>
                    </thead>
                </table>
            </form>

            <br /><br />
            <Link to={"/view"}>view</Link>

        </div >

    )
}

export default Add
