import React from 'react';

const SingleReview = (props) => {
    const { userName, name, email, description, _id, img, star } = props.review;
    return (
        <div class="card w-96 bg-amber-200 shadow-xl py-10">
            <div className='d-flex justify-content-center align-items-center single-review'>

                <h1><b>User Name:</b>{userName}</h1>
            </div>
            <p><b>Ratings:</b>{star}</p>
            <p className='text-center'><b>Description:</b> {description}</p>
        </div>
    );
};

export default SingleReview;