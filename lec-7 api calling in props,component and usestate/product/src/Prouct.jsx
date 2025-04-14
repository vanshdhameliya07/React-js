import React from 'react'

const Prouct = ({ prod }) => {

    return (
        <>
            <h1>product</h1>

            <table border={1} align="center">
                <thead >
                    <tr>
                        <td>id</td>
                        <td>title</td>
                        <td>description</td>
                        <td>category</td>
                        <td>rating</td>
                        <td>tags</td>
                        <td>brand</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        prod.map((val, i) => {
                            return (
                                <tr key={i}>
                                    <td>{val.id}</td>
                                    <td>{val.title}</td>
                                    <td>{val.description}</td>
                                    <td>{val.category}</td>
                                    <td>{val.rating}</td>
                                    <td>{val.tags}</td>
                                    <td>{val.brand}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Prouct
