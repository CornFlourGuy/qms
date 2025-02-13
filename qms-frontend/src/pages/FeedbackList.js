import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        try {
            const response = await axios.get('http://localhost:5000/admin/feedback');
            setFeedbacks(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h3>Feedback</h3>
            <ul style={styles.list}>
                {feedbacks.map((feedback) => (
                    <li key={feedback.id} style={styles.item}>
                        <strong>{feedback.user_name}</strong>: {feedback.comment} ({feedback.rating}/5)
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

export default FeedbackList;