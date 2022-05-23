import React from 'react';
import Button from '../Shared/Button'
const MyProfile = () => {
    return (

        <div className='mx-auto'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Name:${ }</h2>
                    <p className='text-xl font-bold'>Email: ${ }</p>
                    <p className='text-xl font-bold'>Phone: ${ }</p>
                    <form class="card-actions">
                        <input type="text" placeholder="Present Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Permanent Address" class="input input-bordered w-full max-w-xs" />
                        <Button>Save</Button>
                    </form>

                </div>

            </div>
        </div>

    );
};

export default MyProfile;