import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router'

const About = () => {

    let location = useLocation()
    console.log(location.state);

    return (
        <div>
            <h1>About page</h1>
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

export default About
