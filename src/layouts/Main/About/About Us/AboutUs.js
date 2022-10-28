import React from 'react';
import ViewMoreButton from '../../../../components/View More Button/ViewMoreButton';
import './AboutUs.css'

const AboutUs = () => {
    const AboutItems = [
        {
            id: 1,
            Img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-single-img-1.jpg",
            Title: "Timeline",
            Name: "How did we get here",
            DescriptionTitle: "AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO DIGNISSIMOS DUCIMUS QUI BLANDITIIS PRAESENTIUM VOLUPTATUM DELENITI ATQUE CORRUPT",
            Description: "At vero eos et accusamus et iusto odi odgnissimos ducimus qui blanditiis praesentium volup tatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi",
        },
        {
            id: 2,
            Img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-single-img-4.jpg",
            Title: "Timeline",
            Name: "What it takes to lead",
            DescriptionTitle: "AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO DIGNISSIMOS DUCIMUS QUI BLANDITIIS PRAESENTIUM VOLUPTATUM DELENITI ATQUE CORRUPT",
            Description: "At vero eos et accusamus et iusto odi odgnissimos ducimus qui blanditiis praesentium volup tatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi",
        },
    ];
    return (
        <>
            {AboutItems.map((Item) => {
                return (
                    <div className='about-wrapper' key={Item.id}>
                        <div style={{ backgroundImage: `url(${Item.Img})` }} className='left-div'></div>
                        <div className='right-div'>
                            <span className='About-Title TuesdayNight-font-face'>{Item.Title}</span>
                            <h2 className='about-second-title'>{Item.Name}</h2>
                            <h5 className='first-description'>{Item.DescriptionTitle}</h5>
                            <p className='second-description'>{Item.Description}</p>
                            <ViewMoreButton text="find beauty" />
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default AboutUs;