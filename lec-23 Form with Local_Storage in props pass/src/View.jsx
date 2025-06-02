import React from 'react'

const View = ({ All, deleteuser, Edituser }) => {
    return (
        <div align="center">
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>Action</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        All.map((v, i) => {
                            let { userid, name, email } = v;
                            return (
                                <tr key={i}>
                                    <td>{userid}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>
                                        <button onClick={() => deleteuser(userid)}>Delete</button>
                                        <button onClick={() => Edituser(userid)}>Edit</button>
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
