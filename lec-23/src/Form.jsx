import React, { useState } from 'react'

const Form = ({ handleSubmitFun, changeInput,formInput }) => {

  





    let handleSubmit = () => {
        handleSubmitFun(formInput)
    }

    return (
        <div align="center">

            <form>
                <h1>Form </h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>name</td>
                            <td><input type="text" name='name' onChange={changeInput} value={formInput.name} /></td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td><input type="text" name='email' onChange={changeInput} value={formInput.email} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="button" onClick={() => handleSubmit()} value="Submit" />
                            </td>
                        </tr>
                    </thead>
                </table>
            </form>

        </div>
    )
}

export default Form
