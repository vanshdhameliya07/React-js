import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const View = () => {


    let [allrecord, setAllrecord] = useState([]);
    let [filterdata, setFilterdata] = useState([]);
    let [shortings, setShortings] = useState({ name: true });
    let [searchField, setSearchField] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        courses: [],
        city: "",
        date: ""
    })

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('users')) || []
        setAllrecord(data)
        setFilterdata(data)

    }, [])

    useEffect(() => {

        let fdata = [...allrecord];


        fdata = allrecord.filter((val) => {
            return val.name.toLowerCase().includes(searchField.name.toLowerCase())
        })
        setFilterdata(fdata)

    }, [searchField, allrecord])


    let searchinput = (event) => {
        let { name, value } = event.target;
        setSearchField({
            ...searchField,
            [name]: value
        })

    }

    let deleteuser = (id) => {

        let deleteuser = allrecord.filter((val) => {
            return val.id != id
        })
        setAllrecord(deleteuser)
        localStorage.setItem('users', JSON.stringify(deleteuser))

    }

    let shorting = (name) => {
        let shortdata = [...allrecord].sort((a, b) => {
            let nameA = a.name.toLowerCase()
            let nameB = b.name.toLowerCase()

            if (nameA > nameB) {
                return shortings ? 1 : -1;
            }
            if (nameA < nameB) {
                return shortings ? -1 : 1;
            }
        });
        setAllrecord(shortdata)
        localStorage.setItem("users", JSON.stringify(shortdata))
        setShortings(!shortings)

    }

    let edituser = (id) => {
        let single = allrecord.find(val => val.id == id);
        navigator(`/edit/${id}`)
    }

    let navigator = useNavigate()

    return (
        <div align="center">
            <h1>view user</h1>

            <Link to={"/"}>Add</Link>

            <input type="text" name='name' onChange={searchinput} value={searchField.name} />

            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td onClick={() => shorting('name')} style={{ cursor: "pointer" }}>name</td>
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

                        filterdata.length == 0 ? (
                            allrecord.map((val, i) => {
                                let { id, name, email, password, gender, courses, city, date } = val
                                return (
                                    <tr key={i++}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{password}</td>
                                        <td>{gender}</td>
                                        <td>{courses.join(" - ")}</td>
                                        <td>{city}</td>
                                        <td>{date}</td>
                                        <td>
                                            <button onClick={() => deleteuser(id)}>Delete</button>
                                            <button >Edit</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            filterdata.map((val, i) => {
                                let { id, name, email, password, gender, courses, city, date } = val
                                return (
                                    <tr key={i++}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{password}</td>
                                        <td>{gender}</td>
                                        <td>{courses.join(" - ")}</td>
                                        <td>{city}</td>
                                        <td>{date}</td>
                                        <td>
                                            <button onClick={() => deleteuser(id)}>Delete</button>
                                            <button onClick={() => edituser(id)} >Edit</button>
                                        </td>
                                    </tr>
                                )
                            })
                        )

                    }
                </tbody>
            </table>

        </div>
    )
}

export default View
