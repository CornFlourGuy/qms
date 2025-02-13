import React from 'react';

const UserDashboard = () => {
    return (
        <div style={styles.container}>
            <h1>User Dashboard</h1>
            <p>View live queue, place orders, and track your token status.</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
};

export default UserDashboard;