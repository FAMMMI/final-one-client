import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ContactUs from './ContactUs';
import IntroCard from './IntroCard';
import Parts from './Parts';
import Reviews from './Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <IntroCard></IntroCard>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;