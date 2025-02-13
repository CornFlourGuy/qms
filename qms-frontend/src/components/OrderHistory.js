import React, { useEffect, useState } from 'react'; // Import useState and useEffect
import axios from 'axios';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]); // Use the hook

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:4123/api/orders/history');
            setOrders(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Order History</h2>
            <ul style={styles.list}>
                {orders.map((order) => (
                    <li key={order.id} style={styles.item}>
                        <strong>Token ID:</strong> {order.id} | <strong>Status:</strong> {order.status}
                        {order.status === 'delivered' && !order.feedback && (
                            <Link to={`/submit-feedback/${order.id}`} style={styles.link}>
                                Submit Feedback
                            </Link>
                        )}
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
    link: {
        marginLeft: '10px',
        color: '#007bff',
        textDecoration: 'none',
    },
};

export default OrderHistory;