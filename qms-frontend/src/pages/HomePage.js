import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/items');
            setItems(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h1>Menu</h1>
            <ul style={styles.list}>
                {items.map((item) => (
                    <li key={item.id} style={styles.item}>
                        <strong>{item.name}</strong> - ${item.price.toFixed(2)}{' '}
                        <span>(Prep Time: {item.preparation_time} mins)</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
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

export default HomePage;