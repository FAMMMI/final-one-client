import React from 'react';
import bg from '../../assets/images/bg3.jpg';
import { FcComboChart, FcCurrencyExchange, FcSportsMode } from "react-icons/fc";

const BusinessSummery = () => {
    return (
        <section className='mb-10' style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div>
                <h2 className='text-accent text-2xl font-bold text-center uppercase pb-9'>Our business summary </h2>
            </div>
            <div className='flex flex-row gap-6 justify-evenly pb-10'>
                <div className='grid grid-cols-1 gap-3'>
                    <h1 className='text-8xl font-bold place-content-center pl-6'><FcCurrencyExchange></FcCurrencyExchange></h1>
                    <h3 className='text-accent text-2xl font-bold'>200 core USD </h3>
                    <p className='text-accent text-xl font-bold'>Market Size</p>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <h1 className='text-8xl font-bold pl-6 place-content-center'><FcComboChart></FcComboChart></h1>
                    <h3 className='text-accent text-2xl font-bold'>20%</h3>
                    <p className='text-accent text-xl font-bold'>Annual Growth</p>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <h1 className='text-8xl font-bold place-content-center pl-6'><FcSportsMode></FcSportsMode></h1>
                    <h3 className='text-accent text-2xl font-bold'>19per 1000</h3>
                    <p className='text-accent text-xl font-bold'>Penetration rate</p>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummery;