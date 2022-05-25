import React from 'react';

const singleReviewNav = (props) => {

    const { userName, name, email, description, _id, img, star } = props.review;
    return (
        <div class="card w-96 bg-amber-200 shadow-xl py-10">

            <div class="avatar">
                <div class="w-24 rounded mx-auto mb-6">
                    <img src={img} />
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center single-review'>

                <h1><b>User Name:</b>{userName}</h1>
            </div>
            <p><b>Ratings:</b>{star}</p>
            <p className='text-center'><b>Review:</b> {description}</p>
        </div>
    );

};

export default singleReviewNav;