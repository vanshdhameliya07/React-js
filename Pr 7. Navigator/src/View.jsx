import React, { useState } from 'react'
import { Link } from 'react-router'

const View = () => {
    const [allrecord, setAllrecord] = useState(JSON.parse(localStorage.getItem('user')) || [])
    return (

        <div align="center">
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
