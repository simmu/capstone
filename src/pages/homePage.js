import React from 'react';
import HeroCarousel from '../components/heroCarousel';
import NewMenu from '../components/newMenu';
import BusinessHour from '../components/businessHour';
import CustomerReview from '../components/customerReview';

function HomePage() {
    return (
    <div id="home">
        <HeroCarousel />
        <div className='section-container'>
            <NewMenu />
        </div>
        <BusinessHour />
        <CustomerReview />
    </div>
    );
}

export default HomePage;
