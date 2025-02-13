import React from 'react';

const HomePage = () => {
    return (
        <div style={styles.container}>
            <h1>Welcome to QMS - Queue Management System</h1>
            <p>Manage queues, orders, and feedback efficiently.</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
};

export default HomePage;