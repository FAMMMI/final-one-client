import React, { useEffect, useRef, useState } from 'react';
import auth from '../../firebase.init'
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import SocialLogin from './Social Login/SocialLogin';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [email, setEmail] = useState('');
    const [student, setStudent] = useState([]);

    // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user);



    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStudent(data)
            })
    }, [user])

    let signInErrorMessage;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (token) {
        console.log(user);
        navigate(from, { replace: true });
    }



    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        signInErrorMessage = <p className='text-red-500 text-sm'>{error?.message}</p>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email !== "") {
            await sendPasswordResetEmail(email);
            toast.success("Email Sent");
        } else {
            toast.error("please enter your email address", {
                theme: "colored",
            });
        }
    };

    const onSubmit = async (data) => {

        console.log(data);
        await signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex items-center h-screen justify-center'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'

                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email.'
                                }
                            })} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'

                                },
                                minLength: {
                                    value: 6,
                                    message: 'Provide a strong password.'
                                }
                            })} type="password" placeholder="Your password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                            </label>
                        </div>
                        {signInErrorMessage}
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Login' />
                    </form>
                    <button className='btn w-full max-w-xs text-white' onClick={resetPassword}>Reset Password</button>
                    <p><small>New to Doctor's Portal? <Link className='text-secondary' to="/signup">Create New Account</Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            
        </div>
    );
};

export default Login;