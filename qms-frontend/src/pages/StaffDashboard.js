import React from 'react';
import { useNavigate } from 'react-router-dom';

const StaffDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
    };

    return (
        <div style={styles.container}>
            <h1>Staff Dashboard</h1>
            <p>Welcome, Staff!</p>
            <button onClick={handleLogout} style={styles.button}>
                Logout
            </button>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default StaffDashboard;