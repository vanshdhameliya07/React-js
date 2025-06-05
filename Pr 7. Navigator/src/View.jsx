import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const View = () => {
    const [allrecord, setAllrecord] = useState(JSON.parse(localStorage.getItem('user')) || [])
    let navigator = useNavigate()

    let userDelete = (id) => {
        let deleteuser = allrecord.filter(val => val.id != id)
        setAllrecord(deleteuser);
        localStorage.setItem('user', JSON.stringify(deleteuser));
        alert("delete user")
    }

    let useredit = (id) => {
        navigator(`/edit/${id}`)
    }

    return (

        <div style={styles.container}>
            <h1 style={styles.heading}>Volunteer View</h1>

            {allrecord.length === 0 ? (
                <p style={styles.noData}>No records found.</p>
            ) : (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>ID</th>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Email</th>
                            <th style={styles.th}>Availability</th>
                            <th style={styles.th}>Event Interest</th>
                            <th style={styles.th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allrecord.map(({ id, name, email, Availability, EventInterest }) => (
                            <tr key={id}>
                                <td style={styles.td}>{id}</td>
                                <td style={styles.td}>{name}</td>
                                <td style={styles.td}>{email}</td>
                                <td style={styles.td}>{Availability}</td>
                                <td style={styles.td}>{EventInterest}</td>
                                <td style={styles.td}>
                                    <button style={styles.deleteBtn} onClick={() => userDelete(id)}>Delete</button>
                                    <button style={styles.editBtn} onClick={() => useredit(id)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <Link to="/" style={styles.link}>Add New Volunteer</Link>
        </div>
    )
}

const styles = {
    container: {
        maxWidth: '900px',
        margin: '40px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#fefefe',
        fontFamily: 'Segoe UI, sans-serif',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    },
    heading: {
        marginBottom: '20px',
        color: '#333'
    },
    noData: {
        fontSize: '16px',
        color: '#888'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px'
    },
    th: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'center'
    },
    td: {
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'center'
    },
    deleteBtn: {
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        marginRight: '8px',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    editBtn: {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    link: {
        display: 'inline-block',
        marginTop: '10px',
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold'
    }
}

export default View
