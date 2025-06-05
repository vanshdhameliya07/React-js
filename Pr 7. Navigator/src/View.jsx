import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const View = () => {
    const [allrecord, setAllrecord] = useState(JSON.parse(localStorage.getItem('user')) || [])
    let navigator = useNavigate()

    let userDelete = (id) => {
        let deleteuser = allrecord.filter(val => val.id != id)
        setAllrecord(deleteuser);
        localStorage.setItem('user', JSON.stringify(deleteuser));
        alert("delete user")
    }

    let useredit = (id) => {
        navigator(`/edit/${id}`)
    }

    return (

        <div align="center">
            <h1>Volunteer View</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Availability</th>
                        <th>Event Interest</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allrecord.map((val, i) => {
                            let { id, name, email, Availability, EventInterest } = val
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{Availability}</td>
                                    <td>{EventInterest}</td>
                                    <td>
                                        <button onClick={() => userDelete(id)}>Delete</button>
                                        <button onClick={() => useredit(id)}>Edit</button>
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
