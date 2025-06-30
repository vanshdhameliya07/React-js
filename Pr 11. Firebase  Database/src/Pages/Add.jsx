import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../../FireBase'
import './Add.css'

const Add = () => {

    let [forminput, setForminput] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
    })
    let navigate = useNavigate()

    let db = getDatabase(app)

    let changeinput = (event) => {
        let { name, value } = event.target;
        setForminput({
            ...forminput,
            [name]: value
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        let obj = {
            id: Math.floor(Math.random() * 1000),
            ...forminput
        }
        set(ref(db, `users/${obj.id}`), {
            name: forminput.name,
            company: forminput.company,
            email: forminput.email,
            phone: forminput.phone,
            message: forminput.message
        }).then((res) => {
            alert("Add successfully")
            navigate("/view")
        }).catch((err) => {
            console.log(err);
            return false

        })
    }

    return (
        <div className="form-wrapper">
            <div className="left-box">
                <h2>Sample Company</h2>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>

            <div className="right-box">
                <h1 className="form-title">Title</h1>
                <form className='form-content' onSubmit={handleSubmit}>
                    <h2>Email Us</h2>
                    <div className="form-row">
                        <label>Name</label>
                        <input type="text" name="name" onChange={changeinput} value={forminput.name} />
                        <label>Company</label>
                        <input type="text" name="company" onChange={changeinput} value={forminput.company} />
                    </div>

                    <div className="form-row">
                        <label>Email Address</label>
                        <input type="email" name="email" onChange={changeinput} value={forminput.email} />
                        <label>Phone Number</label>
                        <input type="text" name="phone" onChange={changeinput} value={forminput.phone} />
                    </div>

                    <div className="form-row">
                        <label>Message</label>
                        <textarea name="message" rows="4" onChange={changeinput} value={forminput.message} />
                    </div>

                    <button type="submit" className="submit-button">SUBMIT</button>
                </form>

                <div className="link-to-view">
                    <Link to="/view">View</Link>
                </div>
            </div>
        </div>
    )
}

export default Add
