import React, { useEffect, useState } from 'react'
import { app } from '../../FireBase'
import { onValue, ref, getDatabase, remove } from 'firebase/database'
import { Link } from 'react-router-dom'
import './View.css'

const View = () => {

    let [alluser, setAlluser] = useState([])
    let db = getDatabase(app)

    let getuser = () => {
        let allrecord = ref(db, 'users')
        onValue(allrecord, ((row) => {
            let data = row.val()
            setAlluser(data)
        }))
    }

    useEffect(() => {
        getuser()
    }, [])

    const deleteUser = (id) => {
        let deleteuser = ref(db, `users/${id}`)
        remove(deleteuser)
        alert("User Deleted Successfully")
        getuser()
    }

    return (
        <div align="center">
            <h1>View user</h1>
            <table className='dd ' border={1} cellSpacing={5} cellPadding={5}>
                <thead >
                    <tr >
                        <td>Id</td>
                        <td>name</td>
                        <td>company</td>
                        <td>email</td>
                        <td>phone</td>
                        <td>message</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody  className='ff'>
                    {
                        alluser && Object.entries(alluser).map(([id, value]) => {

                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.company}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.message}</td>
                                    <td>
                                        <button onClick={() => deleteUser(id)}>Delete</button>
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
