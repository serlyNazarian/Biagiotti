import React from 'react';
import DarkHeader from "../layouts/darkHeader/DarkHeader";
import LightHeader from "../layouts/lightHeader/LightHeader";
import Footer from "../layouts/Footer/Footer";
import "../assets/Styles/Layout.css";
import { Outlet } from 'react-router-dom';
import SubscribeModal from '../components/Subscribe Modal/SubscribeModal';
import TopBtn from '../components/To Top Btn/TopBtn';

const Layout = () => {
    return (
        <div className='Layout'>
            <DarkHeader />
            <LightHeader />
            <Outlet />
            <SubscribeModal />
            <TopBtn />
            <Footer />
        </div>
    );
};

export default Layout;