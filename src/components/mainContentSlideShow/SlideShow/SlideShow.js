import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    id: 10,
    image:
      "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-slider-img-3.jpg",
    caption: "Caption",
    description: "Description Here",
  },
  {
    id: 11,
    image:
      "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-slider-img-3.jpg",
    caption: "Caption",
    description: "Description Here",
  },
  {
    id: 12,
    image:
      "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-slider-img-3.jpg",
    caption: "Caption",
    description: "Description Here",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide) => {
        return (
          <Carousel.Item key={slide.id}>
            <img className="d-block w-100" src={slide.image} alt="slider" />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
