import React, { useState } from 'react'

const Form = () => {

    let [editid, setEditId] = useState("")
    let [formInput, setFormInput] = useState({
        username: '',
        useremail: '',
        userpassword: '',
        gender: '',
        language: [],
        city: ''
    })
    let [all, setAll] = useState(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [])


    let changeInput = (e) => {
        let { name, value, type, checked } = e.target

        if (type == "checkbox") {
            if (checked) {
                setFormInput({
                    ...formInput,
                    language: [...formInput.language, value]
                })
            } else {
                setFormInput({
                    ...formInput,
                    language: [...formInput.language.filter(val => val != value)]
                })
            }

        } else {
            setFormInput({
                ...formInput,
                [name]: value
            })
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(formInput);
        alert("form submit")

        if (editid !== "") {
            let up = all.map((val) => {
                if (val.userid === editid) {
                    {
                        val.username = formInput.username
                        val.useremail = formInput.useremail
                        val.userpassword = formInput.userpassword
                        val.gender = formInput.gender
                        val.language = formInput.language
                        val.city = formInput.city
                    }
                }
                return val;
            })

            setAll(up)
            localStorage.setItem('users', JSON.stringify(up))


        } else {
            let obj = {
                userid: Math.floor(Math.random() * 100),
                ...formInput
            }

            let oldrecord = [...all, obj]
            setAll(oldrecord)

            localStorage.setItem('users', JSON.stringify(oldrecord))
        }


        setFormInput({
            username: '',
            useremail: '',
            userpassword: '',
            gender: '',
            language: "",
            city: ''
        })
    }

    let deleteuser = (id) => {

        let deleteuser = all.filter((val, i) => {
            return val.userid != id
        })
        setAll(deleteuser)
        localStorage.setItem('users', JSON.stringify(deleteuser))
        alert("delete user")
    }

    let edituser = (id) => {

        let edit = all.find((val, i) => {
            return val.userid == id
        })
        setFormInput(edit)
        setEditId(id)


    }

    return (
        <div align="center">

            <form onSubmit={handleSubmit}>
                <h1>form </h1>
                <table border={1} cellPadding={5}>
                    <thead>
                        <tr>
                            <td>name :</td>
                            <td><input type="text" onChange={changeInput} name="username" value={formInput.username} /></td>
                        </tr>
                        <tr>
                            <td>email :</td>
                            <td><input type="text" onChange={changeInput} name="useremail" value={formInput.useremail} /></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="text" onChange={changeInput} name='userpassword' value={formInput.userpassword} /></td>
                        </tr>
                        <tr>
                            <td>gender</td>
                            <td>
                                <input type="radio" name="gender" onChange={changeInput} checked={formInput.gender === "male"} value="male" />male
                                <input type="radio" name="gender" onChange={changeInput} checked={formInput.gender === "female"} value="female" />female
                            </td>
                        </tr>
                        <tr>
                            <td>language</td>
                            <td>
                                <input type="checkbox" name="language" onChange={changeInput} checked={formInput.language.includes("C")} value="C" />C
                                <input type="checkbox" name="language" onChange={changeInput} checked={formInput.language.includes("C++")} value="C++" />C++
                                <input type="checkbox" name="language" onChange={changeInput} checked={formInput.language.includes("java")} value="java" />java
                            </td>
                        </tr>
                        <tr>
                            <td>city</td>
                            <td>
                                <select name="city" onChange={changeInput} value={formInput.city}  >
                                    <option value="">---select---</option>
                                    <option value="vapi">vapi</option>
                                    <option value="surat">surat</option>
                                    <option value="tapi">tapi</option>
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" /></td>
                        </tr>
                    </thead>
                </table>
            </form>

            <br />
            <br />

            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>password</td>
                        <td>gender</td>
                        <td>language</td>
                        <td>city</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        all.map((val, index) => {
                            let { userid, username, useremail, userpassword, gender, language, city } = val
                            return (
                                <tr key={index}>
                                    <td>{userid}</td>
                                    <td>{username}</td>
                                    <td>{useremail}</td>
                                    <td>{userpassword}</td>
                                    <td>{gender}</td>
                                    <td>{language}</td>
                                    <td>{city}</td>
                                    <td>
                                        <button onClick={() => deleteuser(userid)}>Delete</button>
                                        <button onClick={() => edituser(userid)} >Edit</button>
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

export default Form
