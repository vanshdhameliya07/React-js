import { getDatabase, onValue, ref, remove } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { app } from '../Firebase'

const View = () => {
    const db = getDatabase(app)
    let navigate = useNavigate()
    let [allrecord, setAllrecord] = useState("")

    let getuser = () => {
        const allrecord = ref(db, 'users')
        onValue(allrecord, (row) => {
            let data = row.val()
            setAllrecord(data)

        })
    }


    useEffect(() => {
        getuser()
    }, [])
    let editUser = (id, name, email) => {

        let data = { id, name, email };


        navigate(`/edit/${id}`, {
            state: {
                data: data
            }
        })

    }

    let deleteUser = (id) => {
        let deleteUser = ref(db, `users/${id}`)
        remove(deleteUser)
        alert("record successfully deleted")
    }


    return (
        <div align="center">
            <h1>view user</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allrecord && Object.entries(allrecord).map(([key, value]) => {
                            return (

                                <tr>
                                    <td>{key}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>
                                        <button onClick={() => deleteUser(key)}>Delete</button>
                                        <button onClick={() => editUser(key, value.name, value.email)}>Edit</button>

                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to={"/"}>Add</Link>
        </div>
    )
}

export default View
