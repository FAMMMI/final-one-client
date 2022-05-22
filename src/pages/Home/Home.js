import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ContactUs from './ContactUs';
import IntroCard from './IntroCard';
import Parts from './Parts';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <IntroCard></IntroCard>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;