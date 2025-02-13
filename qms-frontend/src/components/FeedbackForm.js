import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = ({ token }) => {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:4123/api/feedback', {
                token_id: token.id,
                rating,
                comment,
            });
            setMessage('Feedback submitted successfully!');
            setTimeout(() => navigate('/user/dashboard'), 2000); // Redirect after 2 seconds
        } catch (err) {
            setMessage('Error submitting feedback.');
            console.error(err);
        }
    };

    return (
        <div style={styles.container}>
            <h3>Submit Feedback</h3>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label>
                    Rating:
                    <select value={rating} onChange={(e) => setRating(Number(e.target.value))} style={styles.input}>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </label>
                <textarea
                    placeholder="Your feedback..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    style={styles.textarea}
                />
                <button type="submit" style={styles.button}>
                    Submit Feedback
                </button>
            </form>
            {message && <p style={styles.message}>{message}</p>}
        </div>
    );
};

const styles = {
    container: {
        margin: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: '10px',
        margin: '5px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    textarea: {
        padding: '10px',
        margin: '5px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
        height: '100px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    message: {
        marginTop: '10px',
        color: 'green',
    },
};

export default FeedbackForm;