import React from 'react';
import BackgroundRow from '../layouts/Main/Background Row/BackgroundRow';
import Blog from '../layouts/Main/Blog/Blog';
import ClientsCarousel from '../layouts/Main/Clients Carousel/ClientsCarousel';
import "../assets/Styles/About.css";

const About = () => {
    return (
        <div className='About-Wrapper'>
            <img src="https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/faq-title-area-6.jpg" alt="" />
            <div className='About-This-Brand'>
                <span className='TuesdayNight-font-face'>perfect shades</span>
                <h2>About this cosmetic brand</h2>
                <p>At vero eos et accusamus et iusto odi odgnissimos ducimus qui blanditiis praesentium volup tatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi. At vero eos et accusamus et iusto odi. No brute nominati elaboraret ius, eu sint omnesque deserunt mei. Audiam vidisse debitis ea pro, nec in natum indoctum. Et cum alia comprehensam. Sumo ornatus ad per, pri ei epicuri consulatu, quod justo pro an. Et sed nihil pericula. In wisi rationibus pri.</p>
                <BackgroundRow />
                <Blog />
                <ClientsCarousel />
            </div>
        </div>
    );
};

export default About;