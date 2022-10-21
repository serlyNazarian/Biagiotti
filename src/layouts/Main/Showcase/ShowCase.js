import React from 'react';
import './ShowCase.css';

const ShowCase = () => {
    const showcaseList = [
        {
            id: 1,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-port-img-1.jpg",
            firstText: "lip liner",
            secondText: "Beauty, Body care",
        },
        {
            id: 2,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-port-img-2.jpg",
            firstText: "scratch eyeliner",
            secondText: "Beauty, Cosmetics",
        },
        {
            id: 3,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-port-img-3.jpg",
            firstText: "baked blush",
            secondText: "Beauty, Make Up",
        },
        {
            id: 4,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-port-img-4.jpg",
            firstText: "pointy ball",
            secondText: "Beauty, Body care",
        },
        {
            id: 5,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-port-img-5.jpg",
            firstText: "mineral blush",
            secondText: "Beauty Cosmetics",
        },
        {
            id: 6,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-port-img-6.jpg",
            firstText: "face primer",
            secondText: "Beauty, Make Up",
        },
        {
            id: 7,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-port-img-7.jpg",
            firstText: "cool primer",
            secondText: "Beauty, Body care",
        },
        {
            id: 8,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/m-h-port-img-8.jpg",
            firstText: "skin care",
            secondText: "Beauty, Cosmetics",
        },
    ];
    return (
        <div className='Showcases-div'>
            {showcaseList.map((item) => {
                return (
                    <div className='Showcase-div' key={item.id}>
                        <div className='effect5'>
                            <img className='Showcase-img' src={item.img} alt="" />
                            <div className='showcase-link'>
                                <span className='first-text'>{item.firstText}</span>
                                <span className='second-text'>{item.secondText}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ShowCase;