import React from 'react';

const Cart = ({ cart, removeFromCart, checkout }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div style={styles.container}>
            <h2>Cart</h2>
            <ul style={styles.list}>
                {cart.map((item) => (
                    <li key={item.id} style={styles.item}>
                        <strong>{item.name}</strong> - ${item.price.toFixed(2)} x {item.quantity}
                        <button onClick={() => removeFromCart(item.id)} style={styles.button}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={checkout} style={styles.checkoutButton}>
                Checkout
            </button>
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
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    checkoutButton: {
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default Cart;