import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const View = () => {
    let user = useSelector((state => state.crud.users))


    return (
        <div align="center">
            <h1>view user</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
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
