import React, { useState } from 'react';
import LiveQueue from '../components/LiveQueue';
import Menu from '../components/Menu';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';

const UserDashboard = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            setCart(
                cart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <div style={styles.container}>
            <h1>User Dashboard</h1>
            <div style={styles.grid}>
                <LiveQueue />
                <Menu addToCart={addToCart} />
                <Cart cart={cart} removeFromCart={removeFromCart} checkout={() => {}} />
                {cart.length > 0 && (
                    <Checkout cart={cart} clearCart={clearCart} />
                )}
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

export default UserDashboard;