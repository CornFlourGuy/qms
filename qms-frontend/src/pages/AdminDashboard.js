import React from 'react';

const AdminDashboard = () => {
    return (
        <div style={styles.container}>
            <h1>Admin Dashboard</h1>
            <p>Manage staff, view feedback, and monitor collections.</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
};

export default AdminDashboard;