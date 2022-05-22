import React from 'react';
import img from '../../assets/images/motor.png'

const IntroCard = () => {
    return (
        <div className='my-10'>
            <h2 className='text-5xl mb-4 font-bold text-accent'>BNB MOTORPARTS</h2>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='w-1/2' src="https://thumbs.dreamstime.com/b/motorcycle-background-1867544.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-4xl font-bold">WE ARE HERE TO</h1>
                        <p class="py-6">to meet the goal of achieving the success throughout the world as the most successful bike parts manufacturing company. he market of motorcycles in Bangladesh has been expanding rapidly. Today more than 1,000 units of motorcycle are sold daily. Annual local registration of motorcycle stood over 400,000 units in 2019, growing at the rate of 35% per annum since 2014. There was a slight fall in demand due to Covid19 in 2020 with total registered vehicles falling to 3110,000. However, the market is expected to grow back soon.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroCard;