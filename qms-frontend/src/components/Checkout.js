import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart, clearCart }) => {
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const navigate = useNavigate();

    const handleCheckout = async () => {
        try {
            const response = await axios.post('http://localhost:4123/api/orders', {
                items: cart,
                paymentMode: paymentMethod,
            });

            clearCart();
            navigate('/order-confirmation', { state: { token: response.data.token } });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Checkout</h2>
            <p>Select Payment Method:</p>
            <label>
                <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                />
                Cash
            </label>
            <label>
                <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={paymentMethod === 'online'}
                    onChange={() => setPaymentMethod('online')}
                />
                Online
            </label>
            <button onClick={handleCheckout} style={styles.button}>
                Confirm Order
            </button>
        </div>
    );
};

const styles = {
    container: {
        margin: '20px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default Checkout;