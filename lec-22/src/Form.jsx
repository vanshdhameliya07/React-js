import React, { useState } from 'react'

const Form = () => {

    let [formInput, setFormInput] = useState({
        username: '',
        useremail: '',
        userpassword: '',
        usergender: '',
        language: [],
        city: ''
    })

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

        setFormInput({
            username: '',
            useremail: '',
            userpassword: '',
            usergender: '',
            language: "",
            city: ''
        })
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
                                <input type="radio" name="usergender" onChange={changeInput} checked={formInput.usergender === "male"} value="male" />male
                                <input type="radio" name="usergender" onChange={changeInput} checked={formInput.usergender === "female"} value="female" />female
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

        </div>
    )
}

export default Form
