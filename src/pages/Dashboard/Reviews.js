import React, { useState, useEffect } from 'react';

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>

        </div>
    );
};

export default Reviews;