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
                    fetch(`http://localhost:5000/users?email=${newUser[0]?.email}`, {
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
        <div data-aos='fade-right'>
            <div class="portfoliocard">
                <div class="coverphoto"></div>
                <div class="profile_picture" style={{
                    backgroundImage: `url(${newUser[0]?.img})`
                }}></div>

                <div class="right_col">
                    <h2 data-aos='fade-left' class="name">{newUser[0]?.name}</h2>
                    <h3 data-aos='fade-left' class="location mt-2">{newUser[0]?.adress}</h3>
                    <ul data-aos='fade-left' class="contact_information">
                        <h5>{newUser[0]?.email}</h5>
                        <h5>{newUser[0]?.phone}</h5>
                    </ul>
                </div>
            </div>
            <div style={{ margin: "0 0 1050px 0" }} class="page-add">
                <div class="container-add">
                    <div class="left-add">
                        <div class="login">Update Profile</div>

                    </div>

                    <div class="right-add d-flex align-items-center justify-content-center">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="input-group w-75 mx-auto">
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

                            <div className="input-group w-75 mx-auto">
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

                            <div className="input-group w-75 mx-auto">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input
                                    type="file"
                                    className="input input-bordered w-full max-w-xs"
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

                            <input className='form-submit button-33 w-75 mx-auto mt-4' type="submit" value="Update" />
                        </form>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default MyProfile;