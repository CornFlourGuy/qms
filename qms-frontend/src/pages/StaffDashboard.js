import React from 'react';

const StaffDashboard = () => {
    return (
        <div style={styles.container}>
            <h1>Staff Dashboard</h1>
            <p>Manage tokens, view live queue, and process payments.</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
};

export default StaffDashboard;