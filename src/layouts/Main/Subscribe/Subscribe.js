import React from 'react';
import ViewMoreButton from '../../../components/View More Button/ViewMoreButton';
import "./Subscribe.css"


const Subscribe = () => {
    return (
        <div className='Subscribe-Wrapper'>
            <div className='Subscribe-Test'>
                <span className='Subscribe-Title TuesdayNight-font-face'>Subscribe</span>
                <div className='Input-Row'>
                    <input className='Main-Input' type="text" placeholder='E-mail address' />
                    <ViewMoreButton text="Send" />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;