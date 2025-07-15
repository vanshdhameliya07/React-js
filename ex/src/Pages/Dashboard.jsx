// /components/Dashboard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("loginuser"));
        console.log(user);

        if (!user) {
            alert("Please login first.");
            navigate("/login");
        }
    }, [navigate]);

    return <h2>Welcome to Dashboard</h2>;
};

export default Dashboard;
