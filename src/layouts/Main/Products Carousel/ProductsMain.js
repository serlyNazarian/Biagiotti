import React from "react";
import ProductsTitle from "../Products Title/ProductsTitle";
import ProductsCarousel from "./ProductsCarousel";
import "./ProductsMain.css";

const ProductsMain = () => {
  return (
    <div className="Products-Main">
      <ProductsTitle />
      <ProductsCarousel />
    </div>
  );
};

export default ProductsMain;
