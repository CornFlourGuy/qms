import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LiveCollections = () => {
    const [collections, setCollections] = useState({ cash: 0, online: 0 });

    useEffect(() => {
        fetchCollections();
    }, []);

    const fetchCollections = async () => {
        try {
            const response = await axios.get('http://localhost:5000/admin/collections');
            setCollections(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h3>Live Collections</h3>
            <p>Cash: ${collections.cash.toFixed(2)}</p>
            <p>Online: ${collections.online.toFixed(2)}</p>
        </div>
    );
};

const styles = {
    container: {
        margin: '20px',
    },
};

export default LiveCollections;