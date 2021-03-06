import React from 'react';

const singleReviewNav = (props) => {

    const { userName, name, email, description, _id, img, star } = props.review;
    return (
        <div class="flex gap-4 w-96 bg-amber-200 shadow-xl py-4 px-4 border-solid border-4 border-amber-600">

            <div class="avatar">
                <div class="w-24 rounded mx-auto mb-6">
                    <img src={img} />
                </div>
            </div>
            <div className='grid grid-cols-1 justify-content-center align-items-center single-review'>

                <h1><b>User Name:</b>{userName}</h1>

                <p><b>Ratings:</b>{star}</p>
                <p className='text-center'><b>Review:</b> {description}</p>
            </div>
        </div>
    );

};

export default singleReviewNav;