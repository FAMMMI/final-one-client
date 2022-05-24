import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    console.log(reviews);
    return (
        <div >
            <h1 className='text-center text-2xl font-bold text-primary mb-4 mx-auto'>Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 pb-28 px-12'>
                {
                    reviews?.slice(0, 6).map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;