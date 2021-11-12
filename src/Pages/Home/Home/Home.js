import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Discount from '../Discount/Discount';
import GallarySection from '../GallarySection/GallarySection';
import Products from '../Products/Products';
import Speclalist from '../Speclalist/Speclalist';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Testimonials></Testimonials>
            <Discount></Discount>
            <GallarySection></GallarySection>
            <Speclalist></Speclalist>
            <Brands></Brands>
            <Footer></Footer>
        </div>
    );
};

export default Home;