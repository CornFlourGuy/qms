import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StaffList = () => {
    const [staffs, setStaffs] = useState([]);

    useEffect(() => {
        fetchStaffs();
    }, []);

    const fetchStaffs = async () => {
        try {
            const response = await axios.get('http://localhost:4123/api/staffs'); // Updated port
            setStaffs(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h3>Staff Members</h3>
            <ul style={styles.list}>
                {staffs.map((staff) => (
                    <li key={staff.id} style={styles.item}>
                        <strong>{staff.name}</strong> - {staff.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        margin: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    item: {
        margin: '10px 0',
        fontSize: '18px',
    },
};

export default StaffList;