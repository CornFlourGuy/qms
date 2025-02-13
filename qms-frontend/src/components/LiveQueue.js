import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LiveQueue = () => {
    const [queue, setQueue] = useState([]);

    useEffect(() => {
        fetchQueue();
    }, []);

    const fetchQueue = async () => {
        try {
            const response = await axios.get('http://localhost:4123/api/queue');
            setQueue(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Live Queue</h2>
            <ul style={styles.list}>
                {queue.map((item) => (
                    <li key={item.id} style={styles.item}>
                        <strong>{item.name}</strong>: {item.queueCount} in queue
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

export default LiveQueue;