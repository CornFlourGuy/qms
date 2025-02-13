import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeedbackForm from '../components/FeedbackForm';
import { useParams } from 'react-router-dom';

const SubmitFeedback = () => {
    const { id } = useParams();
    const [token, setToken] = useState(null);

    useEffect(() => {
        fetchToken();
    },);

    const fetchToken = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/tokens/${id}`);
            setToken(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    if (!token) return <p>Loading...</p>;

    return (
        <div>
            <h1>Submit Feedback for Token #{id}</h1>
            <FeedbackForm token={token} />
        </div>
    );
};

export default SubmitFeedback;
//