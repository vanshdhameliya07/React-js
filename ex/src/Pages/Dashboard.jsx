import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    let navigate = useNavigate()
    let register = JSON.parse(localStorage.getItem('register')) || []
    let login = JSON.parse(localStorage.getItem('loginuser')) || []

    return (
        <div>

            <h1>Welcome dashboard page</h1>
        </div>
    )
}

export default Dashboard
