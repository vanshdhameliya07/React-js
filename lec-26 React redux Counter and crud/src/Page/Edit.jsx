import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Adduser, Edituser, Updateuser } from '../redux/action/crudAction'

const Edit = () => {

    let [formInput, setFormInput] = useState({
        name: '',
        email: ''
    })

    const single = useSelector(state => state.crud.single)

    let dispatch = useDispatch()
    let navigate = useNavigate()



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

        let obj = {
            id: Date.now(),
            ...formInput
        }

        dispatch(Updateuser(obj))

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
