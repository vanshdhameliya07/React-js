import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Add_Student } from '../redux/action/Action';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [forminput, setForminput] = useState({
        sname: '',
        Class: '',
        email: ''
    });

    const changeInput = (e) => {
        const { name, value } = e.target;
        setForminput({ ...forminput, [name]: value });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(Add_Student(forminput));
        navigate("/view");
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Add Student</h2>
                <form onSubmit={handlesubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Student Name</label>
                        <input
                            type="text"
                            name="sname"
                            value={forminput.sname}
                            onChange={changeInput}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Class</label>
                        <input
                            type="text"
                            name="Class"
                            value={forminput.Class}
                            onChange={changeInput}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={forminput.email}
                            onChange={changeInput}
                            style={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" style={styles.button}>Add Student</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f7f7f7',
    },
    card: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        width: '350px',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
        display: 'block',
        color: '#555',
        fontWeight: '500',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
    },
    button: {
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#28a745',
        color: '#fff',
        cursor: 'pointer',
        fontWeight: '600',
    },
};

export default Dashboard;
