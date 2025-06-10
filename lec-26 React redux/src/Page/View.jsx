import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteuser } from '../redux/action/crudAction'

const View = () => {

    let user = useSelector((state) => state.crud.user);
    let Dispatch = useDispatch();
    let navigate = useNavigate()

    let edituser = (id) => {
        navigate(`/edit/${id}`)

    }

    return (
        <div align="center">
            <h1>view user</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((val, i) => {

                            let { id, name, email } = val
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>
                                        <button onClick={() => Dispatch(deleteuser(id))}>Delete</button>
                                        <button onClick={() => edituser(id)} >Edit</button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Link to={'/add'}>Add</Link>

        </div>
    )
}

export default View
