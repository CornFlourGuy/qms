import React, { useState } from 'react';
import axios from 'axios';

const RemoveStaffForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.delete('http://localhost:4123/admin/staffs', {
                data: { email },
            });
            setMessage('Staff removed successfully!');
            setEmail('');
        } catch (err) {
            setMessage('Error removing staff.');
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h3>Remove Staff</h3>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="email"
                    placeholder="Email of Staff to Remove"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Remove Staff
                </button>
            </form>
            {message && <p style={styles.message}>{message}</p>}
        </div>
    );
};

const styles = {
    container: {
        margin: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: '10px',
        margin: '5px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    message: {
        marginTop: '10px',
        color: 'red',
    },
};

export default RemoveStaffForm;