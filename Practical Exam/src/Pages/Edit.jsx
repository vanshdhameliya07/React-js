import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Add_Student, Edit_user, Update_user } from '../redux/action/Action'

const Edit = () => {

    let { id } = useParams()
    let [forminput, setForminput] = useState({
        sname: "",
        Class: "",
        email: ""
    })

    let single = useSelector((state) => state.student)

    let dispatch = useDispatch()

    let navigate = useNavigate()

    useEffect(() => {
        dispatch(Edit_user(id))
    }, [id, dispatch])


    useEffect(() => {

        if (single[0]) {
            setForminput(single[0]);
        }

    }, [single])



    let changeInput = (event) => {
        let { name, value } = event.target

        setForminput({
            ...forminput,
            [name]: value
        })
    }

    let handlesubmit = (event) => {
        event.preventDefault()

        dispatch(Update_user(forminput))
        navigate("/view")
    }

    return (
        <div align="center">
            <h1>Edit User</h1>
            <form onSubmit={handlesubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>student Name</td>
                            <td><input type="text" name='sname' value={forminput.sname} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>Class</td>
                            <td><input type="text" name='Class' value={forminput.Class} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td><input type="text" name='email' value={forminput.email} onChange={changeInput} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" /></td>
                        </tr>

                    </thead>
                </table>
            </form>
        </div>
    )
}

export default Edit
