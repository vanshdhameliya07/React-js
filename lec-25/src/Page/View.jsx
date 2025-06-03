import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const View = () => {

    let [allrecord, setAllrecord] = useState([])

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('users')) || []
        setAllrecord(data)

    }, [])

    return (
        <div align="center">
            <h1>view user</h1>
            <Link to={"/"}>Add</Link>


            <table border={1}>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>password</td>
                        <td>Gender</td>
                        <td>courses</td>
                        <td>City</td>
                        <td>Date</td>
                        <td>Action</td>
                    </tr>

                </thead>
                <tbody>
                    {
                        allrecord.map((val, i) => {
                            let { name, email, password, gender, courses, city, date } = val
                            return (
                                <tr key={i++}>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td>{gender}</td>
                                    <td>{courses.join(" - ")}</td>
                                    <td>{city}</td>
                                    <td>{date}</td>
                                    <td>
                                        <button>Delete</button>
                                        <button>Edit</button>
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
