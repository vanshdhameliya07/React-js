import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './edit.css'

const Edit = () => {

    let { editid } = useParams()
    let [allrecord, setAllrecord] = useState(JSON.parse(localStorage.getItem('users')) || [])

    let [formInput, setFormInput] = useState({
        name: "",
        email: "",
        Availability: "",
        EventInterest: ""

    })

    useEffect(() => {
        if (editid) {
            let single = allrecord.find((val) => {
                return val.id == editid
            })
            setFormInput(single);


        }
    }, editid, allrecord)

    let navigator = useNavigate()


    let changeInput = (event) => {
        let { name, value, type, checked } = event.target


        setFormInput({
            ...formInput,
            [name]: value
        })



    }

    let handleSubmit = (event) => {
        event.preventDefault()
        if (editid) {
            let up = allrecord.map((val, i) => {
                if (val.id == editid) {
                    {
                        val.name = formInput.name
                        val.email = formInput.email
                        val.Availability = formInput.Availability
                        val.EventInterest = formInput.EventInterest



                    }
                    return val

                }

            })

            setAllrecord(up)
            localStorage.setItem("users", JSON.stringify(up))
            alert("Update sucessfully ")

        }
        navigator('/view')

    }

    return (
        <div align="center" className='card'>
            <h1>Edit user</h1>

            <form onSubmit={handleSubmit}>
                <table style={{ width: "300px", height: "100px" }} cellPadding={5} cellSpacing={2}>
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
            <br />
            <br />
            <br />
        </div>

    )
}

export default Edit
