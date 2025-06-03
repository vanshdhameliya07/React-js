import React from 'react'
import { Link, useNavigate } from 'react-router'

const Home = () => {

    let navigate = useNavigate();
    let data = {
        color: ["red", "green", "blue"],
        users: [
            { id: 1, name: "e", phone: 1245 },
            { id: 2, name: "wweew", phone: 89712 },
            { id: 3, name: "rewww", phone: 56899 },
        ]
    }


    let handleSubmit = () => {
        navigate('/about', { state: data })
    }

    return (
        <div>
            <h1>Home page</h1>
            <Link to={"/"} >Home</Link>
            <br />
            <hr />
            <Link to={"/about"}>About</Link>
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
