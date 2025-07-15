import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Register_User } from '../redux/Action/Action'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    let dispatch = useDispatch();
    let navigate = useNavigate()

    let [forminput, setForminput] = useState({
        name: '',
        email: '',
        password: ''
    })

    let changeinput = (event) => {
        let { name, value } = event.target;
        setForminput({
            ...forminput,
            [name]: value
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        dispatch(Register_User(forminput))
        navigate("/login")
    }


    return (
        <div align="center">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name='name' value={forminput.name} onChange={changeinput} /></td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td><input type="text" name='email' value={forminput.email} onChange={changeinput} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="text" name='password' value={forminput.password} onChange={changeinput} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" /></td>
                        </tr>
                    </thead>
                </table>
            </form>
            <Link to={'/login'}>login</Link>
        </div>
    )
}

export default Register
