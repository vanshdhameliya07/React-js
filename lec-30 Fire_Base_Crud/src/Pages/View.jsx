import { getDatabase, onValue, ref, remove } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { app } from '../Firebase'

const View = () => {

    const db = getDatabase(app)
    let [alluser, setAlluser] = useState([])
    let navigate = useNavigate()

    let getuser = () => {
        let allrecord = ref(db, 'users')

        onValue(allrecord, ((row) => {
            const data = row.val()
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

    const editUser = (id, name, email) => {
        let data = ({
            id: id,
            name: name,
            email: email
        })
        navigate("/edit", {
            state: data
        })



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
                        alluser && Object.entries(alluser).map(([id, value]) => {
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>
                                        <button onClick={() => deleteUser(id)}>Delete</button>
                                        <button onClick={() => editUser(id, value.name, value.email)}>Edit</button>
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
