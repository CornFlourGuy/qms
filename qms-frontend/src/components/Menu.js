import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = ({ addToCart }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:4123/api/items');
            setItems(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Menu</h2>
            <ul style={styles.list}>
                {items.map((item) => (
                    <li key={item.id} style={styles.item}>
                        <strong>{item.name}</strong> - ${item.price.toFixed(2)}
                        <button onClick={() => addToCart(item)} style={styles.button}>
                            Add to Cart
                        </button>
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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        padding: '5px 10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default Menu;