import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUser } from '../redux/action/Action';


const View = () => {

    let dispatch = useDispatch()
    let user = useSelector((state) => state.student)
    
     let deleteuser = (id) => {
        dispatch(DeleteUser(id))
    }

    return (
        <div align="center">
            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>class</td>
                        <td>email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((val, i) => {
                            let { id, sname, Class, email } = val;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{sname}</td>
                                    <td>{Class}</td>
                                    <td>{email}</td>
                                    <td>
                                        <button onClick={() => deleteuser(id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default View
