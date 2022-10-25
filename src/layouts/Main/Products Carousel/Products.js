import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./Products.css";

const Products = ({ item }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="product" onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown && (
        <div className="Hover-div">
          <div className="Hover-inner-div">
            <button className="Hover-btn">
              <FaPlus />
            </button>
            <button className="Hover-btn">
              <FaEye />
            </button>
            <button className="Hover-btn">
              <FaRegHeart />
            </button>
          </div>
        </div>
      )}
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
