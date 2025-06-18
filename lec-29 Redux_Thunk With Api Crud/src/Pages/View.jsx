import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Delete_user, view_user } from '../redux/Action/Action'

const View = () => {

    let user = useSelector((state) => state.crud.users)



    let dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(() => {
        dispatch(view_user())
    }, [])

    let deleteuser = (id) => {
        dispatch(Delete_user(id))
    }

    let edituser = (id) => {
        navigate(`/edit/${id}`)
    }


    return (
        <div align="center">

            <h1>View User</h1>
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
                                <tr key={i}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>
                                        <button onClick={() => deleteuser(id)}>Delete</button>
                                        <button onClick={() => edituser(id)}>Edit</button>

                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Link to={'/'}>Add</Link>
        </div>
    )
}

export default View
