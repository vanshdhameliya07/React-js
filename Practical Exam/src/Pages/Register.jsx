import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { add_student } from '../redux/action/Action'

const Register = () => {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    let [forminput, setForminput] = useState({
        name: '',
        email: '',
        password: ''
    })

    let changeInput = (event) => {
        let { name, value } = event.target;
        setForminput({
            ...forminput,
            [name]: value
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        dispatch(add_student(forminput))
        navigate("/login")
    }

    return (
        <div align="center">
            <h1>Register user</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name='name' onChange={changeInput} value={forminput.name} /></td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td><input type="text" name='email' onChange={changeInput} value={forminput.email} /></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="text" name='password' onChange={changeInput} value={forminput.password} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" /></td>
                        </tr>
                    </thead>
                </table>
            </form>
            <Link to={`/login`}>Login</Link>
        </div>
    )
}

export default Register
