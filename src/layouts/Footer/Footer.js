import React from 'react';
import FooterBottom from './Footer-Bottom/FooterBottom';
import FooterTop from './Footer-Top/FooterTop';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className='Footer'>
            <FooterTop />
            <FooterBottom />
        </footer>
    );
};

export default Footer;