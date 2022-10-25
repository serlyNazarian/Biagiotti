import React from 'react';
import './ProductTestimonials.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductTestimonials = () => {
    const Reviews = [
        {
            id: 1,
            TestimonialText: "product shades",
            title: "testimonials",
            span: "You said about us",
            Review: "Biagiotti is definitely the place to be when it comes to makeup: You go into the store, and touch it, and try it, and love it. I've never bought anything on the internet. I like the experience.",
            CustomerName: "-Marc Jacobs-",
        },
        {
            id: 2,
            TestimonialText: "product shades",
            title: "testimonials",
            span: "You said about us",
            Review: "I would go to cosmetics counters and buy two or three foundations and powders, then go home and mix them before I came up with something suitable for my undertones.",
            CustomerName: "-Iman-",
        },
        {
            id: 3,
            TestimonialText: "product shades",
            title: "testimonials",
            span: "You said about us",
            Review: "I don't work with a glam squad to get me together for the red carpet, I really enjoy the time it takes to do it myself, to choose my clothes and do my own makeup and my own hair.",
            CustomerName: "-Dita Von Teese-",
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='wrapper'>
            <span className='review TuesdayNight-font-face User-Select-None'>You said about us</span>
            <Slider className='Grab-Cursor' {...settings}>
                {Reviews.map((review) => {
                    return (
                        <div className='Test' key={review.id}>
                            <p className='Testimonial-text TuesdayNight-font-face'>{review.TestimonialText}</p>
                            <h3 className='Testimonial-title'>{review.title}</h3>
                            <p className='Main-review'>{review.Review}</p>
                            <span className='span'>{review.CustomerName}</span>
                            {/* <span className='review TuesdayNight-font-face'>{review.span}</span> */}
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
};

export default ProductTestimonials;