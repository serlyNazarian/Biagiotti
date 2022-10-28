import React from 'react';
import "./FooterBottom.css";

const FooterBottom = () => {
    return (
        <div className='Footer-Bottom'>
            <div className='Footer-Bottom-Row'>
                <ul className='Footer-Bottom-Wrapper'>
                    <li className='Footer-Bottom-Item'>Privacy Policy</li>
                    <li className='Footer-Bottom-Item'>Terms and Conditions</li>
                    <li className='Footer-Bottom-Item'>About</li>
                    <li className='Footer-Bottom-Item'>Shipping Info</li>
                    <li className='Footer-Bottom-Item'>Returns/Exchange</li>
                    <li className='Footer-Bottom-Item'>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default FooterBottom;