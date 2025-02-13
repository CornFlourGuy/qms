import React from 'react';
import AddStaffForm from '../components/AddStaffForm';
import RemoveStaffForm from '../components/RemoveStaffForm';
import LiveCollections from '../components/LiveCollections';
import TotalCollection from '../components/TotalCollection';
import FeedbackList from '../components/FeedbackList';
import StaffList from '../components/StaffList'; // Import the StaffList component

const AdminDashboard = () => {
    return (
        <div style={styles.container}>
            <h1>Admin Dashboard</h1>
            <div style={styles.grid}>
                <AddStaffForm />
                <RemoveStaffForm />
                <LiveCollections />
                <TotalCollection />
                <FeedbackList />
                <StaffList /> {/* Add the StaffList component */}
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '20px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
    },
};

export default AdminDashboard;