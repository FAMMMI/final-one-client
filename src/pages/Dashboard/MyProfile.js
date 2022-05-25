import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const { id } = useParams()
    const [user, loading] = useAuthState(auth);
    const [newUser, setNewUser] = useState([]);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorage_key = process.env.REACT_APP_imageStorage_key;


    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setNewUser(data);
            })
    }, [user])
    if (loading) {
        return <Loading></Loading>
    }
    console.log(newUser);

    const onSubmit = async data => {

        // console.log(data);

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        console.log(image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorage_key}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.success) {
                    const img = result.data.url;
                    const updatedUser = {
                        name: newUser[0]?.name,
                        email: newUser[0]?.email,
                        address: data.address,
                        phone: data.phone,
                        password: newUser[0]?.password,
                        img: img,
                        role: newUser[0]?.role
                    }
                    console.log(updatedUser);
                    fetch(`http://localhost:5000/users?id=${newUser[0]?._id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(updatedUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success(`${updatedUser?.name} profile has been updated`);
                            fetch(`http://localhost:5000/users?email=${user?.email}`, {
                                method: 'GET',
                                headers: {
                                    'content-type': 'application/json',
                                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                                }
                            })
                                .then(res => res.json())
                                .then(data => {
                                    setNewUser(data);
                                })
                        });
                }
                // console.log(data);
                reset();
            })
    }

    return (
        <div className=' min-h-screen '>
            <div className="grid grid-cols-2 align-center my-8 justify-around">
                <div class="card w-96 mx-auto bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={newUser[0]?.img} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Name: {newUser[0]?.name}</h2>
                        <h2 class="card-title">email: {newUser[0]?.email}</h2>
                        <p>Address: {newUser[0]?.address}</p>
                        <p>Phone: {newUser[0]?.phone}</p>


                    </div>
                </div>
                <div class="page-add">
                    <div class="container-add">
                        <div class="left-add">
                            <div class="login">Update Profile</div>

                        </div>

                        <div class="right-add flex align-center justify-center">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="input-group w-75 mx-auto form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Your Phone Number"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'Phone is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                    </label>
                                </div>

                                <div className="input-group w-75 mx-auto form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Address"
                                        min={1}
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                    </label>
                                </div>

                                <div className="input-group w-75 mx-auto form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input
                                        type="file"
                                        className="input  w-full max-w-xs"
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: ' '
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.file?.type === 'required' && <span className="label-text-alt text-red-500">{errors.file.message}</span>}
                                    </label>
                                </div>

                                <input className='btn btn-primary text-white' type="submit" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;