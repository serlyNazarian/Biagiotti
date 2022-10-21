import React from "react";
import Slider from "react-slick";
import Products from "./Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products.css";

const ProductsCarousel = () => {

  const productList = [
    {
      id: 1,
      img:
        "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-46-600x803.jpg",
      title: "rose safari",
      description: "Lip Gloss",
      price: "$35.00",
      review: 5,
    },
    {
      id: 2,
      img:
        "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-f-img-2-600x803.jpg",
      title: "film eyeshadow",
      description: "Lip Gloss",
      price: "$23.00",
      review: 5,
    },
    {
      id: 3,
      img:
        "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/08/m-h-prod-f-img-3-600x803.jpg",
      title: "wild pallettes",
      description: "Lip Gloss",
      price: "$25.00",
      review: 5,
    },
    {
      id: 4,
      img:
        "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-49-600x803.jpg",
      title: "stick lipstick",
      description: "Lip Gloss",
      price: "$43.00",
      review: 5,
    },
    {
      id: 4,
      img:
        "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-49-600x803.jpg",
      title: "stick lipstick",
      description: "Lip Gloss",
      price: "$43.00",
      review: 5,
    },
    {
      id: 4,
      img:
        "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-49-600x803.jpg",
      title: "stick lipstick",
      description: "Lip Gloss",
      price: "$43.00",
      review: 5,
    },
    {
      id: 4,
      img:
        "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-49-600x803.jpg",
      title: "stick lipstick",
      description: "Lip Gloss",
      price: "$43.00",
      review: 5,
    },
    {
      id: 4,
      img:
        "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-49-600x803.jpg",
      title: "stick lipstick",
      description: "Lip Gloss",
      price: "$43.00",
      review: 5,
    },
    {
      id: 4,
      img:
        "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-49-600x803.jpg",
      title: "stick lipstick",
      description: "Lip Gloss",
      price: "$43.00",
      review: 5,
    },
    {
      id: 4,
      img:
        "https://biagiotti.qodeinteractive.com/wp-content/uploads/2019/07/Shop-img-49-600x803.jpg",
      title: "stick lipstick",
      description: "Lip Gloss",
      price: "$43.00",
      review: 5,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="ProductsCarousel">
      <Slider {...settings}>
        {
          productList.map((item) => {
            return <Products key={item.id} item={item} />
          })
        }
      </Slider>
    </div>
  );
};

export default ProductsCarousel;
