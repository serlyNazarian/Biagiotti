import React from 'react';
import "./FooterTop.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const FooterTop = () => {
    return (
        <div className='Footer-Top'>
            <div className='Footer-Row'>
                <div className='Footer-Item'>
                    <h4 className='Footer-Title'>Contact</h4>
                    <span>Address: Seestrasse 21, Zurich</span>
                    <span>E-mail: biagiottitheme@gmail.com</span>
                    <span>Phone: +99 411 725 39 12</span>
                    <img className='Footer-Credit' src="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/footer-img-1.png" alt="" />
                </div>
                <div className='Footer-Item'>
                    <img src="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/09/logo-for-sidebar.png" alt="" />
                    <span>An oasis of online beauty</span>
                    <span>Built specifically so your new</span>
                    <span>cosmetics site can take</span>
                    <span>everyone's breaths away</span>
                </div>
                <div className='Footer-Item'>
                    <h4>Collections</h4>
                    <span>Glowing skin is a result</span>
                    <span>ABCDEH Beauty - Forever Young</span>
                    <span>Pure Skin Solutions</span>
                </div>
            </div>
            <div className='Footer-Socials'>
                <div className='Social-Div'>
                    <FaFacebookF className='Social' />
                </div>
                <div className='Social-Div'>
                    <FaTwitter className='Social' />
                </div>
                <div className='Social-Div'>
                    <FaInstagram className='Social' />
                </div>
                <div className='Social-Div'>
                    <FaPinterest className='Social' />
                </div>
            </div>
        </div>
    );
};

export default FooterTop;