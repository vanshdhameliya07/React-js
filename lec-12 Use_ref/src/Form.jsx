import React, { useRef } from 'react'

const Form = () => {
    let name = useRef()
    let email = useRef()
    let sub = (e) => {
        e.preventDefault()
        console.log("name  :", name.current.value);
        console.log("email :", email.current.value);
    }

    return (
        <>
            <div align="center">
                <h1>table form</h1>
                <form onSubmit={sub}>
                    <table border={1} cellPadding={5}>
                        <thead>
                            <tr>
                                <td>name</td>
                                <td><input type="text" ref={name} /></td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td><input type="text" ref={email} /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" /></td>
                            </tr>
                        </thead>
                    </table>
                </form>
            </div>
        </>
    )
}

export default Form
