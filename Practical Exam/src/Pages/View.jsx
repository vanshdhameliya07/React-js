import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUser } from '../redux/action/Action';
import { Link, useNavigate } from 'react-router-dom';


const View = () => {

    let dispatch = useDispatch()
    let navigate = useNavigate()
    let user = useSelector((state) => state.student)
    let [allrecord, setAllrecord] = useState([]);
    let [filterdata, setFilterdata] = useState([]);
    let [shortings, setShortings] = useState({ name: true });
    let [searchField, setSearchField] = useState({
        sname: "",
        Class: "",
        email: ""
    })

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('student')) || []

        setAllrecord(data)
        setFilterdata(data)

    }, [])


    useEffect(() => {
        let fdata = [...allrecord];

        fdata = allrecord.filter((val) => {
            return val.sname.toLowerCase().includes(searchField.sname.toLowerCase())
        })
        setFilterdata(fdata)

    }, [searchField, allrecord])

    let shorting = () => {
        let shortdata = [...allrecord].sort((a, b) => {
            let nameA = a.sname.toLowerCase()
            let nameB = b.sname.toLowerCase()

            if (nameA > nameB) {
                return shortings ? 1 : -1;
            }
            if (nameA < nameB) {
                return shortings ? -1 : 1;
            }
        });
        setAllrecord(shortdata)
        localStorage.setItem("student", JSON.stringify(shortdata))
        setShortings({ name: !shortings.name });


    }
    let searchinput = (event) => {
        let { name, value } = event.target;
        setSearchField({
            ...searchField,
            [name]: value
        })

    }


    let deleteuser = (id) => {
        dispatch(DeleteUser(id))
    }
    let edituser = (id) => {
        navigate(`/edit/${id}`)
    }

    return (
        <div align="center">
            <input type="text" name='sname' onChange={searchinput} value={searchField.sname} />
            <table border={1}>
                <thead>

                    <tr>
                        <td>id</td>
                        <td onClick={() => shorting('name')} style={{ cursor: "pointer" }}>name</td>
                        <td>class</td>
                        <td>email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterdata.map((val, i) => {
                            let { id, sname, Class, email } = val;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{sname}</td>
                                    <td>{Class}</td>
                                    <td>{email}</td>
                                    <td>
                                        <button onClick={() => deleteuser(id)}>Delete</button>
                                        <button onClick={() => edituser(id)}>Edit</button>

                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to={"/dashboard"}>Add</Link>
        </div>
    )
}

export default View
