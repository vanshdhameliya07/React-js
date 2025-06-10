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
        <div align="center" style={styles.container}>
            <h1 style={styles.heading}>view user</h1>

            <br />

            Search name &nbsp;
            <input type="text" name='name' placeholder='Enter name to search' onChange={searchinput} value={searchField.name} />
            <br />
            <br />
            <table border={1} style={styles.table}>
                <thead>
                    <tr>
                        <td style={styles.th}>Id</td>
                        <td onClick={() => shorting('name')} style={{ cursor: "pointer", backgroundColor: "#007bff", color: "#FFF", border: '1px solid #ddd', }}>name</td>
                        <td style={styles.th}>email</td>
                        <td style={styles.th}>password</td>
                        <td style={styles.th}>Gender</td>
                        <td style={styles.th}>courses</td>
                        <td style={styles.th}>City</td>
                        <td style={styles.th}>Date</td>
                        <td style={styles.th}>Action</td>
                    </tr>

                </thead>
                <tbody>
                    {

                        filterdata.length == 0 ? (
                            allrecord.map((val, i) => {
                                let { id, name, email, password, gender, courses, city, date } = val
                                return (
                                    <tr key={i++}>
                                        <td >{id}</td>
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
                                        <td style={styles.td}>{id}</td>
                                        <td style={styles.td}>{name}</td>
                                        <td style={styles.td}>{email}</td>
                                        <td style={styles.td}>{password}</td>
                                        <td style={styles.td}>{gender}</td>
                                        <td style={styles.td}>{courses.join(" , ")}</td>
                                        <td style={styles.td}>{city}</td>
                                        <td style={styles.td}>{date}</td>
                                        <td >
                                            <button style={styles.deleteBtn} onClick={() => deleteuser(id)}>Delete</button>
                                            <button style={styles.editBtn} onClick={() => edituser(id)} >Edit</button>
                                        </td>
                                    </tr>
                                )
                            })
                        )

                    }
                </tbody>
            </table>
            <Link to={"/"} style={{
                backgroundColor: "#007BFF", textDecoration: "none", color: 'white',
                border: 'none',
                padding: '8px 12px',
                marginRight: '8px',
                borderRadius: '4px',
                cursor: 'pointer'
            }}>Add</Link>

        </div>
    )
}
const styles = {
    container: {
        maxWidth: '1100px',
        margin: '40px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#fefefe',
        fontFamily: 'Segoe UI, sans-serif',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    },
    heading: {
        marginBottom: '20px',
        color: '#333'
    },
    noData: {
        fontSize: '16px',
        color: '#888'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px'
    },
    th: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'center'
    },
    td: {
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'center'
    },
    deleteBtn: {
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        marginRight: '8px',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    editBtn: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    link: {
        display: 'inline-block',
        marginTop: '10px',
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold'
    }
}

export default View
