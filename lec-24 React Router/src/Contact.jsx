import React from 'react'
import { Link } from 'react-router'

const Contact = () => {
    return (
        <div>
            <h1>Contact page</h1>
            <Link to={"/"}>Home</Link>
            <br />
            <hr />
            <Link to={"/about"}>About</Link>
            <br />
            <hr />
            <Link to={"/contact"}>Contact</Link>
        </div>
    )
}

export default Contact
