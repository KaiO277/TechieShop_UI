import React from 'react';
import Categories from './Categories';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import Banner from './Banner';

const index = () => {
    return (
        <>
        <HeroSection />
        <Categories />
        <FeaturedProducts />
        <Banner />
        </>
    );
}

export default index;