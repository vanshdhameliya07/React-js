import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Adduser } from '../redux/action/crudAction'

const Edit = () => {

    const { id } = useParams()

    const single = useSelector(state => state.crud.single)

    let dispatch = useDispatch()
    let navigate = useNavigate()

    let [formInput, setFormInput] = useState({
        name: '',
        email: ''
    })

    useEffect(() => {
        if (single) {
            setFormInput(single);
        }

    }, [single]);

    let changeInput = (event) => {
        let { name, value } = event.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault()

        let single = state.crud.single;
        console.log(single);



        navigate("/view")

    }

    return (
        <div align="center">
            <h1>edit User</h1>
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
                            <td><input type="submit" value="Update" /></td>
                        </tr>
                    </thead>
                </table>
            </form>
            <Link to={'/view'}>view</Link>
        </div>
    )
}

export default Edit
