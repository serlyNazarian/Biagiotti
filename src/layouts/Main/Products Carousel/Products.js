import React from "react";
import { FaStar } from "react-icons/fa";
import "./Products.css";

const Products = ({ item }) => {

  return (
    <div className="product">
      <img
        className="product-img"
        src={item.img}
        alt=""
      />
      <h4 className="product-title">{item.title}</h4>
      <p className="product-description">{item.description}</p>
      <span className="product-price">{item.price}</span>
      <div className="product-reviews">
        <FaStar className="product-review" />
        <FaStar className="product-review" />
        <FaStar className="product-review" />
        <FaStar className="product-review" />
        <FaStar className="product-review" />
      </div>
    </div>
  )
};

export default Products;
