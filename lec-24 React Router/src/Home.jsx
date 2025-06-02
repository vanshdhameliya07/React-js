import React from 'react'
import { Link, useNavigate } from 'react-router'

const Home = () => {

    let color = ["red", "green", "blue"]



    let handleSubmit = () => {
    
    }

    return (
        <div>
            <h1>Home page</h1>
            <Link to={"/"} >Home</Link>
            <br />
            <hr />
            <Link to={"/about"} state={color}>About</Link>
            <br />
            <hr />
            <Link to={"/contact"}>Contact</Link>
            <br />
            <hr />
            <button onClick={() => handleSubmit()}>click</button>
        </div>
    )
}

export default Home
