import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './edit.css'

const Edit = () => {

    let { editid } = useParams()
    let [allrecord, setAllrecord] = useState(JSON.parse(localStorage.getItem('users')) || [])

    let [formInput, setFormInput] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        courses: [],
        city: "",
        date: ""

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
        if (editid) {
            let up = allrecord.map((val, i) => {
                if (val.id == editid) {
                    {
                        val.name = formInput.name
                        val.email = formInput.email
                        val.password = formInput.password
                        val.gender = formInput.gender
                        val.courses = formInput.courses
                        val.city = formInput.city
                        val.date = formInput.date


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
                            <td>password</td>
                            <td><input type="password" name='password' onChange={changeInput} value={formInput.password} /></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td><input type="radio" name='gender' checked={formInput.gender == "male"} value="male" onChange={changeInput} />Male
                                <input type="radio" name='gender' checked={formInput.gender == "female"} value="female" onChange={changeInput} />Female
                            </td>
                        </tr>
                        <tr>
                            <td>Courses</td>
                            <td>
                                <input type="checkbox" name="courses" checked={formInput.courses.includes("c")} value="c" onChange={changeInput} />c
                                <input type="checkbox" name="courses" checked={formInput.courses.includes("c++")} value="c++" onChange={changeInput} />c++
                                <input type="checkbox" name="courses" checked={formInput.courses.includes("python")} value="python" onChange={changeInput} />python

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
