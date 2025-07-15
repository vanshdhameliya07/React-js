import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Add_Student } from '../redux/action/Action'

const Dashboard = () => {

     let dispatch = useDispatch()
     let navigate = useNavigate()
    let [forminput, setForminput] = useState({
        sname: "",
        Class: "",
        email: ""
    })

    let changeInput = (event) => {
        let { name, value } = event.target

        setForminput({
            ...forminput,
            [name]: value
        })
    }

    let handlesubmit = (event) => {
        event.preventDefault()
        let obj = {
            id: Math.floor(Math.random() * 100),
            ...forminput
        }
        dispatch(Add_Student(obj))
        navigate("/view")
    }

    return (
        <div align="center">
            <h1>Add User</h1>
            <form onSubmit={handlesubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>student Name</td>
                            <td><input type="text" name='sname' value={forminput.sname} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>Class</td>
                            <td><input type="text" name='class' value={forminput.Class} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td><input type="text" name='email' value={forminput.email} onChange={changeInput} /></td>
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

export default Dashboard
