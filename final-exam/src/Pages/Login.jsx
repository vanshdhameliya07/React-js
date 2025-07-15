import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { add_student, Login_user } from '../redux/action/Action'

const Login = () => {

    let login = JSON.parse(localStorage.getItem("login")) || []

    let navigate = useNavigate()
    let dispatch = useDispatch()
    let [forminput, setForminput] = useState({
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

    let handleSubmit = async (event) => {
        event.preventDefault()
        const result = await dispatch(Login_user(forminput));
        if (result) {
            navigate("/dashboard");
        } else {
            alert("Invalid email or password");
        }

    }

    return (
        <div align="center">
            <h1>Login user</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <thead>

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
            <Link to={`/`}>register</Link>
        </div>
    )
}

export default Login
