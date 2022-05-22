import React from 'react';

const MyReviews = () => {
    const handleReviewSubmit = event => {
        event.preventDefault();
    }
    return (
        <div onSubmit={handleReviewSubmit}>
            <h2 className='text-accent text-3xl font-bold uppercase'>Give a rating</h2>
            <div class="rating rating-lg rating-half">
                <input type="radio" name="rating-10" class="rating-hidden" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" checked />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" />
                <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text mx-auto">Your description</span>
                </label>
                <textarea class="textarea textarea-bordered h-24 w-1/2 mx-auto" placeholder="Description"></textarea>

            </div>
            <button className='btn btn-primary text-white mt-6'>Submit</button>
        </div>
    );
};

export default MyReviews;