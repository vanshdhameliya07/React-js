import React from 'react'

const Todos = ({ todo }) => {
    return (
        <>
            <h1>todos api</h1>

            <table border={1} cellPadding={4}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>todo</td>
                        <td>completed</td>
                        <td>userId</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((val, i) => {
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.todo}</td>
                                    <td>{val.completed ? " true" : "false"}  </td>
                                    <td>{val.userId}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Todos
