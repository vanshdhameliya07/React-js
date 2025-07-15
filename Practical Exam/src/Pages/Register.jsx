import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { add_student } from '../redux/action/Action';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [forminput, setForminput] = useState({
        name: '',
        email: '',
        password: ''
    });

    const changeInput = (event) => {
        const { name, value } = event.target;
        setForminput({
            ...forminput,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(add_student(forminput));
        navigate("/login");
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Register User</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={forminput.name}
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
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={forminput.password}
                            onChange={changeInput}
                            style={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" style={styles.button}>Register</button>
                </form>
                <p style={{ marginTop: "10px" }}>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
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
        backgroundColor: '#f1f1f1',
    },
    card: {
        backgroundColor: '#fff',
        padding: '30px 40px',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        width: '350px'
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
        backgroundColor: '#4CAF50',
        color: '#fff',
        cursor: 'pointer',
        fontWeight: '600',
    }
};

export default Register;
