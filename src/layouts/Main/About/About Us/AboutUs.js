import React from 'react';
import ViewMoreButton from '../../../../components/View More Button/ViewMoreButton';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <div className='about-wrapper'>
                <div className='left-div'></div>
                <div className='right-div'>
                    <span className='About-Title TuesdayNight-font-face'>Timeline</span>
                    <h2 className='about-second-title'>how did we get here</h2>
                    <h5 className='first-description'>AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO DIGNISSIMOS DUCIMUS QUI BLANDITIIS PRAESENTIUM VOLUPTATUM DELENITI ATQUE CORRUPT</h5>
                    <p className='second-description'>At vero eos et accusamus et iusto odi odgnissimos ducimus qui blanditiis praesentium volup tatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi</p>
                    {/* <ViewMoreButton text="find beauty" /> */}
                </div>
            </div>
            <div className='about-wrapper'>
                <div className='left-div'></div>
                <div className='right-div'>
                    <span className='About-Title TuesdayNight-font-face'>Timeline</span>
                    <h2 className='about-second-title'>how did we get here</h2>
                    <h5 className='first-description'>AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO DIGNISSIMOS DUCIMUS QUI BLANDITIIS PRAESENTIUM VOLUPTATUM DELENITI ATQUE CORRUPT</h5>
                    <p className='second-description'>At vero eos et accusamus et iusto odi odgnissimos ducimus qui blanditiis praesentium volup tatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi</p>
                    {/* <ViewMoreButton text="find beauty" /> */}
                </div>
            </div>
        </>
    );
};

export default AboutUs;