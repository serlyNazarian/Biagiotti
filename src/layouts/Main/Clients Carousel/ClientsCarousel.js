import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientsCarousel.css";

const ClientsCarousel = () => {
    const clients = [
        {
            id: 1,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/m-h-client-h1.png",
        },
        {
            id: 2,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/m-h-client-h2.png",
        },
        {
            id: 3,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/m-h-client-h3.png",
        },
        {
            id: 4,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/m-h-client-h4.png",
        },
        {
            id: 5,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/m-h-client-h5.png",
        },
        {
            id: 6,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/m-h-client-h6.png",
        },
        {
            id: 7,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/m-h-client-h7.png",
        },
        {
            id: 8,
            img: "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/m-h-client-h8.png"
        }
    ]
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <div className='Clients-div'>
            <Slider {...settings}>
                {clients.map((client) => {
                    return (
                        <div className='clients-container' key={client.id}>
                            <img src={client.img} alt="" />
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};

export default ClientsCarousel;