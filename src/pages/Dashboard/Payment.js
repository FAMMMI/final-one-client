import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../Shared/Loading';
// import { CardElement, Elements, useElements, useStripe } from '../../src';



const stripePromise = loadStripe('pk_test_51L0X16GyPcxXGcIb1S8LZhIvSuikfSzmwReeMi6qIA9RC6ZwRNcesH7i43S4nDNg1NgdKIXnFlNEDrU50acK08lh006JF1d8aN');


const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;
    const { data: orders, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>


            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-accent text-xl font-bold">Hello ! {orders.userName}</p>
                    <h2 class="card-title">Pay for {orders.name}</h2>
                    <p>Please pay : <span className='font-bold text-neutral text-xl'>${orders.totalPrice}</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            orders={orders}
                        />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;