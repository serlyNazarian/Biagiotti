import React from 'react';
import "../assets/Styles/Home.css";
import MainContent from '../components/mainContentSlideShow/MainContent';
import AboutSection from '../layouts/Main/About/About';
import BackgroundRow from '../layouts/Main/Background Row/BackgroundRow';
import Benefits from '../layouts/Main/Benefits Section/Benefits';
import Blog from '../layouts/Main/Blog/Blog';
import ClientsCarousel from '../layouts/Main/Clients Carousel/ClientsCarousel';
import LatestProducts from '../layouts/Main/Latest Products/LatestProducts';
import ProductTestimonials from '../layouts/Main/Product Testimonials/ProductTestimonials';
import ProductsMain from '../layouts/Main/Products Carousel/ProductsMain';
import ShowCase from '../layouts/Main/Showcase/ShowCase';
import Subscribe from '../layouts/Main/Subscribe/Subscribe';

const Home = () => {
    return (
        <div className='Home'>
            <MainContent />
            <ProductsMain />
            <ShowCase />
            <ClientsCarousel />
            <ProductTestimonials />
            <Benefits />
            <AboutSection />
            <LatestProducts />
            <BackgroundRow />
            <Blog />
            <Subscribe />
        </div>
    );
};

export default Home;