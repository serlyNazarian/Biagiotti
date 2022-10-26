import React from "react";
import { Carousel } from "react-responsive-carousel";
import ViewMoreButton from "../../View More Button/ViewMoreButton";
import "./slideShow.css";

const data = [
  {
    id: 10,
    image:
      "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-slider-img-3.jpg",
    logo: "/images/m-h-slider-img-2.png",
    caption: "Original style",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupto quos dolores te quas",
  },
  {
    id: 11,
    image:
      "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-slider-img-2.jpg",
    logo: "/images/m-h-slider-img-2.png",
    caption: "Summer look",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupto quos dolores te quas",
  },
  {
    id: 12,
    image:
      "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-slider-img-1.jpg",
    logo: "/images/m-h-slider-img-2.png",
    caption: "Infinite beauty",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupto quos dolores te quas",
  },
];

function HomeCarousel() {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showIndicators={false}
      axis="horizontal"
      dynamicHeight={false}
      infiniteLoop
      autoPlay
      interval={5000}
      showStatus={false}
    >
      {data.map((slide) => {
        return (
          <div className="carousel-description" key={slide.id}>
            <img className="carousel-img" src={slide.image} alt="" />
            <img
              className="img-logo-test"
              src="/images/m-h-slider-img-2.png"
              alt="slideshow"
            />
            <span className="slider-title">{slide.caption}</span>
            <span className="slider-text">{slide.description}</span>
            <div className="btn">
              <ViewMoreButton text="View More" />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
