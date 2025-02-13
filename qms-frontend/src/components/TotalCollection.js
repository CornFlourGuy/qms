import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TotalCollection = () => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchTotal();
    }, []);

    const fetchTotal = async () => {
        try {
            const response = await axios.get('http://localhost:5000/admin/total-collection');
            setTotal(response.data.total);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h3>Total Collection</h3>
            <p>${total.toFixed(2)}</p>
        </div>
    );
};

const styles = {
    container: {
        margin: '20px',
    },
};

export default TotalCollection;