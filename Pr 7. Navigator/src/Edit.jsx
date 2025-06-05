import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'

const Edit = () => {

    let navigate = useNavigate()
    let { editid } = useParams()
    let [allrecord, setAllrecord] = useState(JSON.parse(localStorage.getItem('user')) || [])

    let [formInput, setFormInput] = useState({
        name: "",
        email: "",
        Availability: "",
        EventInterest: ""

    })



    useEffect(() => {
        if (editid) {
            let single = allrecord.find((val) => {
                return val.id == editid
            })
            setFormInput(single);
        }

    }, editid, allrecord)
    let changeInput = (event) => {
        let { name, value } = event.target

        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    let userDelete = (id) => {
        let deleteuser = allrecord.filter(val => val.id != id)
        setAllrecord(deleteuser);
        localStorage.setItem('user', JSON.stringify(deleteuser))

    }

    let handleSubmit = (event) => {
        event.preventDefault()

        if (editid) {
            let up = allrecord.map((val) => {
                if (val.id == editid) {
                    return {
                        ...val,
                        ...formInput
                    }
                }
                return val;
            })
            console.log(up);


            setAllrecord(up)
            localStorage.setItem("user", JSON.stringify(up))

        }

        navigate("/view")

    }

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Volunteer Sign-Up</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label>Name:</label>
                    <input type="text" name='name' onChange={changeInput} value={formInput.name} style={styles.input} />
                </div>

                <div style={styles.formGroup}>
                    <label>Email:</label>
                    <input type="text" name='email' onChange={changeInput} value={formInput.email} style={styles.input} />
                </div>

                <div style={styles.formGroup}>
                    <label>Availability:</label>
                    <select name="Availability" onChange={changeInput} value={formInput.Availability} style={styles.select}>
                        <option value="">-- Select Availability --</option>
                        <option value="Weekdays">Weekdays</option>
                        <option value="Weekends">Weekends</option>
                        <option value="Evenings">Evenings</option>
                        <option value="Anytime">Anytime</option>
                    </select>
                </div>

                <div style={styles.formGroup}>
                    <label>Event Interest:</label>
                    <input type="text" name='EventInterest' onChange={changeInput} value={formInput.EventInterest} style={styles.input} />
                </div>

                <div style={styles.formGroup}>
                    <button type="submit" style={styles.button}>Submit</button>
                </div>
            </form>

            <Link to="/view" style={styles.link}>View Submissions</Link>
        </div>

    )
}
const styles = {
    container: {
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "left",
        fontFamily: "'Segoe UI', sans-serif"
    },
    heading: {
        textAlign: "center",
        color: "#333"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px"
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    },
    input: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px"
    },
    select: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px"
    },
    button: {
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    },
    link: {
        display: "block",
        marginTop: "20px",
        textAlign: "center",
        textDecoration: "none",
        color: "#007bff"
    }
}

export default Edit
