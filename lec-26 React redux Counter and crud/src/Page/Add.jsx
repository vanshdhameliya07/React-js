import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Adduser } from '../redux/action/crudAction'

const Add = () => {

    let dispatch = useDispatch()
    let navigate = useNavigate()

    let [formInput, setFormInput] = useState({
        name: '',
        email: ''
    })

    let changeInput = (event) => {
        let { name, value } = event.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        let obj = {
            id: Date.now(),
            ...formInput
        }
        setFormInput({
            name: '',
            email: ''
        })
        dispatch(Adduser(obj));
        navigate("/view")

    }

    return (
        <div align="center">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name='name' value={formInput.name} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="text" name='email' value={formInput.email} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" /></td>
                        </tr>
                    </thead>
                </table>
            </form>
            <Link to={'/view'}>view</Link>
        </div>
    )
}

export default Add
